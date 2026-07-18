import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Separator } from './separator'

describe('Separator', () => {
  it('renderiza o separador', () => {
    const { container } = render(<Separator />)
    expect(
      container.querySelector('[data-slot="separator"]'),
    ).toBeInTheDocument()
  })
})
