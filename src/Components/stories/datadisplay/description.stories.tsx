import type { Meta, StoryObj } from '@storybook/react'

import { Description, DescriptionItem, DescriptionProps } from '../../Description'
import { Stack } from '../../ui/Layout'

const meta: Meta<DescriptionProps> = {
    title: 'Design System/Data Display/Description',
    component: DescriptionItem,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        layout: '',
        docs: {
            description: {
                component: '<h4>Displays a badge or a component that looks like a badge.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<DescriptionProps>
export const Default: Story = {
    args: {
        variant: 'default',
        orientation: 'horizental',
        lastItem: true,
    },
    render: () => (
        <Stack direction={"col"} className='p-space-08'>

        <Description className="">
            <DescriptionItem variant={'default'} title="title1" orientation={'horizental'}>
                Item 1
            </DescriptionItem>
        </Description>
        </Stack>
    ),
}
