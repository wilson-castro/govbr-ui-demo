import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Label } from './label'

describe('Label', () => {
  it('mostra o marcador opcional', () => {
    render(<Label optional>Observações</Label>)
    expect(screen.getByText(/Observações/)).toBeInTheDocument()
    expect(screen.getByText('(opcional)')).toBeInTheDocument()
  })
})
