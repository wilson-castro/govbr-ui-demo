import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select'

describe('Select', () => {
  it('renderiza o gatilho com placeholder', () => {
    render(
      <Select>
        <SelectTrigger aria-label='UF'>
          <SelectValue placeholder='Selecione' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='sc'>SC</SelectItem>
        </SelectContent>
      </Select>,
    )
    expect(screen.getByRole('combobox', { name: 'UF' })).toBeInTheDocument()
    expect(screen.getByText('Selecione')).toBeInTheDocument()
  })
})
