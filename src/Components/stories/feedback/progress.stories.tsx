/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import { Progress } from '../../ui/progress'

function ProgressDemo(arg: any) {
    const [progress, setProgress] = React.useState(13)

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])

    return <Progress {...arg} value={progress} className="w-[60%]" />
}

const meta: Meta<typeof Progress> = {
    title: 'Design System/FeedBack/Progress',
    component: Progress,
    tags: ['autodocs'],
    argTypes: {
        colors: {
            control: 'select',
            options: [
                'bg-primary',
                'bg-secondary',
                'bg-tertiary',
                'bg-error',
                'bg-warning',
                'bg-success',
                'bg-info',
                'bg-secondary-light',
                'bg-disabled',
            ],
            description: 'The colors of the progress',
        },

        rounded: {
            control: 'boolean',
            description: 'The rounded state of the progress',
            table: {
                category: 'Appearance',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        asChild: {
            table: { disable: true },
        },
        icon: {
            control: 'object',
            description: 'The icon of the progress',
            table: {
                category: 'Appearance',
                type: { summary: 'ReactNode' },
                defaultValue: { summary: 'undefined' },
            },
        },
    },
    args: {
        colors: 'bg-primary',
        rounded: false,
    },
    parameters: {
        docs: {
            description: {
                component: '<h4>Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Progress>
export const Default: Story = {
    render: ProgressDemo,
}
