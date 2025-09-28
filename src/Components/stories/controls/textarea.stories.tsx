import type { Meta, StoryObj } from '@storybook/react'

import { Textarea } from '../../ui/textarea'

import { useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form'
import { toast } from '../../ui/use-toast'

const meta: Meta<typeof Textarea> = {
    title: 'Design System/Controls/Textarea',
    component: Textarea,
    tags: ['autodocs'],
    args: {
        variant: 'outline',
        colors: 'default',
        rounded: 'default',
        disabled: false,
        placeholder: 'Enter new text',
        maxLength: undefined,
        startAdornment: undefined,
        endAdornment: undefined,
        cols: undefined,
        rows: undefined,
    },
    argTypes: {
        // Appearance
        variant: {
            control: 'select',
            options: ['outline', 'default'],
            table: {
                category: 'Appearance',
                type: { summary: 'outline | default' },
                defaultValue: { summary: 'outline' },
            },
            description: 'The variant of the textarea',
        },
        colors: {
            control: 'select',
            options: ['default', 'success', 'destructive'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | success | destructive' },
                defaultValue: { summary: 'default' },
            },
            description: 'The colors of the textarea',
        },
        rounded: {
            control: 'select',
            options: ['default', 'full'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | full' },
                defaultValue: { summary: 'default' },
            },
            description: 'The rounded of the textarea',
        },

        placeholder: {
            control: 'text',
            table: {
                category: 'Appearance',
                type: { summary: 'string' },
                defaultValue: { summary: 'Enter new text' },
            },
            description: 'The placeholder of the textarea',
        },
        maxLength: {
            control: 'number',
            table: {
                category: 'Appearance',
                type: { summary: 'number' },
                defaultValue: { summary: 'undefined' },
            },
            description: 'The max length of the textarea',
        },

        startAdornment: {
            control: 'text',
            table: {
                category: 'Appearance',
                type: { summary: ' ReactNode' },
                defaultValue: { summary: 'undefined' },
            },
            description: 'The start adornment of the textarea',
        },
        endAdornment: {
            control: 'text',
            table: {
                category: 'Appearance',
                type: { summary: ' ReactNode' },
                defaultValue: { summary: 'undefined' },
            },
            description: 'The end adornment of the textarea',
        },
        cols: {
            control: 'number',
            table: {
                category: 'Appearance',
                type: { summary: 'number' },
                defaultValue: { summary: 'undefined' },
            },
            description: 'The cols of the textarea',
        },
        rows: {
            control: 'number',
            table: {
                category: 'Appearance',
                type: { summary: 'number' },
                defaultValue: { summary: 'undefined' },
            },
            description: 'The rows of the textarea',
        },
        // Behavior
        disabled: {
            control: 'boolean',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            description: 'The disabled state of the textarea',
        },
    },
    parameters: {
        docs: {
            description: {
                component: '<h4>Displays a form textarea or a component that looks like a textarea.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Textarea>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    args: {
        variant: 'outline',
        colors: 'default',
        rounded: 'default',
        disabled: false,
        placeholder: 'Enter new text',
    },
}
export const From: Story = {
    args: {
        variant: 'outline',
        colors: 'default',
        rounded: 'default',
        disabled: false,
    },
    render: () => <TextareaForm />,
}

function TextareaForm() {
    const form = useForm<{ bio: string }>()

    function onSubmit(data: { bio: string }) {
        toast({
            title: 'You submitted the following values:',
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="bio"
                    rules={{
                        required: { value: true, message: 'Bio is required field' },
                        minLength: { value: 10, message: 'Bio must be at least 10 characters.' },
                        maxLength: { value: 160, message: 'Bio must not be longer than 160 characters.' },
                    }}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Bio</FormLabel>
                            <FormControl>
                                <Textarea
                                    variant={'outline'}
                                    placeholder="Tell us a little bit about yourself"
                                    className="resize-none"
                                    maxLength={200}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
