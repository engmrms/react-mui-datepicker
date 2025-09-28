/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'

import { Link, LinkProps } from '../../ui/link'

const meta: Meta<LinkProps> = {
    title: 'Design System/Controls/Link',
    component: Link,
    tags: ['autodocs'],
    args: {
        asChild: false,
        colors: 'primary',
        underline: 'hover',
        disabled: false,
        size: 'default',
    },
    argTypes: {
        // Behavior
        disabled: {
            control: 'boolean',
            description: 'The disabled state of the link',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        asChild: {
            control: 'boolean',
            description: 'The asChild state of the link',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },

        // Appearance
        colors: {
            control: 'select',
            options: ['primary', 'neutral', 'oncolor'],
            table: {
                category: 'Appearance',
                type: { summary: 'primary | neutral | oncolor' },
                defaultValue: { summary: 'primary' },
            },
            description: 'The colors of the link',
        },
        underline: {
            control: 'select',
            options: ['hover', 'always'],
            table: {
                category: 'Appearance',
                type: { summary: 'hover | always' },
                defaultValue: { summary: 'hover' },
            },
            description: 'The underline of the link',
        },
        size: {
            control: 'select',
            options: ['default', 'sm'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | sm' },
                defaultValue: { summary: 'default' },
            },
            description: 'The size of the link',
        },
    },
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
