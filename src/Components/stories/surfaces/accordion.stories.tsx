/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
import type { Meta, StoryObj } from '@storybook/react'

import { Add, KeyboardArrowDown, Minimize } from 'google-material-icons/outlined'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion'

type WrapperProps = React.ComponentProps<typeof Accordion> & {
    size?: 'default' | 'sm' | 'xs'
    isLeading?: boolean
}

const AccordionWrapper = ({ size, isLeading, ...props }: WrapperProps) => {
    // You can use size and isLeading here if needed
    return <AccordionDemo {...props} />
}

function AccordionDemo(arg: WrapperProps) {
    console.log(arg.size)
    return (
        <Accordion {...arg} className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger size={arg.size} isLeading={arg?.isLeading}>
                    Is it accessible?
                    <KeyboardArrowDown className="transition-transform duration-500 ease-in-out group-data-[state=open]:rotate-180" aria-hidden />
                </AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger size={arg.size} isLeading={arg?.isLeading}>
                    Is it styled?
                    <KeyboardArrowDown className="transition-transform duration-500 ease-in-out group-data-[state=open]:rotate-180" aria-hidden />
                </AccordionTrigger>
                <AccordionContent>Yes. It comes with default styles that matches the other components&apos; aesthetic.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger size={arg.size} isLeading={arg?.isLeading}>
                    Is it animated?
                    <KeyboardArrowDown className="transition-transform duration-500 ease-in-out group-data-[state=open]:rotate-180" aria-hidden />
                </AccordionTrigger>
                <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

function AccordionCustomIcon(arg: WrapperProps) {
    return (
        <Accordion {...arg} className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger size="xs">
                    Is it accessible?
                    <Add className="group-data-[state=open]:hidden" />
                    <Minimize className="group-data-[state=closed]:hidden" />
                </AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger size="xs">
                    Is it styled?
                    <Add className="group-data-[state=open]:hidden" />
                    <Minimize className="group-data-[state=closed]:hidden" />
                </AccordionTrigger>
                <AccordionContent>Yes. It comes with default styles that matches the other components&apos; aesthetic.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger size="xs">
                    Is it animated?
                    <Add className="group-data-[state=open]:hidden" />
                    <Minimize className="group-data-[state=closed]:hidden" />
                </AccordionTrigger>
                <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

const meta: Meta<typeof AccordionWrapper> = {
    title: 'Design System/Surface/Accordion',
    component: AccordionWrapper,
    tags: ['autodocs'],

    args: {
        type: 'single',
        collapsible: false,
        disabled: false,
        size: 'default',
        isLeading: false,
    },
    argTypes: {
        type: { control: 'radio', options: ['single', 'multiple'] },
        size: { control: 'select', options: ['default', 'sm', 'xs'] },
        collapsible: { description: "When type is 'single', allows closing content when clicking trigger for an open item." },
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

type Story = StoryObj<typeof AccordionWrapper>

export const Default: Story = {
    render: args => <AccordionDemo {...args} />,
}

export const CustomIcon: Story = {
    render: AccordionCustomIcon,
}
