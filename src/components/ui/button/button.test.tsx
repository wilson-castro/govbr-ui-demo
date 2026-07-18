import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from './button'

describe('Button', () => {
  it('renderiza o texto e usa type=button por padrão', () => {
    render(<Button>Enviar</Button>)
    const button = screen.getByRole('button', { name: 'Enviar' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'button')
  })

  it('aplica a variante e o tamanho', () => {
    render(
      <Button variant='secondary' size='lg'>
        Salvar
      </Button>,
    )
    const button = screen.getByRole('button', { name: 'Salvar' })
    expect(button.className).toContain('border-primary')
    expect(button.className).toContain('h-12')
  })
})
