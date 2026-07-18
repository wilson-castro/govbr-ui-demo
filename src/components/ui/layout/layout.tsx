import { cn } from '@/lib/utils'
import * as React from 'react'

export type LayoutProps = React.ComponentPropsWithoutRef<'div'> & {
  hasSider?: boolean
}

const LayoutRoot = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ className, hasSider = false, ...props }, ref) => (
    <div
      ref={ref}
      data-slot='layout'
      className={cn(
        'flex min-h-0 flex-1 bg-background',
        hasSider ? 'flex-row' : 'flex-col',
        className,
      )}
      {...props}
    />
  ),
)
LayoutRoot.displayName = 'Layout'

const LayoutHeader = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'header'>
>(({ className, ...props }, ref) => (
  <header
    ref={ref}
    data-slot='layout-header'
    className={cn(
      'flex h-14 shrink-0 items-center gap-4 px-6',
      'bg-primary text-primary-foreground',
      className,
    )}
    {...props}
  />
))
LayoutHeader.displayName = 'LayoutHeader'

export type LayoutSiderProps = React.ComponentPropsWithoutRef<'aside'> & {
  width?: number
}

const LayoutSider = React.forwardRef<HTMLElement, LayoutSiderProps>(
  ({ className, width = 200, style, ...props }, ref) => (
    <aside
      ref={ref}
      data-slot='layout-sider'
      className={cn('shrink-0 bg-muted', className)}
      style={{ width, ...style }}
      {...props}
    />
  ),
)
LayoutSider.displayName = 'LayoutSider'

const LayoutContent = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'main'>
>(({ className, ...props }, ref) => (
  <main
    ref={ref}
    data-slot='layout-content'
    className={cn('min-w-0 flex-1', className)}
    {...props}
  />
))
LayoutContent.displayName = 'LayoutContent'

const LayoutFooter = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'footer'>
>(({ className, ...props }, ref) => (
  <footer
    ref={ref}
    data-slot='layout-footer'
    className={cn(
      'shrink-0 bg-muted px-6 py-4 text-center text-sm text-muted-foreground',
      className,
    )}
    {...props}
  />
))
LayoutFooter.displayName = 'LayoutFooter'

const Layout = Object.assign(LayoutRoot, {
  Header: LayoutHeader,
  Sider: LayoutSider,
  Content: LayoutContent,
  Footer: LayoutFooter,
})

export { Layout, LayoutContent, LayoutFooter, LayoutHeader, LayoutSider }
