import type { Meta, StoryObj } from '@storybook/react'

import { SecondNavHeader, SecondNavHeaderAction, SecondNavHeaderContent } from '../../SecondNavHeader'

const meta: Meta<typeof SecondNavHeader> = {
    title: 'Design System/Templates/Second Nav Header',
    component: SecondNavHeader,
    tags: ['autodocs'],

    parameters: {
        docs: {
            description: {
                component: '<h4>A collection of links and contents for second navigating websites.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof SecondNavHeader>

export const Default: Story = {
    args: {
        colors: 'primary',
        hideDivider: false,
    },
    argTypes: {
        hideDivider: { control: 'boolean' },
    },
    render: args => (
        <SecondNavHeader {...args}>
            <SecondNavHeaderContent />
            <SecondNavHeaderAction />
        </SecondNavHeader>
    ),
}

export const HideTrailVersion: Story = {
    args: {
        colors: 'primary',
        hideDivider: false,
    },
    argTypes: {
        hideDivider: { control: 'boolean' },
    },
    render: args => (
        <SecondNavHeader {...args}>
            <SecondNavHeaderContent />
            <SecondNavHeaderAction hideTrail />
        </SecondNavHeader>
    ),
}
