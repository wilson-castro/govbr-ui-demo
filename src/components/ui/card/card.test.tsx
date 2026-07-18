import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Card, CardContent, CardHeader, CardTitle } from './card'

describe('Card', () => {
  it('renderiza título e conteúdo', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Título</CardTitle>
        </CardHeader>
        <CardContent>Corpo</CardContent>
      </Card>,
    )
    expect(screen.getByText('Título')).toBeInTheDocument()
    expect(screen.getByText('Corpo')).toBeInTheDocument()
  })
})
