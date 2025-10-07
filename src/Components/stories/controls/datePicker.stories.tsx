/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'

import DatePicker from '../../ui/DatePicker'
const meta: Meta<typeof DatePicker> = {
  title: 'Design System/Controls/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],

  argTypes: {
    defaultCalendar: { control: 'radio', options: ['gregorian', 'hijri'] },
    dir: { control: 'radio', options: ['ltr', 'rtl'] },
    lang: { control: 'radio', options: ['ar', 'en'] },
    placeholder: { control: 'text' },
    rounded: { control: 'radio', options: ['default', 'full'] },
    value: { control: 'text' },
    variant: { control: 'select', options: ['default', 'outline', 'lighter'] },
    colors: { control: 'select', options: ['default', 'success', 'destructive'] },
    size: { control: 'radio', options: ['default', 'sm'] },
    defaultToToday: { control: 'boolean' },
    showSwitch: { control: 'boolean' },
    switchLabel: { control: 'text' },
    momentFormat: { control: 'text' },
    disabled: { control: 'boolean' },
    // ref: { control: 'object' },
    onChange: { action: 'onChange' },
  },

  parameters: {
    docs: {
      description: {
        component: `<h4 className="tw-text-subtitle-02">Displays a date picker.</h4>`,
      },
    },
  },
}

export default meta

// /**
//  * ##### This react date picke component let users select date values.
//  */
type Story = StoryObj<typeof DatePicker>

// /**
//  * # The Button component
//  * Shows a button
//  */
export const Default: Story = {
  args: {
    lang: 'ar',
    placeholder: '',
    rounded: 'default',
    value: '',
    variant: 'outline',
    colors: 'default',
    size: 'default',
    defaultToToday: false,
    defaultCalendar: 'gregorian',
    dir: 'ltr',
    showSwitch: false,
    switchLabel: '',
    disabled: false,
  },
  argTypes: {
    value: { control: 'text' },
  },
  render: arg => {
    const [storyArgs, updateArgs] = useArgs()
    return (
      <DatePicker
        {...arg}
        onChange={v => {
          if (v !== storyArgs.value) {
            updateArgs({ value: v })
          }
        }}
      />
    )
  },
}
