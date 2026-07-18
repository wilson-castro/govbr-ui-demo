import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Splitter } from './splitter'

describe('Splitter', () => {
  it('renderiza os painéis', () => {
    render(
      <Splitter>
        <Splitter.Panel defaultSize={50}>Esquerda</Splitter.Panel>
        <Splitter.Panel>Direita</Splitter.Panel>
      </Splitter>,
    )
    expect(screen.getByText('Esquerda')).toBeInTheDocument()
    expect(screen.getByText('Direita')).toBeInTheDocument()
  })
})
