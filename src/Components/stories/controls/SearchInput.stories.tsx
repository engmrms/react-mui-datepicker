import type { Meta, StoryObj } from '@storybook/react'
import { SearchInput } from '../../ui/SearchInput'

const meta: Meta<typeof SearchInput> = {
    title: 'Design System/Controls/SearchInput',
    component: SearchInput,
    tags: ['autodocs'],
    argTypes: {
        // Events
        onSearch: {
            action: 'searched',
            description: 'Callback triggered on search',
            table: {
                category: 'Events',
                type: { summary: '(value: string) => void' },
                defaultValue: { summary: 'undefined' },
            },
        },
        // Behavior
        disabled: {
            control: 'boolean',
            description: 'Disables the search input',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        // Appearance
        variant: {
            control: 'select',
            options: ['default', 'outline', 'lighter'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | outline | lighter' },
                defaultValue: { summary: 'default' },
            },
            description: 'The variant of the search input',
        },
        colors: {
            control: 'select',
            options: ['default', 'success', 'destructive'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | success | destructive' },
                defaultValue: { summary: 'default' },
            },
            description: 'The colors of the search input',
        },
        rounded: {
            control: 'select',
            options: ['default', 'full'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | full' },
                defaultValue: { summary: 'default' },
            },
            description: 'The rounded of the search input',
        },

        size: {
            control: 'select',
            options: ['default', 'sm'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | sm' },
                defaultValue: { summary: 'default' },
            },
            description: 'The size of the search input',
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text for the search input',
            table: {
                category: 'Appearance',
                type: { summary: 'string' },
                defaultValue: { summary: 'Search...' },
            },
        },
        // Core Configuration
        value: {
            control: 'text',
            table: {
                category: 'Core Configuration',
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
            description: 'The value of the search input',
        },
        debounceTime: {
            control: 'number',
            table: {
                category: 'Core Configuration',
                type: { summary: 'number' },
                defaultValue: { summary: '600' },
            },
            description: 'The debounce time of the search input',
        },

        className: {
            control: 'text',
            table: {
                category: 'Core Configuration',
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
        type: {
            // Behavior
            control: 'radio',
            options: ['onType', 'onButton'],
            description: 'Determines the search behavior',
            table: {
                category: 'Core Configuration',
                type: { summary: 'onType | onButton' },
                defaultValue: { summary: 'onType' },
            },
        },

        validationMessage: {
            control: 'text',
            description: 'Validation message displayed below the input',
            table: {
                category: 'Core Configuration',
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
        },
        startAdornment: {
            table: {
                disable: true,
            },
        },
        endAdornment: {
            table: {
                disable: true,
            },
        },
    },

    args: {
        type: 'onType',
        variant: 'default',
        rounded: 'default',
        colors: 'default',
        size: 'default',
        debounceTime: 600,
    },
    parameters: {
        docs: {
            description: {
                component: '<h4>A flexible search input component with a search icon and clear button functionality.</h4>',
            },
        },
    },
}

export default meta

type Story = StoryObj<typeof SearchInput>

export const Default: Story = {
    args: {
        type: 'onType',
        placeholder: 'Search...',
        validationMessage: '',
        disabled: false,
    },
}

export const WithValidationMessage: Story = {
    args: {
        type: 'onButton',
        placeholder: 'Search...',
        validationMessage: 'This field is required.',
        disabled: false,
    },
}

export const Disabled: Story = {
    args: {
        type: 'onType',
        placeholder: 'Search...',
        validationMessage: '',
        disabled: true,
    },
}
