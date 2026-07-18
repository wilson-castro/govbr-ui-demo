'use client'

import * as React from 'react'

export const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 992,
  lg: 1280,
  xl: 1600,
} as const

export type Breakpoint = keyof typeof BREAKPOINTS
export const BREAKPOINT_ORDER: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl']

export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = React.useState<Breakpoint>('xs')

  React.useEffect(() => {
    const compute = () => {
      const width = window.innerWidth
      let active: Breakpoint = 'xs'
      for (const key of BREAKPOINT_ORDER) {
        if (width >= BREAKPOINTS[key]) {
          active = key
        }
      }
      setBreakpoint(active)
    }
    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])

  return breakpoint
}
