/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'
import { CheckCircle } from 'google-material-icons/outlined'
import { List, ListItem } from '../../List'

const meta: Meta<typeof List> = {
    title: 'Design System/Data Display/List',
    component: List,
    tags: ['autodocs'],
    argTypes: {
        // Appearance
        variant: {
            control: 'radio',
            options: ['ordered', 'unordered'],
            table: {
                category: 'Appearance',
                type: { summary: 'ordered | unordered' },
                defaultValue: { summary: 'ordered' },
            },
            description: 'The variant of the list',
        },
        colors: {
            control: 'select',
            options: ['primary', 'neutral', 'onColor'],
            table: {
                category: 'Appearance',
                type: { summary: 'primary | neutral | onColor' },
                defaultValue: { summary: 'primary' },
            },
            description: 'The colors of the list',
        },
        items: {
            control: 'object',
            table: {
                category: 'Appearance',
                type: { summary: 'string[]' },
                defaultValue: { summary: '[]' },
            },
            description: 'The items of the list',
        },
        icon: {
            control: 'object',
            table: {
                category: 'Appearance',
                type: { summary: 'ReactNode' },
                defaultValue: { summary: 'undefined' },
            },
            description: 'The icon of the list',
        },
        className: {
            control: 'text',
            table: {
                category: 'Appearance',
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
    },

    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>Lists are used to organize a set of items into a single.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof List>
export const Default: Story = {
    args: {
        variant: 'ordered',
        colors: 'primary',
    },
    render: args => {
        return (
            <List {...args}>
                <ListItem>List item </ListItem>
                <List variant={'ordered'} {...args}>
                    <ListItem>List item </ListItem>
                    <ListItem>List item</ListItem>
                </List>
            </List>
        )
    },
}

export const ListIcon: Story = {
    args: {
        variant: 'ordered',
        colors: 'primary',
    },
    render: args => {
        return (
            <List {...args} variant={'with-icon'}>
                <ListItem>
                    <CheckCircle />
                    List item{' '}
                </ListItem>
                <ListItem>
                    <CheckCircle />
                    List item{' '}
                </ListItem>
                <ListItem>
                    <CheckCircle />
                    List item{' '}
                </ListItem>
                <ListItem>
                    <CheckCircle />
                    List item{' '}
                </ListItem>
                <List {...args} variant={'with-icon'}>
                    <ListItem>
                        <CheckCircle /> List item{' '}
                    </ListItem>
                    <ListItem>
                        <CheckCircle /> List item
                    </ListItem>
                </List>
            </List>
        )
    },
}

export const ListItems: Story = {
    args: {
        variant: 'ordered',
        colors: 'primary',
        items: ['List item 1', 'List item 2', 'List item 3'],
        icon: <CheckCircle />,
    },
    render: args => {
        return <List {...args} />
    },
}
