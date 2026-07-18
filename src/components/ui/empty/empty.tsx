import { cn } from '@/lib/utils'
import { Inbox } from 'lucide-react'
import * as React from 'react'

export type EmptyProps = React.ComponentPropsWithoutRef<'div'> & {
  title?: React.ReactNode
  description?: React.ReactNode
  image?: React.ReactNode
}

const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  (
    { className, title, description = 'Sem dados', image, children, ...props },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot='empty'
      className={cn(
        'flex flex-col items-center justify-center gap-2 p-8 text-center',
        className,
      )}
      {...props}
    >
      <div className='mb-1 text-muted-foreground [&_svg]:size-16 [&_svg]:opacity-40'>
        {image ?? <Inbox strokeWidth={1.25} aria-hidden='true' />}
      </div>
      {title && (
        <div className='text-base font-semibold text-foreground'>{title}</div>
      )}
      {description && (
        <div className='text-sm text-muted-foreground'>{description}</div>
      )}
      {children && <div className='mt-2'>{children}</div>}
    </div>
  ),
)
Empty.displayName = 'Empty'

export { Empty }
