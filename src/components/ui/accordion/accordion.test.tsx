import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion'

describe('Accordion', () => {
  it('mostra o conteúdo do item aberto', () => {
    render(
      <Accordion type='single' collapsible defaultValue='a'>
        <AccordionItem value='a'>
          <AccordionTrigger>Pergunta</AccordionTrigger>
          <AccordionContent>Resposta</AccordionContent>
        </AccordionItem>
      </Accordion>,
    )
    expect(screen.getByRole('button', { name: 'Pergunta' })).toBeInTheDocument()
    expect(screen.getByText('Resposta')).toBeInTheDocument()
  })
})
