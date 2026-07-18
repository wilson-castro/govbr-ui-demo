import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Flex } from './flex'

describe('Flex', () => {
  it('renderiza os filhos com display flex', () => {
    const { container } = render(
      <Flex gap='middle'>
        <span>X</span>
      </Flex>,
    )
    expect(screen.getByText('X')).toBeInTheDocument()
    expect(container.querySelector('[data-slot="flex"]')).toHaveClass('flex')
  })
})
