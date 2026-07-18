import { cn } from '@/lib/utils'
import * as React from 'react'

const sizeMap = { small: 8, middle: 16, large: 24 } as const

export type SpaceSize = keyof typeof sizeMap | number

function resolveSize(size: SpaceSize | undefined): number {
  if (typeof size === 'number') {
    return size
  }
  return sizeMap[size ?? 'middle']
}

const alignMap = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
} as const

export type SpaceProps = React.ComponentPropsWithoutRef<'div'> & {
  direction?: 'horizontal' | 'vertical'
  size?: SpaceSize | [SpaceSize, SpaceSize]
  align?: keyof typeof alignMap
  wrap?: boolean
  split?: React.ReactNode
}

const Space = React.forwardRef<HTMLDivElement, SpaceProps>(
  (
    {
      className,
      direction = 'horizontal',
      size = 'middle',
      align,
      wrap = false,
      split,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const [horizontal, vertical] = Array.isArray(size) ? size : [size, size]
    const items = React.Children.toArray(children).filter(
      (child) =>
        child !== null && child !== undefined && typeof child !== 'boolean',
    )
    const defaultAlign = direction === 'horizontal' ? 'items-center' : ''

    return (
      <div
        ref={ref}
        data-slot='space'
        className={cn(
          'inline-flex',
          direction === 'vertical' ? 'flex-col' : 'flex-row',
          wrap && 'flex-wrap',
          align ? alignMap[align] : defaultAlign,
          className,
        )}
        style={{
          columnGap: resolveSize(horizontal),
          rowGap: resolveSize(vertical),
          ...style,
        }}
        {...props}
      >
        {items.map((child, index) => (
          <React.Fragment key={index}>
            {child}
            {split && index < items.length - 1 && (
              <span aria-hidden='true' className='inline-flex items-center'>
                {split}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    )
  },
)
Space.displayName = 'Space'

export { Space }
