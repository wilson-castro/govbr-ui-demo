import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Textarea } from './textarea'

describe('Textarea', () => {
  it('renderiza um textbox', () => {
    render(<Textarea placeholder='Comentário' />)
    expect(screen.getByPlaceholderText('Comentário')).toBeInTheDocument()
  })
})
