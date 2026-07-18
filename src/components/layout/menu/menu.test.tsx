import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Menu } from './menu'

describe('Menu', () => {
  it('renderiza sem quebrar', () => {
    const { container } = render(<Menu />)
    expect(container.firstChild).toBeTruthy()
  })
})
