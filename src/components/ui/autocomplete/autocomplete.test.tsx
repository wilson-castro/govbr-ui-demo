import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Autocomplete } from './autocomplete'

describe('Autocomplete', () => {
  it('renderiza um combobox', () => {
    render(<Autocomplete options={['SC', 'SP']} placeholder='Estado' />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Estado')).toBeInTheDocument()
  })
})
