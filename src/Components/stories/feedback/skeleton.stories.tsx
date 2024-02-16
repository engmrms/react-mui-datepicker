/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'

import { Skeleton } from '../../ui/skeleton'

function SkeletonDemo(arg: any) {
    return (
        <div className="flex items-center space-x-space-04 space-x-reverse">
            <Skeleton {...arg} className="h-space-08 w-space-08 rounded-full" />
            <div className="space-y-space-02">
                <Skeleton {...arg} className="h-space-04 w-[250px]" />
                <Skeleton {...arg} className="h-space-04 w-[200px]" />
            </div>
        </div>
    )
}

function SkeletonCard(arg: any) {
    return (
        <div className="flex flex-col space-y-space-03">
            <Skeleton {...arg} className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-space-02">
                <Skeleton {...arg} className="h-space-04 w-[250px]" />
                <Skeleton {...arg} className="h-space-04 w-[200px]" />
            </div>
        </div>
    )
}

const meta: Meta<typeof Skeleton> = {
    title: 'Design System/FeedBack/Skeleton',

    component: Skeleton,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>Use to show a placeholder while content is loading.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
    render: SkeletonDemo,
}

export const Card: Story = {
    render: SkeletonCard,
}
