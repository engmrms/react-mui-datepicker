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
    argTypes: {},
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
