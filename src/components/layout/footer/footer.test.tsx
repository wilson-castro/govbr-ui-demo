import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './footer'

describe('Footer', () => {
  it('renderiza sem quebrar', () => {
    const { container } = render(<Footer>Rodapé</Footer>)
    expect(container.firstChild).toBeTruthy()
  })
})
