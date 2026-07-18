import { cn } from '@/lib/utils'
import * as React from 'react'

type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6

const titleSizes: Record<TitleLevel, string> = {
  1: 'text-[34.832px]',
  2: 'text-[29.036px]',
  3: 'text-[24.192px]',
  4: 'text-[20.16px]',
  5: 'text-[16.8px]',
  6: 'text-[14px]',
}

export type TitleProps = React.ComponentPropsWithoutRef<'h1'> & {
  level?: TitleLevel
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, level = 1, ...props }, ref) =>
    React.createElement(`h${level}`, {
      ref,
      'data-slot': 'title',
      className: cn(
        'font-bold leading-[1.15] text-foreground',
        titleSizes[level],
        className,
      ),
      ...props,
    }),
)
Title.displayName = 'Title'

type TextType = 'secondary' | 'success' | 'warning' | 'danger'

const textColors: Record<TextType, string> = {
  secondary: 'text-muted-foreground',
  success: 'text-success',
  warning: 'text-[#c2850c]',
  danger: 'text-destructive',
}

export type TextProps = React.ComponentPropsWithoutRef<'span'> & {
  type?: TextType
  strong?: boolean
  italic?: boolean
  underline?: boolean
  del?: boolean
  code?: boolean
  mark?: boolean
  disabled?: boolean
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      className,
      type,
      strong,
      italic,
      underline,
      del,
      code,
      mark,
      disabled,
      ...props
    },
    ref,
  ) =>
    React.createElement(code ? 'code' : 'span', {
      ref,
      'data-slot': 'text',
      className: cn(
        type && textColors[type],
        strong && 'font-semibold',
        italic && 'italic',
        underline && 'underline',
        del && 'line-through',
        code &&
          cn(
            'rounded-sm bg-muted px-1.5 py-0.5 font-mono',
            'text-[0.9em] text-foreground',
          ),
        mark && 'bg-[#fff5c2]',
        disabled && 'cursor-not-allowed text-muted-foreground opacity-45',
        className,
      ),
      ...props,
    }),
)
Text.displayName = 'Text'

const Paragraph = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<'p'>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot='paragraph'
    className={cn('mb-4 leading-[1.45] text-foreground last:mb-0', className)}
    {...props}
  />
))
Paragraph.displayName = 'Paragraph'

export type LinkProps = React.ComponentPropsWithoutRef<'a'> & {
  disabled?: boolean
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, disabled, ...props }, ref) => (
    // Content (children) is forwarded via {...props}; the wrapper cannot
    // guarantee it statically, but Link consumers provide it.
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      ref={ref}
      data-slot='link'
      aria-disabled={disabled || undefined}
      className={cn(
        'rounded-sm text-primary underline-offset-4 hover:underline',
        'focus-govbr',
        disabled &&
          cn(
            'pointer-events-none cursor-not-allowed',
            'text-muted-foreground opacity-45',
          ),
        className,
      )}
      {...props}
    />
  ),
)
Link.displayName = 'Link'

const Typography = {
  Title,
  Text,
  Paragraph,
  Link,
}

export { Link, Paragraph, Text, Title, Typography }
