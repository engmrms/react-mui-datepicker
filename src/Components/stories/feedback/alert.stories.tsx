import type { Meta, StoryObj } from '@storybook/react'

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
    render: arg => (
        <Alert {...arg}>
            <AlertTitle>Notification title</AlertTitle>
            <AlertDescription>Notification contents</AlertDescription>
        </Alert>
    ),
}
