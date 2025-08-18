import type { Meta, StoryObj } from '@storybook/react'

import { cn, Collapsible, CollapsibleContent, CollapsibleTrigger } from '../../../package'
import { ExpandMore } from 'google-material-icons/outlined'
import { useState } from 'react'

const meta: Meta<typeof Collapsible> = {
    title: 'Design System/Surface/Collapsible',
    component: Collapsible,
    tags: ['autodocs'],

    args: {
        disabled: false,
        defaultOpen: false,
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
    render: args => <CollapsibleShowMore {...args} />,
}

const CollapsibleShowMore = (args: Story['args']) => {
    const [openCollapse, setOpenCollapse] = useState(false)
    return (
        <Collapsible {...args} className="flex w-[350px] flex-col gap-space-02">
            <div className="flex items-center justify-between gap-space-04 px-space-04">
                <h4 className="text-sm font-semibold">Overview</h4>
            </div>
            <div className="rounded-md border px-space-04 py-space-02 font-mono text-sm">about</div>
            <div className="rounded-md border px-space-04 py-space-02 font-mono text-sm">Privacy and terms of use</div>
            <CollapsibleContent className="flex flex-col gap-space-02">
                <div className="rounded-md border px-space-04 py-space-02 font-mono text-sm">News and events</div>
            </CollapsibleContent>

            <CollapsibleTrigger className="mb-space-03 flex gap-space-01 p-space-03 text-body-01 " onClick={() => setOpenCollapse(!openCollapse)}>
                <span>{openCollapse ? 'Show Less' : 'Show More'}</span>
                <ExpandMore
                    className={cn('size-[20px] transition-all', {
                        'rotate-180': openCollapse,
                    })}
                />
            </CollapsibleTrigger>
        </Collapsible>
    )
}
