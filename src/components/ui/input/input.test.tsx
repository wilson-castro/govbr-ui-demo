import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Input } from './input'

describe('Input', () => {
  it('renderiza um textbox', () => {
    render(<Input placeholder='Nome' />)
    expect(screen.getByPlaceholderText('Nome')).toBeInTheDocument()
  })

  it('reflete o estado inválido', () => {
    render(<Input aria-invalid aria-label='CPF' />)
    expect(screen.getByLabelText('CPF')).toHaveAttribute('aria-invalid', 'true')
  })
})
