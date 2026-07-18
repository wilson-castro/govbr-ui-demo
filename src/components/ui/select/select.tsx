import { cn } from '@/lib/utils'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import * as React from 'react'

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    data-slot='select-trigger'
    className={cn(
      'flex h-10 w-full items-center justify-between gap-2 rounded-md',
      'border border-solid border-input bg-white px-4 py-0',
      'text-[16.8px] font-medium text-foreground cursor-pointer appearance-none',
      'transition-colors',
      'focus-govbr-field',
      'disabled:cursor-not-allowed disabled:opacity-45',
      'data-[placeholder]:text-muted-foreground',
      '[&>span]:truncate',
      className,
    )}
    {...props}
  >
    {children}

    <SelectPrimitive.Icon asChild>
      <ChevronDown
        className='size-4 shrink-0 text-primary'
        aria-hidden='true'
      />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = 'SelectTrigger'

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      data-slot='select-content'
      position={position}
      className={cn(
        'relative z-[10001] max-h-96 min-w-32 overflow-hidden rounded-md',
        'bg-popover text-popover-foreground',
        'shadow-[0_3px_6px_rgba(51,51,51,0.32)]',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
        position === 'popper' &&
          cn(
            'data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1',
            'w-[var(--radix-select-trigger-width)]',
          ),
        className,
      )}
      {...props}
    >
      <SelectScrollUpButton />

      <SelectPrimitive.Viewport className='p-1'>
        {children}
      </SelectPrimitive.Viewport>

      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = 'SelectContent'

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    data-slot='select-label'
    className={cn('px-3 py-1.5 text-sm font-semibold', className)}
    {...props}
  />
))
SelectLabel.displayName = 'SelectLabel'

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    data-slot='select-item'
    className={cn(
      'relative flex w-full cursor-pointer select-none items-center',
      'rounded-sm py-2 pl-3 pr-9 text-sm outline-none',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-45',
      className,
    )}
    {...props}
  >
    <span className='absolute right-3 flex size-4 items-center justify-center'>
      <SelectPrimitive.ItemIndicator>
        <Check className='size-4' aria-hidden='true' />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = 'SelectItem'

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    data-slot='select-separator'
    className={cn('mx-1 my-1 h-px bg-border', className)}
    {...props}
  />
))
SelectSeparator.displayName = 'SelectSeparator'

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    data-slot='select-scroll-up-button'
    className={cn(
      'flex cursor-pointer items-center justify-center py-1',
      className,
    )}
    {...props}
  >
    <ChevronUp className='size-4' aria-hidden='true' />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = 'SelectScrollUpButton'

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    data-slot='select-scroll-down-button'
    className={cn(
      'flex cursor-pointer items-center justify-center py-1',
      className,
    )}
    {...props}
  >
    <ChevronDown className='size-4' aria-hidden='true' />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName = 'SelectScrollDownButton'

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
