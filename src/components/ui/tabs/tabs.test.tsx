import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

describe('Tabs', () => {
  it('renderiza a lista e o conteúdo ativo', () => {
    render(
      <Tabs defaultValue='a'>
        <TabsList>
          <TabsTrigger value='a'>A</TabsTrigger>
          <TabsTrigger value='b'>B</TabsTrigger>
        </TabsList>
        <TabsContent value='a'>Conteúdo A</TabsContent>
        <TabsContent value='b'>Conteúdo B</TabsContent>
      </Tabs>,
    )
    expect(screen.getByRole('tablist')).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'A' })).toHaveAttribute(
      'data-state',
      'active',
    )
    expect(screen.getByText('Conteúdo A')).toBeInTheDocument()
  })
})
