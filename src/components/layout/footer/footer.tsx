import { cn } from '@/lib/utils'
import {
  BrFooter,
  BrFooterCategory,
  BrFooterItem,
  BrFooterLegal,
  BrFooterLogo,
  BrFooterSocial,
} from '@govbr-ds/webcomponents-react'
import * as React from 'react'

export type FooterProps = React.ComponentProps<typeof BrFooter>

const Footer = React.forwardRef<
  React.ComponentRef<typeof BrFooter>,
  FooterProps
>(({ className, ...props }, ref) => (
  <BrFooter
    ref={ref}
    data-slot='footer'
    className={cn('block', className)}
    {...props}
  />
))
Footer.displayName = 'Footer'

const FooterCategory = React.forwardRef<
  React.ComponentRef<typeof BrFooterCategory>,
  React.ComponentProps<typeof BrFooterCategory>
>((props, ref) => (
  <BrFooterCategory ref={ref} data-slot='footer-category' {...props} />
))
FooterCategory.displayName = 'FooterCategory'

const FooterItem = React.forwardRef<
  React.ComponentRef<typeof BrFooterItem>,
  React.ComponentProps<typeof BrFooterItem>
>((props, ref) => <BrFooterItem ref={ref} data-slot='footer-item' {...props} />)
FooterItem.displayName = 'FooterItem'

const FooterLegal = React.forwardRef<
  React.ComponentRef<typeof BrFooterLegal>,
  React.ComponentProps<typeof BrFooterLegal>
>((props, ref) => (
  <BrFooterLegal ref={ref} data-slot='footer-legal' {...props} />
))
FooterLegal.displayName = 'FooterLegal'

const FooterLogo = React.forwardRef<
  React.ComponentRef<typeof BrFooterLogo>,
  React.ComponentProps<typeof BrFooterLogo>
>((props, ref) => <BrFooterLogo ref={ref} data-slot='footer-logo' {...props} />)
FooterLogo.displayName = 'FooterLogo'

const FooterSocial = React.forwardRef<
  React.ComponentRef<typeof BrFooterSocial>,
  React.ComponentProps<typeof BrFooterSocial>
>((props, ref) => (
  <BrFooterSocial ref={ref} data-slot='footer-social' {...props} />
))
FooterSocial.displayName = 'FooterSocial'

export {
  Footer,
  FooterCategory,
  FooterItem,
  FooterLegal,
  FooterLogo,
  FooterSocial,
}
