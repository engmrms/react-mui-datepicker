/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'

import { Link, LinkProps } from '../../ui/link'

const meta: Meta<LinkProps> = {
    title: 'Design System/Controls/Link',
    component: Link,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>Semantic element for navigation between pages.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<LinkProps>

export const Default: Story = {
    args: {
        asChild: false,
        colors: 'primary',
        underline: 'hover',
        disabled: false,
        size:"default"
    },
    argTypes: {
        disabled: { control: 'boolean' },
    },
    render: (arg, { globals: { dir } }) => {
        return (
            <div className="flex items-center gap-space-01">
                <Link {...arg} id="terms" dir={dir} href="#">
                    read more
                </Link>
            </div>
        )
    },
}
