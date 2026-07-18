import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { ChevronRight, MoreHorizontal } from 'lucide-react'
import * as React from 'react'

const Breadcrumb = ({ ...props }: React.ComponentPropsWithoutRef<'nav'>) => (
  <nav aria-label='breadcrumb' data-slot='breadcrumb' {...props} />
)

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    data-slot='breadcrumb-list'
    className={cn(
      'flex flex-wrap items-center gap-1.5 list-none m-0 p-0',
      'text-[11.662px] font-medium text-muted-foreground break-words',
      className,
    )}
    {...props}
  />
))
BreadcrumbList.displayName = 'BreadcrumbList'

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-slot='breadcrumb-item'
    className={cn('inline-flex items-center gap-1.5', className)}
    {...props}
  />
))
BreadcrumbItem.displayName = 'BreadcrumbItem'

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & { asChild?: boolean }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      ref={ref}
      data-slot='breadcrumb-link'
      className={cn(
        'text-primary no-underline cursor-pointer transition-colors',
        'hover:underline focus-govbr',
        className,
      )}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = 'BreadcrumbLink'

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    data-slot='breadcrumb-page'
    role='link'
    aria-disabled='true'
    aria-current='page'
    className={cn('font-medium text-foreground', className)}
    {...props}
  />
))
BreadcrumbPage.displayName = 'BreadcrumbPage'

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'li'>) => (
  <li
    data-slot='breadcrumb-separator'
    role='presentation'
    aria-hidden='true'
    className={cn(
      'inline-flex items-center text-border [&>svg]:size-3.5',
      className,
    )}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
)

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'span'>) => (
  <span
    data-slot='breadcrumb-ellipsis'
    role='presentation'
    aria-hidden='true'
    className={cn('flex size-5 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className='size-4' />
    <span className='sr-only'>Mais páginas</span>
  </span>
)

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
}
