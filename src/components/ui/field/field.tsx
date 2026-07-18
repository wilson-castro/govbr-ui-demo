import { cn } from '@/lib/utils'
import { AlertTriangle, CheckCircle2, Info, XCircle } from 'lucide-react'
import * as React from 'react'

const FieldHint = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<'p'>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot='field-hint'
    className={cn('mt-1 text-sm text-muted-foreground', className)}
    {...props}
  />
))
FieldHint.displayName = 'FieldHint'

type FieldMessageState = 'danger' | 'success' | 'warning' | 'info'

const messageIcons: Record<FieldMessageState, React.ElementType> = {
  danger: XCircle,
  success: CheckCircle2,
  warning: AlertTriangle,
  info: Info,
}

const messageIconColors: Record<FieldMessageState, string> = {
  danger: 'text-destructive',
  success: 'text-success',
  warning: 'text-[#c2850c]',
  info: 'text-info',
}

export type FieldMessageProps = React.ComponentPropsWithoutRef<'p'> & {
  state?: FieldMessageState
}

const FieldMessage = React.forwardRef<HTMLParagraphElement, FieldMessageProps>(
  ({ className, state = 'danger', children, ...props }, ref) => {
    const Icon = messageIcons[state]

    return (
      <p
        ref={ref}
        data-slot='field-message'
        role={state === 'danger' ? 'alert' : 'status'}
        className={cn(
          'mt-1 inline-flex items-center gap-1 p-1',
          'text-sm font-medium italic text-foreground',
          className,
        )}
        {...props}
      >
        <Icon
          className={cn('size-4 shrink-0', messageIconColors[state])}
          aria-hidden='true'
        />
        {children}
      </p>
    )
  },
)
FieldMessage.displayName = 'FieldMessage'

export { FieldHint, FieldMessage }
