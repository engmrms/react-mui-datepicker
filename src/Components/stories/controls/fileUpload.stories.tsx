import type { Meta, StoryObj } from '@storybook/react'

import { ComponentProps, useState } from 'react'
import { FileInfo, FileUpload } from '../../FileUpload'

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

const FileUploadDemo = ({ arg }: { arg: ComponentProps<typeof FileUpload> }) => {
    const [files, setFiles] = useState<FileInfo[]>([])
    return <FileUpload value={files} {...arg} onChange={files => setFiles(files)} />
}

const FileUploadAsyncDemo = ({ arg }: { arg: ComponentProps<typeof FileUpload> }) => {
    const [files, setFiles] = useState<FileInfo[]>([])
    return (
        <FileUpload
            value={files}
            {...arg}
            onChange={files => setFiles(files)}
            onFileSelect={(validFiles, updateCallback) => {
                // Simulate upload completion
                validFiles.forEach(file => {
                    let p = 1

                    const b = setInterval(() => {
                        p += 1

                        if (p >= 100) clearInterval(b)
                        updateCallback(file.id, p, p === 100 ? 'success' : 'uploading')
                    }, 100)
                })
            }}
        />
    )
}

export const Default: Story = {
    render: arg => <FileUploadDemo arg={arg} />,
}

export const Async: Story = {
    render: arg => <FileUploadAsyncDemo arg={arg} />,
}
