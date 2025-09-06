import type { Meta, StoryObj } from '@storybook/react'

import { RadialStepper, type RadialStep } from '../../ui/radial-stepper'

// Sample steps data
const sampleSteps: RadialStep[] = [
    {
        id: 1,
        title: 'Step 1',
        description: 'Step 1 description',
    },
    {
        id: 2,
        title: 'Step 2',
        description: 'Step 2 description',
    },
    {
        id: 3,
        title: 'Step 3',
        description: 'Step 3 description',
    },
    {
        id: 4,
        title: 'Step 4',
        description: 'Step 4 description',
    },
    {
        id: 5,
        title: 'Step 5',
        description: 'Step 5 description',
    },
]

const meta: Meta<typeof RadialStepper> = {
    title: 'Design System/Navigation/RadialStepper',
    component: RadialStepper,
    tags: ['autodocs'],
    argTypes: {
        // Core Configuration
        steps: {
            control: { type: 'object' },
            table: {
                category: 'Core Configuration',
                type: { summary: 'Step[]' },
                defaultValue: { summary: '[]' },
            },
            description: 'Array of step objects with id, title, and description',
        },
        activeStep: {
            control: { type: 'number', min: 1, max: 10 },
            table: {
                category: 'Core Configuration',
            },
            description: 'Current active step',
        },

        // Appearance
        size: {
            control: { type: 'select' },
            options: [40, 48, 64, 80, 120],
            table: {
                category: 'Appearance',
                type: { summary: '120 | 80 | 64 | 48 | 40' },
            },
            description: 'Size of the stepper',
        },
        colors: {
            control: { type: 'select' },
            options: ['primary', 'neutral'],
            table: {
                category: 'Appearance',
                type: { summary: '"primary" | "neutral"' },
            },
            description: 'Color variant of the stepper',
        },
        onColor: {
            control: { type: 'boolean' },
            table: {
                category: 'Appearance',
                type: { summary: 'boolean' },
            },
            description: 'Whether to show colored progress',
        },
        showDetails: {
            control: { type: 'boolean' },
            table: {
                category: 'Appearance',
                type: { summary: 'boolean' },
            },
            description: 'Whether to show step details (title, description, and next step)',
        },

        // Behavior
        dir: {
            control: { type: 'select' },
            options: ['rtl', 'ltr'],
            table: {
                category: 'Behavior',
                type: { summary: '"rtl" | "ltr"' },
            },
            description: 'Direction of the stepper (RTL for Arabic, LTR for English)',
        },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `<h4 className="tw-text-subtitle-02">A circular progress indicator that shows current step progress with optional step descriptions. Supports both RTL and LTR directions.</h4>`,
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof RadialStepper>

export const Default: Story = {
    args: {
        steps: sampleSteps,
        activeStep: 1,
        size: 120,
        colors: 'primary',
        onColor: false,
        dir: 'ltr',
        showDetails: true,
    },
}
