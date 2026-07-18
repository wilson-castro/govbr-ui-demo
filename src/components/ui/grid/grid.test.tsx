import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Col, Row } from './grid'

describe('Grid', () => {
  it('renderiza Row e Col', () => {
    render(
      <Row gutter={16}>
        <Col span={12}>Coluna</Col>
      </Row>,
    )
    expect(screen.getByText('Coluna')).toBeInTheDocument()
  })
})
