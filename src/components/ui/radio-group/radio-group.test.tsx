import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { RadioGroup, RadioGroupItem } from './radio-group'

describe('RadioGroup', () => {
  it('renderiza os itens', () => {
    render(
      <RadioGroup defaultValue='sim'>
        <RadioGroupItem value='sim' aria-label='Sim' />
        <RadioGroupItem value='nao' aria-label='Não' />
      </RadioGroup>,
    )
    expect(screen.getByRole('radiogroup')).toBeInTheDocument()
    expect(screen.getAllByRole('radio')).toHaveLength(2)
  })
})
