import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Stepper } from './stepper'

describe('Stepper', () => {
  it('renderiza os rótulos das etapas', () => {
    render(<Stepper steps={['Um', 'Dois']} value={1} />)
    expect(screen.getByText('Um')).toBeInTheDocument()
    expect(screen.getByText('Dois')).toBeInTheDocument()
  })
})
