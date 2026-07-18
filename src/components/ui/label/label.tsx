import { cn } from '@/lib/utils'
import * as LabelPrimitive from '@radix-ui/react-label'
import * as React from 'react'

export type LabelProps = React.ComponentPropsWithoutRef<
  typeof LabelPrimitive.Root
> & {
  optional?: boolean
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, optional, children, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    data-slot='label'
    className={cn(
      'inline-block text-sm font-semibold text-foreground mb-1',
      'peer-disabled:cursor-not-allowed peer-disabled:opacity-45',
      className,
    )}
    {...props}
  >
    {children}
    {optional && (
      <span className='ml-1 font-normal text-muted-foreground'>(opcional)</span>
    )}
  </LabelPrimitive.Root>
))
Label.displayName = 'Label'

export { Label }
