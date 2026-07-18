import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Skeleton, SkeletonText } from './skeleton'

describe('Skeleton', () => {
  it('renderiza o bloco e as linhas de texto', () => {
    const { container } = render(
      <>
        <Skeleton className='h-4' />
        <SkeletonText lines={2} />
      </>,
    )
    expect(
      container.querySelector('[data-slot="skeleton"]'),
    ).toBeInTheDocument()
    expect(
      container.querySelector('[data-slot="skeleton-text"]'),
    ).toBeInTheDocument()
  })
})
