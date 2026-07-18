import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Layout } from './layout'

describe('Layout', () => {
  it('renderiza header, content e footer', () => {
    render(
      <Layout>
        <Layout.Header>Topo</Layout.Header>
        <Layout.Content>Meio</Layout.Content>
        <Layout.Footer>Base</Layout.Footer>
      </Layout>,
    )
    expect(screen.getByText('Topo')).toBeInTheDocument()
    expect(screen.getByText('Meio')).toBeInTheDocument()
    expect(screen.getByText('Base')).toBeInTheDocument()
  })
})
