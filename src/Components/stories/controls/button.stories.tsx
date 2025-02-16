import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../../ui/button'
import { School } from 'google-material-icons/outlined'

const meta: Meta<typeof Button> = {
    title: 'Design System/Controls/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `<h4 className="tw-text-subtitle-02">Displays a button or a component that looks like a button.</h4>`,
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Button>

// /**
//  * # The Button component
//  * Shows a button
//  */
export const Default: Story = {
    args: {
        variant: 'default',
        colors: 'primary',
        size: 'default',
        rounded: 'default',
        children: 'Button',
        asChild: false,
        disabled: false,
    },
}


export const ButtonWithIcon: Story = {
    args: {
        variant: 'default',
        colors: 'primary',
        size: 'default',
        rounded: 'default',
        children: 'Button',
        asChild: false,
        disabled: false,

    },
    render:(args)=><Button {...args}><School/> {args.children}</Button>
}
