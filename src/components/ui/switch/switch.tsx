import { cn } from '@/lib/utils'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import * as React from 'react'

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    data-slot='switch'
    className={cn(
      'peer inline-flex h-[30px] w-[52px] shrink-0 items-center rounded-full',
      'border border-solid border-border bg-white p-0',
      'cursor-pointer appearance-none transition-colors',
      'focus-govbr',
      'disabled:cursor-not-allowed disabled:opacity-45',
      className,
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      data-slot='switch-thumb'
      className={cn(
        'pointer-events-none block size-[22px] rounded-full',
        'bg-[#cccccc] data-[state=checked]:bg-[#5992ed]',
        'transition-all translate-x-1 data-[state=checked]:translate-x-[26px]',
      )}
    />
  </SwitchPrimitive.Root>
))
Switch.displayName = 'Switch'

export { Switch }
