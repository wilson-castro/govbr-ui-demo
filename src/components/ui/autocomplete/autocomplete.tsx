'use client'

import { cn } from '@/lib/utils'
import * as React from 'react'

export type AutocompleteOption = { label: string; value: string }

export type AutocompleteProps = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'onChange' | 'onSelect' | 'value'
> & {
  options: (AutocompleteOption | string)[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  onSelect?: (option: AutocompleteOption) => void
  filter?: boolean | ((input: string, option: AutocompleteOption) => boolean)
  emptyText?: React.ReactNode
}

const inputClasses = cn(
  'flex h-10 w-full rounded-md bg-white px-4 py-0',
  'border border-solid border-input',
  'text-[16.8px] font-medium text-foreground',
  'placeholder:text-muted-foreground',
  'focus-govbr-field',
  'disabled:cursor-not-allowed disabled:opacity-45',
)

const Autocomplete = React.forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      className,
      options,
      value,
      defaultValue = '',
      onChange,
      onSelect,
      filter = true,
      emptyText = 'Nenhum resultado',
      placeholder,
      onFocus,
      ...props
    },
    ref,
  ) => {
    const isControlled = value !== undefined
    const [internal, setInternal] = React.useState(defaultValue)
    const query = isControlled ? value : internal
    const [open, setOpen] = React.useState(false)
    const [active, setActive] = React.useState(-1)
    const rootRef = React.useRef<HTMLDivElement>(null)
    const listboxId = React.useId()

    const normalized = React.useMemo<AutocompleteOption[]>(
      () =>
        options.map((option) =>
          typeof option === 'string'
            ? { label: option, value: option }
            : option,
        ),
      [options],
    )

    const filtered = React.useMemo(() => {
      if (filter === false) {
        return normalized
      }
      const predicate =
        typeof filter === 'function'
          ? filter
          : (input: string, option: AutocompleteOption) =>
              option.label.toLowerCase().includes(input.toLowerCase())
      return normalized.filter((option) => predicate(query, option))
    }, [normalized, filter, query])

    React.useEffect(() => {
      const onDocumentClick = (event: MouseEvent) => {
        if (
          rootRef.current &&
          !rootRef.current.contains(event.target as Node)
        ) {
          setOpen(false)
        }
      }
      document.addEventListener('mousedown', onDocumentClick)
      return () => document.removeEventListener('mousedown', onDocumentClick)
    }, [])

    const setQuery = (next: string) => {
      if (!isControlled) {
        setInternal(next)
      }
      onChange?.(next)
    }

    const choose = (option: AutocompleteOption) => {
      setQuery(option.label)
      onSelect?.(option)
      setOpen(false)
      setActive(-1)
    }

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault()
        if (!open) {
          setOpen(true)
          return
        }
        setActive((current) => Math.min(current + 1, filtered.length - 1))
      } else if (event.key === 'ArrowUp') {
        event.preventDefault()
        setActive((current) => Math.max(current - 1, 0))
      } else if (event.key === 'Enter') {
        if (open && active >= 0 && filtered[active]) {
          event.preventDefault()
          choose(filtered[active])
        }
      } else if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    return (
      <div ref={rootRef} data-slot='autocomplete' className='relative w-full'>
        <input
          ref={ref}
          type='text'
          role='combobox'
          aria-expanded={open}
          aria-controls={listboxId}
          aria-autocomplete='list'
          value={query}
          placeholder={placeholder}
          className={cn(inputClasses, className)}
          onChange={(event) => {
            setQuery(event.target.value)
            setOpen(true)
            setActive(-1)
          }}
          onFocus={(event) => {
            setOpen(true)
            onFocus?.(event)
          }}
          onKeyDown={onKeyDown}
          {...props}
        />
        {open && (
          <ul
            id={listboxId}
            role='listbox'
            className={cn(
              'absolute z-50 mt-1 max-h-60 w-full overflow-auto',
              'border border-solid border-border bg-popover py-1',
              'shadow-[0_1px_6px_rgba(0,0,0,0.16)]',
            )}
          >
            {filtered.length === 0 ? (
              <li className='px-4 py-2 text-sm text-muted-foreground'>
                {emptyText}
              </li>
            ) : (
              filtered.map((option, index) => (
                <li
                  key={option.value}
                  role='option'
                  aria-selected={index === active}
                  className={cn(
                    'cursor-pointer px-4 py-2 text-[16.8px]',
                    index === active
                      ? 'bg-accent text-accent-foreground'
                      : 'text-foreground',
                  )}
                  onMouseDown={(event) => {
                    event.preventDefault()
                    choose(option)
                  }}
                  onMouseEnter={() => setActive(index)}
                >
                  {option.label}
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    )
  },
)
Autocomplete.displayName = 'Autocomplete'

export { Autocomplete }
