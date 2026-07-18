import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Checkbox } from './checkbox'

describe('Checkbox', () => {
  it('renderiza com role checkbox e estado marcado', () => {
    render(<Checkbox defaultChecked aria-label='Aceito' />)
    const checkbox = screen.getByRole('checkbox', { name: 'Aceito' })
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeChecked()
  })
})
