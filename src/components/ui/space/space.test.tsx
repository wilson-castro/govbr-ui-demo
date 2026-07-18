import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Space } from './space'

describe('Space', () => {
  it('renderiza os filhos', () => {
    render(
      <Space>
        <span>A</span>
        <span>B</span>
      </Space>,
    )
    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
  })
})
