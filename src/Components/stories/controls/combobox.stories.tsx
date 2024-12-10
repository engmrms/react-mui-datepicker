/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Combobox, ComboboxControl, ComboboxGroup, ComboboxItem } from '../../Combobox'

import { ExpandMore } from 'google-material-icons/outlined'
import { Button } from '../../ui/button'
import { Form, FormField, FormItem, FormLabel, useForm } from '../../ui/form'
import { PopoverTrigger } from '../../ui/popover'

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
    const [selectedLanguage, setSelectedLanguage] = React.useState<Languages>()

    return (
        <Combobox>
            <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" {...arg}>
                    {!selectedLanguage?.label ? (
                        <span className="text-body-01 text-foreground-secondary">Select Language</span>
                    ) : (
                        selectedLanguage.label
                    )}

                    <ExpandMore className="  ms-space-02 h-space-05 w-space-05 shrink-0 text-foreground  " />
                </Button>
            </PopoverTrigger>

            <ComboboxGroup>
                {languages?.map(opt => (
                    <ComboboxItem
                        value={opt.value}
                        key={String(opt.value)}
                        onSelect={() => {
                            setSelectedLanguage(opt)
                        }}>
                        {opt.label}
                    </ComboboxItem>
                ))}
            </ComboboxGroup>
        </Combobox>
    )
}

const meta: Meta<typeof ComboboxControl> = {
    title: 'Design System/Controls/Combobox',
    tags: ['autodocs'],
    component: ComboboxControl,
    argTypes: {
        rounded: { control: 'radio', options: ['full', 'default'] },
    },
    args: {
        rounded: 'full',
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
