import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Alert, AlertDescription, AlertTitle } from './alert'

describe('Alert', () => {
  it('renderiza título e descrição com role alert', () => {
    render(
      <Alert variant='success'>
        <AlertTitle>Ok</AlertTitle>
        <AlertDescription>Salvo</AlertDescription>
      </Alert>,
    )
    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(screen.getByText('Ok')).toBeInTheDocument()
    expect(screen.getByText('Salvo')).toBeInTheDocument()
  })
})
