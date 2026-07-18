import { cn } from '@/lib/utils'
import * as React from 'react'

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<'input'>
>(({ className, type, ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    data-slot='input'
    className={cn(
      'flex h-10 w-full rounded-md bg-white px-4 py-0',
      'border border-solid border-input',
      'text-[16.8px] font-medium text-foreground',
      'placeholder:text-muted-foreground',
      'focus-govbr-field',
      'disabled:cursor-not-allowed disabled:opacity-45',
      'aria-[invalid=true]:border-destructive',
      'data-[state=success]:border-success',
      className,
    )}
    {...props}
  />
))
Input.displayName = 'Input'

export { Input }
