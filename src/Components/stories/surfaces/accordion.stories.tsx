import type { Meta, StoryObj } from '@storybook/react'

import { Add, KeyboardArrowDown, Minimize } from 'google-material-icons/outlined'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion'

function AccordionDemo(arg: React.ComponentProps<typeof Accordion>) {
    console.log(arg.size)
    return (
        <Accordion {...arg} className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    Is it accessible?
                    <KeyboardArrowDown className="transition-transform duration-500 ease-in-out group-data-[state=open]:rotate-180" aria-hidden />
                </AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>
                    Is it styled?
                    <KeyboardArrowDown className="transition-transform duration-500 ease-in-out group-data-[state=open]:rotate-180" aria-hidden />
                </AccordionTrigger>
                <AccordionContent>Yes. It comes with default styles that matches the other components&apos; aesthetic.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>
                    Is it animated?
                    <KeyboardArrowDown className="transition-transform duration-500 ease-in-out group-data-[state=open]:rotate-180" aria-hidden />
                </AccordionTrigger>
                <AccordionContent>{"Yes. It's animated by default, but you can disable it if you prefer."}</AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

function AccordionCustomIcon(arg: React.ComponentProps<typeof Accordion>) {
    return (
        <Accordion {...arg} className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    Is it accessible?
                    <Add className="group-data-[state=open]:hidden" />
                    <Minimize className="group-data-[state=closed]:hidden" />
                </AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>
                    Is it styled?
                    <Add className="group-data-[state=open]:hidden" />
                    <Minimize className="group-data-[state=closed]:hidden" />
                </AccordionTrigger>
                <AccordionContent>Yes. It comes with default styles that matches the other components&apos; aesthetic.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>
                    Is it animated?
                    <Add className="group-data-[state=open]:hidden" />
                    <Minimize className="group-data-[state=closed]:hidden" />
                </AccordionTrigger>
                <AccordionContent>{"Yes. It's animated by default, but you can disable it if you prefer."}</AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

const meta: Meta<typeof Accordion> = {
    title: 'Design System/Surface/Accordion',
    component: Accordion,
    tags: ['autodocs'],

    args: {
        type: 'single',
        collapsible: false,
        disabled: false,
        size: 'default',
        isLeading: false,
    },
    argTypes: {
        // Appearance
        type: {
            control: 'radio',
            options: ['single', 'multiple'],
            table: {
                category: 'Appearance',
                type: { summary: 'single | multiple' },
                defaultValue: { summary: 'single' },
            },
            description: 'The type of the accordion',
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'xs'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | sm | xs' },
                defaultValue: { summary: 'default' },
            },
            description: 'The size of the accordion',
        },

        isLeading: {
            description: 'The position of the icon in the accordion trigger (leading or trailing)',
            table: {
                category: 'Appearance',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        // Behavior
        disabled: {
            description: 'The disabled state of the accordion',
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        collapsible: {
            description: "When type is 'single', allows closing content when clicking trigger for an open item.",
            table: {
                category: 'Behavior',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        // Core Configuration
        className: {
            description: 'The class name of the accordion',
            table: {
                category: 'Core Configuration',
                type: { summary: 'string' },
            },
        },

        asChild: {
            table: {
                disable: true,
            },
        },
    },
    parameters: {
        docs: {
            description: {
                component: '<h4>A vertically stacked set of interactive headings that each reveal a section of content.</h4>',
            },
        },
    },
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Default: Story = {
    render: args => <AccordionDemo {...args} />,
}

export const CustomIcon: Story = {
    render: AccordionCustomIcon,
}
