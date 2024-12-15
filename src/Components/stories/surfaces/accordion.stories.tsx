/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
import type { Meta, StoryObj } from '@storybook/react'

import { Add, Minimize } from 'google-material-icons/outlined'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion'

function AccordionDemo(arg: any) {
    return (
        <Accordion {...arg} type="single" collapsible className="w-full">
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
                    Is it styled? <Add className="group-data-[state=open]:hidden" />
                    <Minimize className="group-data-[state=closed]:hidden" />
                </AccordionTrigger>
                <AccordionContent>Yes. It comes with default styles that matches the other components&apos; aesthetic.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>
                    Is it animated? <Add className="group-data-[state=open]:hidden" />
                    <Minimize className="group-data-[state=closed]:hidden" />
                </AccordionTrigger>
                <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

const meta: Meta<typeof Accordion> = {
    title: 'Design System/Surface/Accordion',
    component: AccordionDemo,
    tags: ['autodocs'],
    argTypes: {},
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
    render: AccordionDemo,
}
