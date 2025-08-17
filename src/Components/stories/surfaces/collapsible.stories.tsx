import type { Meta, StoryObj } from '@storybook/react'

import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from '../../../package'
import { KeyboardArrowDown } from 'google-material-icons/outlined'

const meta: Meta<typeof Collapsible> = {
    title: 'Design System/Surface/Collapsible',
    component: Collapsible,
    tags: ['autodocs'],

    args: {
        disabled: false,
        defaultOpen:false
    },

    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>An interactive component which expands/collapses a panel.</h4>',
            },
        },
    },
}

export default meta

type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
    render: args => (
        <Collapsible
            {...args}
            className="flex w-[350px] flex-col gap-space-02">
            <div className="flex items-center justify-between gap-space-04 px-space-04">
                <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8" colors={'gray'}>
                        <KeyboardArrowDown />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <div className="rounded-md border px-space-04 py-space-02 font-mono text-sm">@radix-ui/primitives</div>
            <CollapsibleContent className="flex flex-col gap-space-02">
                <div className="rounded-md border px-space-04 py-space-02 font-mono text-sm">@radix-ui/colors</div>
                <div className="rounded-md border px-space-04 py-space-02 font-mono text-sm">@stitches/react</div>
            </CollapsibleContent>
        </Collapsible>
    ),
}
