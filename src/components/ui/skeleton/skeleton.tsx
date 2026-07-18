import { cn } from '@/lib/utils'
import * as React from 'react'

const Skeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot='skeleton'
    aria-hidden='true'
    className={cn('animate-pulse rounded-sm bg-muted', className)}
    {...props}
  />
))
Skeleton.displayName = 'Skeleton'

export type SkeletonTextProps = React.ComponentPropsWithoutRef<'div'> & {
  lines?: number
}

const SkeletonText = React.forwardRef<HTMLDivElement, SkeletonTextProps>(
  ({ className, lines = 3, ...props }, ref) => (
    <div
      ref={ref}
      data-slot='skeleton-text'
      className={cn('flex w-full flex-col gap-2', className)}
      {...props}
    >
      {Array.from({ length: lines }, (_, index) => (
        <Skeleton
          key={index}
          className={cn('h-4', index === lines - 1 && lines > 1 && 'w-3/5')}
        />
      ))}
    </div>
  ),
)
SkeletonText.displayName = 'SkeletonText'

export { Skeleton, SkeletonText }
