import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Switch } from './switch'

describe('Switch', () => {
  it('renderiza com role switch', () => {
    render(<Switch aria-label='Notificações' />)
    expect(
      screen.getByRole('switch', { name: 'Notificações' }),
    ).toBeInTheDocument()
  })
})
