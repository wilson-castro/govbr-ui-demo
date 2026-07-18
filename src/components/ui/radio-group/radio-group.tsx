import { cn } from '@/lib/utils'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import * as React from 'react'

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    data-slot='radio-group'
    className={cn('grid gap-2', className)}
    {...props}
  />
))
RadioGroup.displayName = 'RadioGroup'

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    data-slot='radio-group-item'
    className={cn(
      'aspect-square size-6 shrink-0 rounded-full bg-white cursor-pointer',
      'border border-solid border-border appearance-none p-0',
      'transition-colors',
      'hover-overlay [--overlay-rgb:19,81,180]',
      'focus-govbr-field',
      'disabled:cursor-not-allowed disabled:opacity-45',
      className,
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator
      data-slot='radio-group-indicator'
      className='flex items-center justify-center'
    >
      <span className='size-4 rounded-full bg-selected' />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
))
RadioGroupItem.displayName = 'RadioGroupItem'

export { RadioGroup, RadioGroupItem }
