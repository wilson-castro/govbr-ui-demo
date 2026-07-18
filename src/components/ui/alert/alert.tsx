import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { AlertTriangle, CheckCircle2, Info, X, XCircle } from 'lucide-react'
import * as React from 'react'

const alertVariants = cva(
  'relative flex w-full items-start gap-3 p-4 text-sm text-foreground',
  {
    variants: {
      variant: {
        info: 'bg-accent [&>svg]:text-[#155bcb]',
        success: 'bg-[#e3f5e1] [&>svg]:text-success',
        warning: 'bg-[#fff5c2] [&>svg]:text-foreground',
        danger: 'bg-[#fde0db] [&>svg]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  },
)

type AlertVariant = NonNullable<VariantProps<typeof alertVariants>['variant']>

const alertIcons: Record<AlertVariant, React.ElementType> = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  danger: XCircle,
}

const closeColors: Record<AlertVariant, string> = {
  info: 'text-[#155bcb]',
  success: 'text-success',
  warning: 'text-foreground',
  danger: 'text-destructive',
}

export type AlertProps = React.ComponentPropsWithoutRef<'div'> &
  VariantProps<typeof alertVariants> & { onClose?: () => void }

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'info', children, onClose, ...props }, ref) => {
    const Icon = alertIcons[variant ?? 'info']

    return (
      <div
        ref={ref}
        data-slot='alert'
        role='alert'
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <Icon className='size-6 shrink-0' aria-hidden='true' />
        <div className='flex-1 min-w-0'>{children}</div>

        {onClose && (
          <button
            type='button'
            aria-label='Fechar'
            onClick={onClose}
            className={cn(
              'inline-flex size-8 shrink-0 items-center justify-center -m-1',
              'rounded-full border-0 bg-transparent p-0 cursor-pointer',
              closeColors[variant ?? 'info'],
              'transition-colors hover:bg-black/5',
              'focus-govbr',
            )}
          >
            <X className='size-4' />
          </button>
        )}
      </div>
    )
  },
)
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot='alert-title'
    className={cn('font-semibold', className)}
    {...props}
  />
))
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot='alert-description'
    className={cn('[&_p]:m-0', className)}
    {...props}
  />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertDescription, AlertTitle }
