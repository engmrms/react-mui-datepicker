import type { Meta, StoryObj } from '@storybook/react'

import { InputOTP, InputOTPGroup, InputOTPSlot } from '../../ui/input-otp'

const meta: Meta<typeof InputOTP> = {
    title: 'Design System/Controls/OTP-Input',
    component: InputOTP,
    tags: ['autodocs'],
    argTypes: {
        // Behavior
        disabled: {
            control: { type: 'boolean' },
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            description: 'The disabled state of the OTP input.',
        },

        // Events
        onChange: {
            action: 'onChange',
            table: {
                category: 'Events',
                type: { summary: '(e: React.ChangeEvent<HTMLInputElement>) => void' },
            },
            description: 'The onChange event of the OTP input.',
        },

        // Core Configuration
        value: {
            table: {
                category: 'Core Configuration',
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
            description: 'The value of the OTP input.',
        },
        containerClassName: {
            table: {
                category: 'Core Configuration',
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
            description: 'The container class name of the OTP input.',
        },
        maxLength: {
            control: { type: 'number' },
            table: {
                category: 'Core Configuration',
                type: { summary: 'number' },
                defaultValue: { summary: '4' },
            },
            description: 'Maximum number of characters allowed in the OTP input.',
        },

        render: {
            table: {
                category: 'Core Configuration',
                type: { summary: '({ slots }: { slots: SlotProps[] }) => React.ReactNode' },
                defaultValue: { summary: 'undefined' },
            },
            description: 'The render function of the OTP input.',
        },
        textAlign: {
            table: { disable: true },
        },
        onComplete: {
            table: { disable: true },
        },
        pushPasswordManagerStrategy: {
            table: { disable: true },
        },
        pasteTransformer: {
            table: { disable: true },
        },
        noScriptCSSFallback: {
            table: { disable: true },
        },
    },
    args: { maxLength: 4, disabled: false, containerClassName: '' },
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
