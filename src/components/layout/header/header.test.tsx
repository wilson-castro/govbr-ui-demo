import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './header'

describe('Header', () => {
  it('renderiza sem quebrar', () => {
    const { container } = render(<Header>Cabeçalho</Header>)
    expect(container.firstChild).toBeTruthy()
  })
})
