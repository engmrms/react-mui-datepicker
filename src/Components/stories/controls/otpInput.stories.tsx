import type { Meta, StoryObj } from '@storybook/react'

import { InputOTP, InputOTPGroup, InputOTPSlot } from '../../ui/input-otp'

const meta: Meta<typeof InputOTP> = {
    title: 'Design System/Controls/OTP-Input',
    component: InputOTP,
    tags: ['autodocs'],
    argTypes: {
        maxLength: {
            control: { type: 'number' },
            description: 'Maximum number of characters allowed in the OTP input.',
        },
        disabled: {
            control: { type: 'boolean' },
        },
    },
    args: { maxLength: 4 },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>Displays OTP input</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof InputOTP>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: ({ maxLength, disabled }) => (
        <InputOTP
            maxLength={maxLength}
            disabled={disabled}
            render={({ slots }) => (
                <InputOTPGroup className="">
                    {slots.map((slot, idx) => (
                        <InputOTPSlot key={idx} {...slot} className="" placeholderChar={'0'} />
                    ))}
                </InputOTPGroup>
            )}
        />
    ),
}
export const Invalid: Story = {
    render: ({ maxLength, disabled }) => (
        <InputOTP
            maxLength={maxLength}
            disabled={disabled}
            aria-invalid
            value="123456"
            render={({ slots }) => (
                <InputOTPGroup className="">
                    {slots.map((slot, idx) => (
                        <InputOTPSlot key={idx} {...slot} className="" placeholderChar={'0'} />
                    ))}
                </InputOTPGroup>
            )}
        />
    ),
}
