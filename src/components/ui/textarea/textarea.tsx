import { cn } from '@/lib/utils'
import * as React from 'react'

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentPropsWithoutRef<'textarea'>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    data-slot='textarea'
    className={cn(
      'flex min-h-20 w-full rounded-md bg-white px-4 py-2',
      'border border-solid border-input',
      'text-[16.8px] font-medium text-foreground',
      'placeholder:text-muted-foreground',
      'focus-govbr-field',
      'disabled:cursor-not-allowed disabled:opacity-45',
      'aria-[invalid=true]:border-2 aria-[invalid=true]:border-destructive',
      className,
    )}
    {...props}
  />
))
Textarea.displayName = 'Textarea'

export { Textarea }
