import { cn } from '@/lib/utils'
import {
  BrHeader,
  BrHeaderFunction,
  BrHeaderLink,
  BrHeaderList,
  BrHeaderLogo,
} from '@govbr-ds/webcomponents-react'
import * as React from 'react'

export type HeaderProps = React.ComponentProps<typeof BrHeader>

const Header = React.forwardRef<
  React.ComponentRef<typeof BrHeader>,
  HeaderProps
>(({ className, ...props }, ref) => (
  <BrHeader
    ref={ref}
    data-slot='header'
    className={cn('block', className)}
    {...props}
  />
))
Header.displayName = 'Header'

const HeaderLogo = React.forwardRef<
  React.ComponentRef<typeof BrHeaderLogo>,
  React.ComponentProps<typeof BrHeaderLogo>
>((props, ref) => <BrHeaderLogo ref={ref} data-slot='header-logo' {...props} />)
HeaderLogo.displayName = 'HeaderLogo'

const HeaderList = React.forwardRef<
  React.ComponentRef<typeof BrHeaderList>,
  React.ComponentProps<typeof BrHeaderList>
>((props, ref) => <BrHeaderList ref={ref} data-slot='header-list' {...props} />)
HeaderList.displayName = 'HeaderList'

const HeaderLink = React.forwardRef<
  React.ComponentRef<typeof BrHeaderLink>,
  React.ComponentProps<typeof BrHeaderLink>
>((props, ref) => <BrHeaderLink ref={ref} data-slot='header-link' {...props} />)
HeaderLink.displayName = 'HeaderLink'

const HeaderFunction = React.forwardRef<
  React.ComponentRef<typeof BrHeaderFunction>,
  React.ComponentProps<typeof BrHeaderFunction>
>((props, ref) => (
  <BrHeaderFunction ref={ref} data-slot='header-function' {...props} />
))
HeaderFunction.displayName = 'HeaderFunction'

export { Header, HeaderFunction, HeaderLink, HeaderList, HeaderLogo }
