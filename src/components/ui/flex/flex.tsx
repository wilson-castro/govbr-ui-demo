import { cn } from '@/lib/utils'
import * as React from 'react'

const gapMap = { small: 8, middle: 16, large: 24 } as const

export type FlexGap = keyof typeof gapMap | number

export type FlexProps = React.ComponentPropsWithoutRef<'div'> & {
  vertical?: boolean
  justify?: React.CSSProperties['justifyContent']
  align?: React.CSSProperties['alignItems']
  gap?: FlexGap
  wrap?: boolean | React.CSSProperties['flexWrap']
  flex?: React.CSSProperties['flex']
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      className,
      vertical = false,
      justify,
      align,
      gap,
      wrap,
      flex,
      style,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot='flex'
      className={cn('flex', vertical && 'flex-col', className)}
      style={{
        justifyContent: justify,
        alignItems: align,
        gap: typeof gap === 'number' ? gap : gap ? gapMap[gap] : undefined,
        flexWrap: wrap === true ? 'wrap' : wrap === false ? 'nowrap' : wrap,
        flex,
        ...style,
      }}
      {...props}
    />
  ),
)
Flex.displayName = 'Flex'

export { Flex }
