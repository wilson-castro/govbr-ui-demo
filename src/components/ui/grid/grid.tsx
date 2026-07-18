'use client'

import {
  type Breakpoint,
  BREAKPOINT_ORDER,
  useBreakpoint,
} from '@/hooks/use-breakpoint'
import { cn } from '@/lib/utils'
import * as React from 'react'

const COLUMNS = 24

const RowGutterContext = React.createContext(0)

const justifyMap = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  'space-around': 'justify-around',
  'space-between': 'justify-between',
  'space-evenly': 'justify-evenly',
} as const

const alignMap = {
  top: 'items-start',
  middle: 'items-center',
  bottom: 'items-end',
  stretch: 'items-stretch',
} as const

export type RowProps = React.ComponentPropsWithoutRef<'div'> & {
  gutter?: number | [number, number]
  justify?: keyof typeof justifyMap
  align?: keyof typeof alignMap
  wrap?: boolean
}

const Row = React.forwardRef<HTMLDivElement, RowProps>(
  (
    {
      className,
      gutter = 0,
      justify,
      align,
      wrap = true,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const [horizontal, vertical] = Array.isArray(gutter) ? gutter : [gutter, 0]

    return (
      <RowGutterContext.Provider value={horizontal}>
        <div
          ref={ref}
          data-slot='row'
          className={cn(
            'flex',
            wrap && 'flex-wrap',
            justify && justifyMap[justify],
            align && alignMap[align],
            className,
          )}
          style={{
            marginInline: horizontal ? -horizontal / 2 : undefined,
            rowGap: vertical || undefined,
            ...style,
          }}
          {...props}
        >
          {children}
        </div>
      </RowGutterContext.Provider>
    )
  },
)
Row.displayName = 'Row'

type ColSpan = number | { span?: number; offset?: number }

export type ColProps = React.ComponentPropsWithoutRef<'div'> & {
  span?: number
  offset?: number
  xs?: ColSpan
  sm?: ColSpan
  md?: ColSpan
  lg?: ColSpan
  xl?: ColSpan
  flex?: React.CSSProperties['flex']
}

function toWidth(span: number): string {
  return `${(span / COLUMNS) * 100}%`
}

const Col = React.forwardRef<HTMLDivElement, ColProps>(
  (
    { className, span, offset, xs, sm, md, lg, xl, flex, style, ...props },
    ref,
  ) => {
    const gutter = React.useContext(RowGutterContext)
    const breakpoint = useBreakpoint()
    const responsive: Record<Breakpoint, ColSpan | undefined> = {
      xs,
      sm,
      md,
      lg,
      xl,
    }

    let currentSpan = span
    let currentOffset = offset
    const activeIndex = BREAKPOINT_ORDER.indexOf(breakpoint)
    for (let index = 0; index <= activeIndex; index++) {
      const key = BREAKPOINT_ORDER[index]
      const value = key === undefined ? undefined : responsive[key]
      if (value === undefined) {
        continue
      }
      if (typeof value === 'number') {
        currentSpan = value
      } else {
        if (value.span !== undefined) {
          currentSpan = value.span
        }
        if (value.offset !== undefined) {
          currentOffset = value.offset
        }
      }
    }

    return (
      <div
        ref={ref}
        data-slot='col'
        className={cn('box-border', className)}
        style={{
          paddingInline: gutter ? gutter / 2 : undefined,
          flex:
            flex ??
            (currentSpan != null ? `0 0 ${toWidth(currentSpan)}` : undefined),
          maxWidth: currentSpan != null ? toWidth(currentSpan) : undefined,
          marginInlineStart: currentOffset ? toWidth(currentOffset) : undefined,
          ...style,
        }}
        {...props}
      />
    )
  },
)
Col.displayName = 'Col'

export { Col, Row }
