import { cn } from '@/lib/utils'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check, Minus } from 'lucide-react'
import * as React from 'react'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    data-slot='checkbox'
    className={cn(
      'peer size-6 shrink-0 rounded-md bg-white cursor-pointer',
      'border border-solid border-border appearance-none p-0',
      'transition-colors',
      'hover-overlay [--overlay-rgb:19,81,180]',
      'focus-govbr-field',
      'disabled:cursor-not-allowed disabled:opacity-45',
      'data-[state=checked]:text-selected',
      'data-[state=indeterminate]:bg-selected',
      'data-[state=indeterminate]:border-selected',
      'data-[state=indeterminate]:text-white',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      data-slot='checkbox-indicator'
      className='flex items-center justify-center text-current'
    >
      {props.checked === 'indeterminate' ? (
        <Minus className='size-4' strokeWidth={3} aria-hidden='true' />
      ) : (
        <Check className='size-4' strokeWidth={3} aria-hidden='true' />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = 'Checkbox'

export { Checkbox }
