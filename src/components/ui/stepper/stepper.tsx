import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import * as React from 'react'

export type StepperProps = React.ComponentPropsWithoutRef<'div'> & {
  steps: string[]
  /** Current step, starting at 1 (same convention as BrStep) */
  value: number
  onStepChange?: (step: number) => void
  orientation?: 'horizontal' | 'vertical'
  /** Allows clicking any step, including future ones */
  clickable?: boolean
  /** Hides the labels and shows only the circles */
  hideLabels?: boolean
}

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      steps,
      value,
      onStepChange,
      orientation = 'horizontal',
      clickable = false,
      hideLabels = false,
      className,
      ...props
    },
    ref,
  ) => {
    const isHorizontal = orientation === 'horizontal'

    return (
      <div
        ref={ref}
        data-slot='stepper'
        role='group'
        aria-label='Progresso'
        className={cn(
          'flex',
          isHorizontal ? 'flex-row items-start' : 'flex-col',
          className,
        )}
        {...props}
      >
        {steps.map((label, index) => {
          const step = index + 1
          const isActive = step === value
          const isDone = step < value
          const isLast = index === steps.length - 1
          const canClick = clickable || isDone || isActive

          return (
            <div
              key={step}
              data-slot='stepper-item'
              className={cn(
                'flex',
                isHorizontal
                  ? 'flex-1 flex-col items-center'
                  : 'flex-row gap-3',
                isLast && 'flex-none',
              )}
            >
              <div
                className={cn(
                  'flex items-center',
                  isHorizontal ? 'w-full flex-row' : 'flex-col',
                )}
              >
                <button
                  type='button'
                  data-slot='stepper-trigger'
                  aria-current={isActive ? 'step' : undefined}
                  aria-label={`${step}. ${label}`}
                  disabled={!canClick}
                  onClick={() => onStepChange?.(step)}
                  className={cn(
                    'flex size-10 shrink-0 items-center justify-center',
                    'rounded-full border border-solid appearance-none p-0',
                    'text-sm font-semibold transition-colors',
                    'focus-govbr',
                    canClick ? 'cursor-pointer' : 'cursor-not-allowed',
                    isActive &&
                      'bg-primary border-primary text-primary-foreground',
                    isDone &&
                      cn(
                        'bg-white border-primary text-primary',
                        'hover-overlay [--overlay-rgb:19,81,180]',
                      ),
                    !isActive &&
                      !isDone &&
                      'bg-white border-input text-muted-foreground',
                  )}
                >
                  {isDone ? (
                    <Check
                      className='size-5'
                      strokeWidth={3}
                      aria-hidden='true'
                    />
                  ) : (
                    step
                  )}
                </button>

                {!isLast && (
                  <span
                    aria-hidden='true'
                    className={cn(
                      'bg-border',
                      isHorizontal
                        ? 'h-px flex-1 mx-2'
                        : 'w-px flex-1 my-2 min-h-6 ml-5',
                      isDone && 'bg-primary',
                    )}
                  />
                )}
              </div>

              {!hideLabels && (
                <span
                  data-slot='stepper-label'
                  className={cn(
                    'text-sm text-foreground',
                    isHorizontal
                      ? 'mt-2 text-center max-w-32 self-start'
                      : 'pt-2.5',
                    isActive && 'font-semibold',
                  )}
                >
                  {label}
                </span>
              )}
            </div>
          )
        })}
      </div>
    )
  },
)
Stepper.displayName = 'Stepper'

export { Stepper }
