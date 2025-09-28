import type { Meta, StoryObj } from '@storybook/react'

import { ComponentProps, useState } from 'react'
import { FileInfo, FileUpload } from '../../FileUpload'

const meta: Meta<typeof FileUpload> = {
    title: 'Design System/Controls/FileUpload',
    component: FileUpload,
    tags: ['autodocs'],
    argTypes: {
        // Behavior
        disabled: {
            description: 'Disable the file upload',
            control: 'boolean',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        multiple: {
            description: 'Enable multiple files upload',
            control: 'boolean',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        maxFiles: {
            description: 'The maximum number of files that can be uploaded',
            control: 'number',
            table: {
                category: 'Behavior',
                type: { summary: 'number' },
                defaultValue: { summary: '1' },
            },
        },
        maxSize: {
            description: 'The maximum size of the file that can be uploaded',
            control: 'number',
            table: {
                category: 'Behavior',
                type: { summary: 'number' },
                defaultValue: { summary: '1' },
            },
        },
        isInvalid: {
            description: 'Handle the invalid state of the file upload',
            control: 'boolean',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        isRequired: {
            description: 'Show asterisk in the label',
            control: 'boolean',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },

        // Appearance
        browseLabel: {
            description: 'The browse label of the file upload button',
            control: 'text',
            table: {
                category: 'Appearance',
                type: { summary: 'string' },
                defaultValue: { summary: 'Browse' },
            },
        },
        description: {
            description: 'The description of the file upload',
            control: 'text',
            table: {
                category: 'Appearance',
                type: { summary: 'string' },
                defaultValue: { summary: 'Description' },
            },
        },
        label: {
            description: 'The label of the file upload',
            control: 'text',
            table: {
                category: 'Appearance',
                type: { summary: 'string' },
                defaultValue: { summary: 'Label' },
            },
        },

        // Events
        onFileSelect: {
            description: 'Fires when the files are selected with callback to update upload progress',
            table: {
                category: 'Events',
                type: {
                    summary:
                        "(files: FileInfo[], updateCallback: (id: string, progress: number, status?: FileInfo['status'], error?: string) => void) => void",
                },
                defaultValue: {
                    summary: '-',
                },
            },
        },
        onChange: {
            description: 'Fires when the files are changed',
            table: {
                category: 'Events',
                type: { summary: '(files: FileInfo[]) => void' },
                defaultValue: { summary: '-' },
            },
        },

        // Core Configuration
        value: {
            description: 'The value of the file upload',
            control: 'object',
            table: {
                category: 'Core Configuration',
                type: { summary: 'array' },
                defaultValue: { summary: '[]' },
            },
        },
        acceptedFormats: {
            description: 'The accepted formats of the file upload',
            control: 'object',
            table: {
                category: 'Core Configuration',
                type: { summary: 'object' },
                defaultValue: { summary: '{}' },
            },
        },
        customError: {
            description: 'The custom error of the file upload',
            control: 'text',
            table: {
                category: 'Core Configuration',
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
    },
    args: {
        disabled: false,
        multiple: false,
        maxFiles: 1,
        maxSize: 1,
        isInvalid: false,
        isRequired: false,
        browseLabel: 'Browse',
        description: '',
        label: 'Upload files',
        value: [],
        onFileSelect: undefined,
        onChange: undefined,
        customError: '',
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
