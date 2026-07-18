import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  cn(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap',
    'rounded-full font-semibold text-[16.8px] cursor-pointer select-none',
    'border-0 bg-transparent appearance-none transition-colors',
    'disabled:cursor-not-allowed disabled:opacity-45 disabled:pointer-events-none',
    'focus-govbr',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
    "[&_svg:not([class*='size-'])]:size-4",
  ),
  {
    variants: {
      variant: {
        primary: cn(
          'bg-primary text-primary-foreground',
          'hover-overlay active-overlay [--overlay-rgb:255,255,255]',
        ),
        secondary: cn(
          'bg-secondary text-secondary-foreground',
          'border border-solid border-primary',
          'hover-overlay active-overlay [--overlay-rgb:19,81,180]',
        ),
        tertiary: cn(
          'text-primary',
          'hover-overlay active-overlay [--overlay-rgb:19,81,180]',
        ),
        destructive: cn(
          'bg-destructive text-destructive-foreground',
          'hover-overlay active-overlay [--overlay-rgb:255,255,255]',
        ),
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        xs: 'h-6 px-6',
        sm: 'h-8 px-6',
        md: 'h-10 px-6',
        lg: 'h-12 px-6',
        'icon-sm': 'size-8 p-0',
        icon: 'size-10 p-0',
        'icon-lg': 'size-12 p-0',
      },
      block: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      block,
      asChild = false,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={ref}
        data-slot='button'
        type={asChild ? undefined : type}
        className={cn(
          buttonVariants({
            variant,
            size,
            block,
            className,
          }),
        )}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
