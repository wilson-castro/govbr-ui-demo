import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FieldHint, FieldMessage } from './field'

describe('Field', () => {
  it('FieldHint renderiza o texto de apoio', () => {
    render(<FieldHint>Dica</FieldHint>)
    expect(screen.getByText('Dica')).toBeInTheDocument()
  })

  it('FieldMessage de erro usa role alert', () => {
    render(<FieldMessage state='danger'>Erro</FieldMessage>)
    expect(screen.getByRole('alert')).toHaveTextContent('Erro')
  })
})
