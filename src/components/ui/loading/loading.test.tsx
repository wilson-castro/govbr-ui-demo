import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Loading } from './loading'

describe('Loading', () => {
  it('renderiza sem quebrar', () => {
    const { container } = render(<Loading label='Carregando' />)
    expect(container.firstChild).toBeTruthy()
  })
})
