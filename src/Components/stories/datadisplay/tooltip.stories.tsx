/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../../package'

const meta: Meta<typeof Tooltip> = {
    component: Tooltip,
    title: 'Design System/Data Display/Tooltip',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    '<h4>A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.</h4>',
            },
        },
    },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: arg => (
        <TooltipProvider {...arg}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Hover</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Add to library</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    ),
}
