import { cn } from '@/lib/utils'
import { BrPagination } from '@govbr-ds/webcomponents-react'
import * as React from 'react'

export type PaginationProps = React.ComponentProps<typeof BrPagination>

const Pagination = React.forwardRef<
  React.ComponentRef<typeof BrPagination>,
  PaginationProps
>(({ className, ...props }, ref) => (
  <BrPagination
    ref={ref}
    data-slot='pagination'
    className={cn('block', className)}
    {...props}
  />
))
Pagination.displayName = 'Pagination'

export { Pagination }
