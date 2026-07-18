import { cn } from '@/lib/utils'
import { BrLoading } from '@govbr-ds/webcomponents-react'
import * as React from 'react'

export type LoadingProps = React.ComponentProps<typeof BrLoading>

const Loading = React.forwardRef<
  React.ComponentRef<typeof BrLoading>,
  LoadingProps
>(({ className, ...props }, ref) => (
  <BrLoading
    ref={ref}
    data-slot='loading'
    className={cn('inline-flex', className)}
    {...props}
  />
))
Loading.displayName = 'Loading'

export { Loading }
