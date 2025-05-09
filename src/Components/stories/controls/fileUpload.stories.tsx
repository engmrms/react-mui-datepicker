import type { Meta, StoryObj } from '@storybook/react'

import { FileUpload } from '../../FileUpload'

const meta: Meta<typeof FileUpload> = {
    title: 'Design System/Controls/FileUpload',
    component: FileUpload,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        disabled: false,
        multiple: false,
        maxFiles: 1,
        maxSize: 1,
        isInvalid: false,
        isRequired: false,
    },
    parameters: {
        layout: 'centered',

        docs: {
            description: {
                component: '<h4>Displays a Upload files component that support single and multiple upload files.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof FileUpload>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {}
