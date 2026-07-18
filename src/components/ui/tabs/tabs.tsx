import { cn } from '@/lib/utils'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as React from 'react'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    data-slot='tabs-list'
    className={cn(
      'inline-flex items-center gap-1 w-full overflow-x-auto',
      'border-0 border-b border-solid border-border',
      className,
    )}
    {...props}
  />
))
TabsList.displayName = 'TabsList'

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    data-slot='tabs-trigger'
    className={cn(
      'inline-flex items-center justify-center gap-2 whitespace-nowrap',
      'appearance-none bg-transparent cursor-pointer select-none',
      'border-0 border-b-4 border-solid border-transparent',
      'px-4 py-3 text-[20.16px] font-medium leading-none text-foreground',
      'transition-colors',
      'hover-overlay [--overlay-rgb:51,51,51]',
      'focus-govbr-inset',
      'disabled:cursor-not-allowed disabled:opacity-45 disabled:pointer-events-none',
      'data-[state=active]:border-[#0c326f] data-[state=active]:text-[#0c326f]',
      className,
    )}
    {...props}
  />
))
TabsTrigger.displayName = 'TabsTrigger'

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    data-slot='tabs-content'
    className={cn('pt-4 focus-govbr-inset', className)}
    {...props}
  />
))
TabsContent.displayName = 'TabsContent'

export { Tabs, TabsContent, TabsList, TabsTrigger }
