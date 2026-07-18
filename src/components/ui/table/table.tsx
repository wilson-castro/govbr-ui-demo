import * as React from 'react'
import { cn } from '@/lib/utils'

type TableDensity = 'small' | 'medium' | 'large'

const TableDensityContext = React.createContext<TableDensity>('medium')

const headHeight: Record<TableDensity, string> = {
  small: 'h-9',
  medium: 'h-11',
  large: 'h-12',
}

const cellPadding: Record<TableDensity, string> = {
  small: 'py-1.5',
  medium: 'py-3',
  large: 'py-4',
}

export type TableProps = React.ComponentPropsWithoutRef<'table'> & {
  density?: TableDensity
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, density = 'medium', ...props }, ref) => (
    <TableDensityContext.Provider value={density}>
      <div
        data-slot='table-container'
        className='relative w-full overflow-x-auto'
      >
        <table
          ref={ref}
          data-slot='table'
          className={cn(
            'w-full caption-bottom border-collapse text-sm',
            className,
          )}
          {...props}
        />
      </div>
    </TableDensityContext.Provider>
  ),
)
Table.displayName = 'Table'

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentPropsWithoutRef<'thead'>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    data-slot='table-header'
    className={cn('bg-muted', className)}
    {...props}
  />
))
TableHeader.displayName = 'TableHeader'

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentPropsWithoutRef<'tbody'>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} data-slot='table-body' className={className} {...props} />
))
TableBody.displayName = 'TableBody'

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentPropsWithoutRef<'tfoot'>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    data-slot='table-footer'
    className={cn('bg-muted font-semibold', className)}
    {...props}
  />
))
TableFooter.displayName = 'TableFooter'

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.ComponentPropsWithoutRef<'tr'>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    data-slot='table-row'
    className={cn(
      'border-0 border-b border-solid border-border transition-colors',
      'hover:bg-[#dfdfdf] data-[state=selected]:bg-accent',
      className,
    )}
    {...props}
  />
))
TableRow.displayName = 'TableRow'

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ComponentPropsWithoutRef<'th'>
>(({ className, ...props }, ref) => {
  const density = React.useContext(TableDensityContext)

  return (
    <th
      ref={ref}
      data-slot='table-head'
      scope='col'
      className={cn(
        headHeight[density],
        'px-4 text-left align-middle font-semibold text-foreground',
        'whitespace-nowrap',
        className,
      )}
      {...props}
    />
  )
})
TableHead.displayName = 'TableHead'

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.ComponentPropsWithoutRef<'td'>
>(({ className, ...props }, ref) => {
  const density = React.useContext(TableDensityContext)

  return (
    <td
      ref={ref}
      data-slot='table-cell'
      className={cn('px-4 align-middle', cellPadding[density], className)}
      {...props}
    />
  )
})
TableCell.displayName = 'TableCell'

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.ComponentPropsWithoutRef<'caption'>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    data-slot='table-caption'
    className={cn('mt-3 text-sm text-muted-foreground', className)}
    {...props}
  />
))
TableCaption.displayName = 'TableCaption'

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
}
