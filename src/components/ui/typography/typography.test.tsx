import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Link, Paragraph, Text, Title } from './typography'

describe('Typography', () => {
  it('renderiza o título como heading do nível informado', () => {
    render(<Title level={2}>Olá</Title>)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Olá' }),
    ).toBeInTheDocument()
  })

  it('renderiza Text, Paragraph e Link', () => {
    render(
      <>
        <Text strong>forte</Text>
        <Paragraph>par</Paragraph>
        <Link href='#'>ir</Link>
      </>,
    )
    expect(screen.getByText('forte')).toBeInTheDocument()
    expect(screen.getByText('par')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'ir' })).toBeInTheDocument()
  })
})
