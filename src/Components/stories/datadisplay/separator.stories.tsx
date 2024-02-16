/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'

import { Separator } from '../../ui/separator'

function SeparatorDemo(arg: any) {
    return (
        <div>
            <div className="space-y-space-01">
                <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
            </div>
            <Separator {...arg} className="my-4" />
            <div className="flex h-space-04 items-center gap-x-space-03  text-sm">
                <div>Blog</div>
                <Separator orientation="vertical" />
                <div>Docs</div>
                <Separator orientation="vertical" />
                <div>Source</div>
            </div>
        </div>
    )
}
const meta: Meta<typeof Separator> = {
    title: 'Design System/Data Display/Separator',
    component: Separator,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>Visually or semantically separates content.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Separator>
export const Default: Story = {
    render: SeparatorDemo,
}
