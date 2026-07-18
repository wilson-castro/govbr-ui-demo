import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pagination } from './pagination'

describe('Pagination', () => {
  it('renderiza sem quebrar', () => {
    const { container } = render(<Pagination />)
    expect(container.firstChild).toBeTruthy()
  })
})
