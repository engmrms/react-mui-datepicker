/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ComboboxControl, ComboboxControlNoForm } from '../../Combobox'

import { Form, FormField, FormItem, FormLabel, useForm } from '../../ui/form'

interface Languages {
    label: string
    value: string
}

const languages: Languages[] = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'de' },
    { label: 'Spanish', value: 'es' },
    { label: 'Portuguese', value: 'pt' },
    { label: 'Russian', value: 'ru' },
    { label: 'Japanese', value: 'ja' },
    { label: 'Korean', value: 'ko' },
    { label: 'Chinese', value: 'zh' },
    { label: 'Arabic', value: 'ar' },
    { label: 'Ordo', value: 'or' },
]

const ComboboxControlDemo = (arg: any) => {
    const form = useForm()

    return (
        <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
                <FormItem className="flex flex-col">
                    <FormLabel>Language</FormLabel>

                    <ComboboxControl
                        options={languages}
                        optionLabel="label"
                        optionValue="value"
                        placeholder="select"
                        onChange={vale => field.onChange(vale)}
                        value={field.value}
                        {...arg}
                    />
                </FormItem>
            )}
        />
    )
}

const ComboboxDemo = (arg: any) => {
    const [selectedLanguage, setSelectedLanguage] = React.useState<string>()

    return (
        <ComboboxControlNoForm
            options={languages}
            optionLabel="label"
            optionValue="value"
            placeholder="select"
            onChange={vale => setSelectedLanguage(vale)}
            value={selectedLanguage}
            {...arg}
        />
    )
}

const meta: Meta<typeof ComboboxControl> = {
    title: 'Design System/Controls/Combobox',
    tags: ['autodocs'],
    component: ComboboxControl,
    args: {
        variant: 'default',
        size: 'default',
        colors: 'default',
        rounded: 'default',
        disabled: false,
        placeholder: 'select',
        isLoading: false,
    },
    argTypes: {
        // Appearance
        variant: {
            description: 'The variant of the combobox',
            control: 'select',
            options: ['default', 'outline', 'lighter'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | outline | lighter' },
                defaultValue: { summary: 'default' },
            },
        },
        size: {
            description: 'The size of the combobox',
            control: 'select',
            options: ['default', 'sm'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | sm' },
                defaultValue: { summary: 'default' },
            },
        },
        colors: {
            description: 'The colors of the combobox',
            control: 'select',
            options: ['default', 'success', 'destructive'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | success | destructive' },
                defaultValue: { summary: 'default' },
            },
        },
        rounded: {
            description: 'The rounded of the combobox',
            control: 'select',
            options: ['default', 'full'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | full' },
                defaultValue: { summary: 'default' },
            },
        },
        placeholder: {
            description: 'The placeholder of the combobox',
            control: 'text',
            table: {
                category: 'Appearance',
                type: { summary: 'string' },
                defaultValue: { summary: 'select' },
            },
        },

        // Behavior
        disabled: {
            description: 'The disabled state of the combobox',
            control: 'boolean',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        isLoading: {
            description: 'The loading state of the combobox',
            control: 'boolean',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        // Events
        onChange: {
            action: 'onChange',
            table: {
                category: 'Events',
                type: { summary: '(value: string) => void' },
                defaultValue: { summary: 'undefined' },
            },
            description: 'The onChange event of the combobox',
        },

        // Core Configuration
        value: {
            description: 'The value of the combobox',
            control: 'text',
            table: {
                category: 'Core Configuration',
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
        optionLabel: {
            description: 'The option label of the combobox',
            control: 'text',
            table: {
                category: 'Core Configuration',
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
        optionValue: {
            description: 'The option value of the combobox',
            control: 'text',
            table: {
                category: 'Core Configuration',
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
        options: {
            description: 'The options of the combobox',
            control: 'object',
            table: {
                category: 'Core Configuration',
                type: { summary: 'array' },
                defaultValue: { summary: '[]' },
            },
        },

        renderItem: {
            description: 'The render item of the combobox',
            table: {
                category: 'Core Configuration',
                type: { summary: '(item: unknown) => React.ReactNode' },
                defaultValue: { summary: 'undefined' },
            },
        },
    },

    parameters: {
        layout: 'centered',

        docs: {
            description: {
                component: `<h4>Autocomplete input and command palette with a list of suggestions.</h4>`,
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof ComboboxControl>
export const Default: Story = {
    render: ComboboxDemo,
}

export const FormElement: Story = {
    render: arg => <ComboboxControlDemo {...arg} />,

    decorators: Story => {
        const form = useForm()
        return (
            <Form {...form}>
                <Story />
            </Form>
        )
    },
}
