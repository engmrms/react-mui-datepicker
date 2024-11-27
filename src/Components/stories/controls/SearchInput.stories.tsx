import type { Meta, StoryObj } from '@storybook/react'
import { SearchInput } from '../../ui/SearchInput'

const meta: Meta<typeof SearchInput> = {
    title: 'Design System/Controls//SearchInput',
    component: SearchInput,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'radio',
            options: ['onType', 'onButton'],
            description: 'Determines the search behavior',
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text for the search input',
        },
        validationMessage: {
            control: 'text',
            description: 'Validation message displayed below the input',
        },
        onSearch: { action: 'searched', description: 'Callback triggered on search' },
        disabled: {
            control: 'boolean',
            description: 'Disables the search input',
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
