import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Empty } from './empty'

describe('Empty', () => {
  it('renderiza título e descrição', () => {
    render(<Empty title='Vazio' description='Sem itens' />)
    expect(screen.getByText('Vazio')).toBeInTheDocument()
    expect(screen.getByText('Sem itens')).toBeInTheDocument()
  })
})
