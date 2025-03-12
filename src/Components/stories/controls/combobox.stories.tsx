/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ComboboxControl, ComboboxControlNoForm } from '../../Combobox'

import { Form, FormField, FormItem, FormLabel, useForm } from '../../ui/form'

interface Languages {
    label: string
    value: string
}

const languages: Languages[] = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'de' },
    { label: 'Spanish', value: 'es' },
    { label: 'Portuguese', value: 'pt' },
    { label: 'Russian', value: 'ru' },
    { label: 'Japanese', value: 'ja' },
    { label: 'Korean', value: 'ko' },
    { label: 'Chinese', value: 'zh' },
    { label: 'Arabic', value: 'ar' },
    { label: 'Ordo', value: 'or' },
]

const ComboboxControlDemo = (arg: any) => {
    const form = useForm()

    return (
        <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
                <FormItem className="flex flex-col">
                    <FormLabel>Language</FormLabel>

                    <ComboboxControl
                        options={languages}
                        optionLabel="label"
                        optionValue="value"
                        placeholder="select"
                        onChange={vale => field.onChange(vale)}
                        value={field.value}
                        {...arg}
                    />
                </FormItem>
            )}
        />
    )
}

const ComboboxDemo = (arg: any) => {
    const [selectedLanguage, setSelectedLanguage] = React.useState<string>()

    return (
        <ComboboxControlNoForm
            options={languages}
            optionLabel="label"
            optionValue="value"
            placeholder="select"
            onChange={vale => setSelectedLanguage(vale)}
            value={selectedLanguage}
            {...arg}
        />
    )
}

const meta: Meta<typeof ComboboxControl> = {
    title: 'Design System/Controls/Combobox',
    tags: ['autodocs'],
    component: ComboboxControl,
    args: {
        variant: 'outline',
        size: 'default',
        colors: 'default',
        rounded: 'default',
        disabled: false,
        placeholder: 'select',
    },
    argTypes:{
        variant: {control:"select",options:["default","outline","lighter"]},
        size: {control:"select",options:["default","sm"]},
        colors: {control:"select",options:["default","success","destructive"]},
        rounded:{control:"select",options:["default","full"]},

    },

    parameters: {
        layout: 'centered',

        docs: {
            description: {
                component: `<h4>Autocomplete input and command palette with a list of suggestions.</h4>`,
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof ComboboxControl>
export const Default: Story = {
    render: ComboboxDemo,
    // parameters: {
    //     docs: {
    //         source: {
    //             code: `
    //             interface Languages {
    //                 label: string
    //                 value: string
    //             }

    //             const languages: Languages[] = [
    //                 { label: 'English', value: 'en' },
    //                 { label: 'French', value: 'fr' },
    //                 { label: 'German', value: 'de' },
    //                 { label: 'Spanish', value: 'es' },
    //                 { label: 'Portuguese', value: 'pt' },
    //                 { label: 'Russian', value: 'ru' },
    //                 { label: 'Japanese', value: 'ja' },
    //                 { label: 'Korean', value: 'ko' },
    //                 { label: 'Chinese', value: 'zh' },
    //             ]
    //             const ComboboxDemo = () => {
    //                 const [selectedLanguage, setSelectedLanguage] = React.useState<Languages>()

    //                 return (
    //                     <Combobox>
    //                         <PopoverTrigger asChild>
    //                             <Button variant="outline" role="combobox">
    //                                 {!selectedLanguage?.label ? (
    //                                     <span className="text-body-01 text-foreground-secondary">Select Language</span>
    //                                 ) : (
    //                                     selectedLanguage.label
    //                                 )}

    //                                 <ExpandMore className="  h-space-05 w-space-05 text-foreground shrink-0 ms-space-02  " />
    //                             </Button>
    //                         </PopoverTrigger>

    //                         <ComboboxGroup>
    //                             {languages?.map(opt => (
    //                                 <ComboboxItem
    //                                     value={opt.value}
    //                                     key={String(opt.value)}
    //                                     onSelect={() => {
    //                                         setSelectedLanguage(opt)
    //                                     }}>
    //                                     {opt.label}
    //                                 </ComboboxItem>
    //                             ))}
    //                         </ComboboxGroup>
    //                     </Combobox>
    //                 )
    //             }`,
    //         },
    //     },
    // },
}

export const FormElement: Story = {
    render: arg => <ComboboxControlDemo {...arg} />,
    // parameters: {
    //     // docs: {
    //     //     source: {
    //     //         language: 'tsx',
    //     //         code: `const ComboboxControlDemo = () => {
    //     //             const form = useForm()
    //     //             return (
    //     //                 <FormField
    //     //                     control={form.control}
    //     //                     name="language"
    //     //                     render={({ field }) => (
    //     //                         <FormItem className="flex flex-col">
    //     //                             <FormLabel>Language</FormLabel>

    //     //                             <ComboboxControl<Languages>
    //     //                                 options={languages}
    //     //                                 optionLabel="label"
    //     //                                 optionValue="value"
    //     //                                 placeholder="select"
    //     //                                 onChange={vale => field.onChange(vale)}
    //     //                                 value={field.value}
    //     //                             />
    //     //                         </FormItem>
    //     //                     )}
    //     //                 />
    //     //             )
    //     //         }`,
    //     //     },
    //     // },
    // },
    decorators: Story => {
        const form = useForm()
        return (
            <Form {...form}>
                <Story />
            </Form>
        )
    },
}
