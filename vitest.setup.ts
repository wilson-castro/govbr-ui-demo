import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

// The official webcomponents are custom elements that do not exist in jsdom;
// we replace them with a stub that just renders its children.
vi.mock('@govbr-ds/webcomponents-react', async () => {
  const react = await import('react')
  const cache = new Map<string, unknown>()
  const makeStub = (name: string) => {
    const Stub = react.forwardRef<
      HTMLDivElement,
      { children?: React.ReactNode }
    >(({ children }, ref) => react.createElement('div', { ref }, children))
    Stub.displayName = name
    return Stub
  }
  return new Proxy({ __esModule: true } as Record<string, unknown>, {
    has() {
      return true
    },
    get(target, key) {
      if (typeof key !== 'string' || key === 'then') {
        return undefined
      }
      if (key === '__esModule') {
        return true
      }
      if (key === 'default') {
        return undefined
      }
      if (!cache.has(key)) {
        cache.set(key, makeStub(key))
      }
      return cache.get(key)
    },
  })
})

// Polyfills that jsdom does not provide and some Radix primitives expect.
const noop = () => {}

if (!window.matchMedia) {
  window.matchMedia = ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: noop,
    removeEventListener: noop,
    addListener: noop,
    removeListener: noop,
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia
}

Element.prototype.scrollIntoView = noop
Element.prototype.hasPointerCapture = () => false
Element.prototype.releasePointerCapture = noop

globalThis.ResizeObserver = class {
  observe = noop
  unobserve = noop
  disconnect = noop
} as unknown as typeof ResizeObserver

afterEach(() => {
  cleanup()
})
