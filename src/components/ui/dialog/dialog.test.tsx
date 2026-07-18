import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './dialog'

describe('Dialog', () => {
  it('renderiza o gatilho e mantém o conteúdo fechado', () => {
    render(
      <Dialog>
        <DialogTrigger>Abrir</DialogTrigger>
        <DialogContent>
          <DialogTitle>Modal</DialogTitle>
        </DialogContent>
      </Dialog>,
    )
    expect(screen.getByRole('button', { name: 'Abrir' })).toBeInTheDocument()
    expect(screen.queryByText('Modal')).not.toBeInTheDocument()
  })
})
