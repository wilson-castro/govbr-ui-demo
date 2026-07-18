import { cn } from '@/lib/utils'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import * as React from 'react'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    data-slot='dialog-overlay'
    className={cn(
      'fixed inset-0 z-[10001] bg-black/45',
      'data-[state=open]:animate-in data-[state=open]:fade-in-0',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
      className,
    )}
    {...props}
  />
))
DialogOverlay.displayName = 'DialogOverlay'

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    showCloseButton?: boolean
  }
>(({ className, children, showCloseButton = true, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />

    <DialogPrimitive.Content
      ref={ref}
      data-slot='dialog-content'
      className={cn(
        'fixed left-1/2 top-1/2 z-[10001] -translate-x-1/2 -translate-y-1/2',
        'grid w-full max-w-lg gap-4 bg-white p-4 shadow-lg',
        'max-h-[85vh] overflow-y-auto',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0',
        'data-[state=open]:zoom-in-95',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
        'data-[state=closed]:zoom-out-95',
        className,
      )}
      {...props}
    >
      {children}

      {showCloseButton && (
        <DialogPrimitive.Close
          data-slot='dialog-close'
          className={cn(
            'absolute right-2 top-2 inline-flex size-8 items-center justify-center',
            'rounded-full border-0 bg-transparent p-0 cursor-pointer text-primary',
            'transition-colors',
            'hover-overlay [--overlay-rgb:19,81,180]',
            'focus-govbr',
          )}
        >
          <X className='size-5' aria-hidden='true' />
          <span className='sr-only'>Fechar</span>
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = 'DialogContent'

const DialogHeader = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => (
  <div
    data-slot='dialog-header'
    className={cn('flex flex-col gap-1.5 pr-8', className)}
    {...props}
  />
)

const DialogFooter = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => (
  <div
    data-slot='dialog-footer'
    className={cn('flex justify-end gap-3', className)}
    {...props}
  />
)

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    data-slot='dialog-title'
    className={cn('text-[16.8px] font-bold text-foreground', className)}
    {...props}
  />
))
DialogTitle.displayName = 'DialogTitle'

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    data-slot='dialog-description'
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
DialogDescription.displayName = 'DialogDescription'

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
