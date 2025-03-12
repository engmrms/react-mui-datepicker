import type { Meta, StoryObj } from '@storybook/react'

import { CheckCircle, WarningAmber } from 'google-material-icons/outlined'
import { Alert, AlertDescription, AlertTitle } from '../../ui/alert'
const meta: Meta<typeof Alert> = {
    title: 'Design System/FeedBack/Alert',
    component: Alert,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        docs: {
            description: {
                component: '<h4>Displays a callout for user attention.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Alert>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    args: {
        colors: 'default',
        variant: 'default',
    },

    render: arg => (
        <Alert {...arg}>
            <AlertTitle>Notification title</AlertTitle>
            <AlertDescription>Notification contents</AlertDescription>
        </Alert>
    ),
}

export const Primary: Story = {
    args: {
        colors: 'primary',
        variant: 'default',
    },
    render: arg => (
        <Alert {...arg}>
            <CheckCircle />
            <AlertTitle>Notification title</AlertTitle>
            <AlertDescription>Notification contents</AlertDescription>
        </Alert>
    ),
}
export const Warning: Story = {
    args: {
        colors: 'warning',
    },
    render: arg => (
        <Alert {...arg}>
            <WarningAmber />
            <AlertTitle>Notification title</AlertTitle>
            <AlertDescription>Notification contents</AlertDescription>
        </Alert>
    ),
}
