import { cn } from '@/lib/utils'
import {
  BrMenu,
  BrMenuHeader,
  BrMenuInfo,
  BrMenuItem,
  BrMenuLink,
  BrMenuList,
  BrMenuLogo,
  BrMenuSocial,
} from '@govbr-ds/webcomponents-react'
import * as React from 'react'

export type MenuProps = React.ComponentProps<typeof BrMenu>

const Menu = React.forwardRef<React.ComponentRef<typeof BrMenu>, MenuProps>(
  ({ className, ...props }, ref) => (
    <BrMenu
      ref={ref}
      data-slot='menu'
      className={cn('block', className)}
      {...props}
    />
  ),
)
Menu.displayName = 'Menu'

const MenuHeader = React.forwardRef<
  React.ComponentRef<typeof BrMenuHeader>,
  React.ComponentProps<typeof BrMenuHeader>
>((props, ref) => <BrMenuHeader ref={ref} data-slot='menu-header' {...props} />)
MenuHeader.displayName = 'MenuHeader'

const MenuInfo = React.forwardRef<
  React.ComponentRef<typeof BrMenuInfo>,
  React.ComponentProps<typeof BrMenuInfo>
>((props, ref) => <BrMenuInfo ref={ref} data-slot='menu-info' {...props} />)
MenuInfo.displayName = 'MenuInfo'

const MenuItem = React.forwardRef<
  React.ComponentRef<typeof BrMenuItem>,
  React.ComponentProps<typeof BrMenuItem>
>((props, ref) => <BrMenuItem ref={ref} data-slot='menu-item' {...props} />)
MenuItem.displayName = 'MenuItem'

const MenuLink = React.forwardRef<
  React.ComponentRef<typeof BrMenuLink>,
  React.ComponentProps<typeof BrMenuLink>
>((props, ref) => <BrMenuLink ref={ref} data-slot='menu-link' {...props} />)
MenuLink.displayName = 'MenuLink'

const MenuList = React.forwardRef<
  React.ComponentRef<typeof BrMenuList>,
  React.ComponentProps<typeof BrMenuList>
>((props, ref) => <BrMenuList ref={ref} data-slot='menu-list' {...props} />)
MenuList.displayName = 'MenuList'

const MenuLogo = React.forwardRef<
  React.ComponentRef<typeof BrMenuLogo>,
  React.ComponentProps<typeof BrMenuLogo>
>((props, ref) => <BrMenuLogo ref={ref} data-slot='menu-logo' {...props} />)
MenuLogo.displayName = 'MenuLogo'

const MenuSocial = React.forwardRef<
  React.ComponentRef<typeof BrMenuSocial>,
  React.ComponentProps<typeof BrMenuSocial>
>((props, ref) => <BrMenuSocial ref={ref} data-slot='menu-social' {...props} />)
MenuSocial.displayName = 'MenuSocial'

export {
  Menu,
  MenuHeader,
  MenuInfo,
  MenuItem,
  MenuLink,
  MenuList,
  MenuLogo,
  MenuSocial,
}
