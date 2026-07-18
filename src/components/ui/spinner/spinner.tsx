import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const spinnerVariants = cva(
  cn(
    'inline-block rounded-full border-solid border-current',
    'border-r-transparent align-[-0.125em]',
    'animate-spin [animation-duration:1.3s]',
  ),
  {
    variants: {
      size: {
        sm: 'size-6 border-2',
        md: 'size-11 border-2',
        lg: 'size-[84px] border-4',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  },
)

export type SpinnerProps = React.ComponentPropsWithoutRef<'div'> &
  VariantProps<typeof spinnerVariants> & { label?: React.ReactNode }

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size, label, ...props }, ref) => (
    <div
      ref={ref}
      data-slot='spinner'
      role='status'
      className={cn(
        'inline-flex flex-col items-center gap-2 text-primary',
        className,
      )}
      {...props}
    >
      <span className={cn(spinnerVariants({ size }))} />
      {label && <span className='text-sm text-muted-foreground'>{label}</span>}
      <span className='sr-only'>Carregando…</span>
    </div>
  ),
)
Spinner.displayName = 'Spinner'

export { Spinner, spinnerVariants }
