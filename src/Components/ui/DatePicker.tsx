import { DateCalendarProps } from '@mui/x-date-pickers'
import { cva, VariantProps } from 'class-variance-authority'
import { DateRange } from 'google-material-icons/outlined'
import moment from 'moment-hijri'
import { useState } from 'react'
import { cn } from '../../Lib/utils'
import { Calendar } from './calendar'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

import { PickerValue } from '@mui/x-date-pickers/internals'
import 'moment/dist/locale/ar-ly'
import { Switch } from './switch'

const datePickerVariants = cva(
  ` placeholder:text-form-field-text-placeholder data-[placeholder]:text-form-field-text-placeholder  text-form-field-text-filled after:bg-form-field-border-pressed group relative
    flex w-full items-center justify-between gap-space-01 whitespace-nowrap overflow-hidden
    aria-[invalid=true]:border-form-field-border-error  data-[state=open]:aria-[invalid=true]:after:bg-form-field-border-error
    ps-space-03 pe-space-02  after:absolute after:bottom-0 after:start-1/2 after:h-[2px]  focus-visible:after:w-full focus:outline-none focus:shadow-md
    after:w-0 after:transition-all after:ease-in-out data-[state=open]:after:w-full  disabled:cursor-not-allowed disabled:border-border-disabled disabled:text-disabled-text-default-disabled ltr:after:-translate-x-1/2 rtl:after:translate-x-1/2 [&>span]:truncate
    `,
  {
    variants: {
      variant: {
        default: 'bg-form-field-background-darker  enabled:hover:border-form-field-border-default',
        outline:
          'bg-form-field-background-default enabled:hover:border-form-field-border-hovered border border-form-field-border-default disabled:border-border-disabled',
        lighter: 'bg-form-field-background-lighter  enabled:hover:border-form-field-border-default',
      },
      rounded: {
        default: 'rounded',
        full: 'rounded-4',
      },
      colors: {
        default: 'hover:enabled:border',
        success: 'border-success',
        destructive: 'border-form-field-border-error ',
      },
      size: {
        default: 'py-space-02 text-body-02 h-[40px]',
        sm: 'py-space-01 text-body-01 h-[32px]',
      },
    },
    defaultVariants: {
      variant: 'outline',
      rounded: 'default',
      colors: 'default',
      size: 'default',
    },
  },
)

interface Props extends VariantProps<typeof datePickerVariants> {
  lang?: 'ar' | 'en'
  placeholder?: string | null
  value: Date | string | null | undefined | PickerValue
  onChange: (value: string) => void
  defaultToToday?: boolean
  className?: string
  defaultCalendar?: 'hijri' | 'gregorian'
  switchLabel?: string
  showSwitch?: boolean
  dir?: 'ltr' | 'rtl'
  momentFormat?: (lang?: 'ar' | 'en', calendar?: 'hijri' | 'gregorian') => string
}

export const DatePicker = ({
  placeholder,
  value,
  onChange,
  lang = 'en',
  rounded,
  defaultToToday,
  variant,
  className,
  colors,
  size,
  defaultCalendar = 'gregorian',
  switchLabel = 'Hijri Calendar',
  showSwitch,
  dir = 'ltr',
  momentFormat,
  ...rest
}: Props & Omit<DateCalendarProps, 'value'>) => {
  const [isOpen, setIsOpen] = useState(false)
  const [toggleCalendar, setToggleCalendar] = useState<'hijri' | 'gregorian'>(defaultCalendar)
  const dateValue =
    value && moment(value).isValid() ? moment(value) : defaultToToday ? moment() : null

  const dateFormate = lang === 'ar' ? 'YYYY/MM/DD' : 'DD/MM/YYYY'
  const localeToUse = lang === 'ar' ? 'ar-ly' : 'en'
  moment.locale(localeToUse)
  const handleDateChange = (date: PickerValue) => {
    setIsOpen(false)
    if (!date) return
    onChange(date?.format())
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          id="date"
          role="date"
          className={cn(datePickerVariants({ variant, colors, size, rounded }), className)}
          disabled={rest.disabled}>
          {dateValue ? (
            dateValue.format(momentFormat?.(lang, toggleCalendar) || dateFormate)
          ) : (
            <span className="text-body-01 text-foreground-secondary">
              {placeholder ||
                (defaultToToday
                  ? moment().format(momentFormat?.(lang, toggleCalendar) || dateFormate)
                  : '')}
            </span>
          )}
          <DateRange className="size-[20px]  shrink-0 " />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto rounded-2 border-border-secondary p-0 shadow-2xl" dir={dir}>
        <>
          {showSwitch && (
            <div className=" p-space-04">
              <div className="flex w-full items-center justify-between gap-2 border-b border-border-secondary pb-space-04 pt-space-02">
                <label htmlFor="">{switchLabel}</label>
                <Switch
                  onCheckedChange={() =>
                    setToggleCalendar(toggleCalendar === 'hijri' ? 'gregorian' : 'hijri')
                  }
                  dir={dir}
                  checked={toggleCalendar !== defaultCalendar}
                />
              </div>
            </div>
          )}
          <Calendar
            dir={dir}
            ishijri={toggleCalendar === 'hijri'}
            value={dateValue ?? moment()}
            lang={lang}
            onChange={handleDateChange}
            {...rest}
          />
        </>
      </PopoverContent>
    </Popover>
  )
}

export default DatePicker
