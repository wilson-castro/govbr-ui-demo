'use client'

import { cn } from '@/lib/utils'
import * as React from 'react'

export type SplitterPanelProps = React.ComponentPropsWithoutRef<'div'> & {
  defaultSize?: number
  min?: number
  max?: number
}

const SplitterPanel: React.FC<SplitterPanelProps> = ({ children }) => (
  <>{children}</>
)
SplitterPanel.displayName = 'SplitterPanel'

export type SplitterProps = React.ComponentPropsWithoutRef<'div'> & {
  layout?: 'horizontal' | 'vertical'
}

const MIN_PERCENT = 5

const SplitterRoot = React.forwardRef<HTMLDivElement, SplitterProps>(
  ({ className, layout = 'horizontal', children, ...props }, ref) => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const panels = React.Children.toArray(children).filter(
      React.isValidElement,
    ) as React.ReactElement<SplitterPanelProps>[]
    const count = panels.length

    const [sizes, setSizes] = React.useState<number[]>(() => {
      const provided = panels.map((panel) => panel.props.defaultSize)
      const knownSum = provided
        .filter((size): size is number => typeof size === 'number')
        .reduce((total, size) => total + size, 0)
      const unknownCount = provided.filter((size) => size == null).length
      const remaining = unknownCount > 0 ? (100 - knownSum) / unknownCount : 0
      return provided.map((size) =>
        typeof size === 'number' ? size : remaining,
      )
    })

    const draggingIndex = React.useRef<number | null>(null)
    const constraints = panels.map((panel) => ({
      min: panel.props.min ?? MIN_PERCENT,
      max: panel.props.max ?? 100 - MIN_PERCENT,
    }))

    // Stable identity; the current closure is updated in the effect below.
    const moveImpl = React.useRef<(event: PointerEvent) => void>(() => {})
    const upImpl = React.useRef<() => void>(() => {})
    const onMove = React.useCallback(
      (event: PointerEvent) => moveImpl.current(event),
      [],
    )
    const onUp = React.useCallback(() => upImpl.current(), [])

    React.useEffect(() => {
      moveImpl.current = (event: PointerEvent) => {
        const index = draggingIndex.current
        const container = containerRef.current
        if (index === null || !container) {
          return
        }
        const rect = container.getBoundingClientRect()
        const isHorizontal = layout === 'horizontal'
        const total = isHorizontal ? rect.width : rect.height
        const position = isHorizontal
          ? event.clientX - rect.left
          : event.clientY - rect.top
        const percent = Math.max(0, Math.min(100, (position / total) * 100))

        setSizes((previous) => {
          const next = [...previous]
          const before = next
            .slice(0, index)
            .reduce((sum, size) => sum + size, 0)
          const pairTotal = (next[index] ?? 0) + (next[index + 1] ?? 0)
          const minFirst = constraints[index]?.min ?? MIN_PERCENT
          const maxFirst = Math.min(
            constraints[index]?.max ?? 100 - MIN_PERCENT,
            pairTotal - (constraints[index + 1]?.min ?? MIN_PERCENT),
          )
          const first = Math.max(minFirst, Math.min(maxFirst, percent - before))
          next[index] = first
          next[index + 1] = pairTotal - first
          return next
        })
      }
      upImpl.current = () => {
        draggingIndex.current = null
        document.removeEventListener('pointermove', onMove)
        document.removeEventListener('pointerup', onUp)
        document.body.style.userSelect = ''
      }
    })

    React.useEffect(
      () => () => {
        document.removeEventListener('pointermove', onMove)
        document.removeEventListener('pointerup', onUp)
      },
      [onMove, onUp],
    )

    const startDrag = (index: number) => (event: React.PointerEvent) => {
      event.preventDefault()
      draggingIndex.current = index
      document.body.style.userSelect = 'none'
      document.addEventListener('pointermove', onMove)
      document.addEventListener('pointerup', onUp)
    }

    const isHorizontal = layout === 'horizontal'

    return (
      <div
        ref={(node) => {
          containerRef.current = node
          if (typeof ref === 'function') {
            ref(node)
          } else if (ref) {
            ref.current = node
          }
        }}
        data-slot='splitter'
        className={cn(
          'flex h-full w-full overflow-hidden',
          'rounded-sm border border-solid border-border',
          isHorizontal ? 'flex-row' : 'flex-col',
          className,
        )}
        {...props}
      >
        {panels.map((panel, index) => (
          <React.Fragment key={index}>
            <div
              className={cn('overflow-auto', panel.props.className)}
              style={{
                flex: `0 0 ${sizes[index]}%`,
                minWidth: 0,
                minHeight: 0,
              }}
            >
              {panel.props.children}
            </div>
            {index < count - 1 && (
              <div
                role='separator'
                // An adjustable window splitter is focusable by design.
                // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                tabIndex={0}
                aria-orientation={isHorizontal ? 'vertical' : 'horizontal'}
                onPointerDown={startDrag(index)}
                className={cn(
                  'group relative z-10 shrink-0 bg-border',
                  'transition-colors hover:bg-primary focus-govbr',
                  isHorizontal
                    ? 'w-px cursor-col-resize'
                    : 'h-px cursor-row-resize',
                )}
              >
                <span
                  aria-hidden='true'
                  className={cn(
                    'absolute',
                    isHorizontal
                      ? 'inset-y-0 -left-1 -right-1'
                      : 'inset-x-0 -top-1 -bottom-1',
                  )}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    )
  },
)
SplitterRoot.displayName = 'Splitter'

const Splitter = Object.assign(SplitterRoot, { Panel: SplitterPanel })

export { Splitter, SplitterPanel }
