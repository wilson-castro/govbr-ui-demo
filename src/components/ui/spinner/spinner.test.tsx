import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Spinner } from './spinner'

describe('Spinner', () => {
  it('renderiza com role status e rótulo', () => {
    render(<Spinner label='Carregando' />)
    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.getByText('Carregando')).toBeInTheDocument()
  })
})
