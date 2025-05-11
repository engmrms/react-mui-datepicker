/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'
import { CheckCircle } from 'google-material-icons/outlined'
import { List, ListItem } from '../../List'

const meta: Meta<typeof List> = {
    title: 'Design System/Data Display/List',
    component: List,
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
                        {' '}
                        <CheckCircle /> List item{' '}
                    </ListItem>
                    <ListItem>
                        {' '}
                        <CheckCircle /> List item
                    </ListItem>
                </List>
            </List>
        )
    },
}
