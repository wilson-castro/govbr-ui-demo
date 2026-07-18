import { cn } from '@/lib/utils'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import * as React from 'react'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    data-slot='accordion-item'
    className={cn('border-0 border-b border-solid border-border', className)}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className='flex m-0'>
    <AccordionPrimitive.Trigger
      ref={ref}
      data-slot='accordion-trigger'
      className={cn(
        'flex flex-1 items-center justify-between gap-4 py-4 px-1',
        'appearance-none bg-transparent border-0 cursor-pointer text-left',
        'text-base font-semibold text-primary transition-colors',
        'hover-overlay [--overlay-rgb:19,81,180]',
        'focus-govbr-inset',
        '[&[data-state=open]>svg]:rotate-180',
        className,
      )}
      {...props}
    >
      {children}

      <ChevronDown
        className='size-5 shrink-0 text-primary transition-transform'
        aria-hidden='true'
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = 'AccordionTrigger'

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    data-slot='accordion-content'
    className={cn(
      'overflow-hidden text-sm',
      'data-[state=open]:animate-accordion-down',
      'data-[state=closed]:animate-accordion-up',
    )}
    {...props}
  >
    <div className={cn('px-1 pb-4', className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = 'AccordionContent'

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
