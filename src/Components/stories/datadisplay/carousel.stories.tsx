import type { Meta, StoryObj } from '@storybook/react'

import { Card, CardContent, Carousel } from '../../../package'

const meta: Meta<typeof Carousel> = {
    title: 'Design System/Data Display/Carousel',
    component: Carousel,
    tags: ['autodocs'],
    args: {
        autoplay: false,
        loop: false,
        showArrows: true,
        showDots: true,
        maxDots: 6,
        showPartial: false,
        type: 'single',
        slidesToScroll: 'auto',
    },
    argTypes: {
        // Core Configuration
        autoplay: {
            control: 'boolean',
            table: {
                category: 'Core Configuration',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            description: 'The autoplay state of the carousel',
        },
        loop: {
            control: 'boolean',
            table: {
                category: 'Core Configuration',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            description: 'The loop state of the carousel',
        },
        type: {
            options: ['single', 'multiple'],
            control: { type: 'radio' },
            table: {
                category: 'Core Configuration',
                type: { summary: 'single | multiple' },
                defaultValue: { summary: 'single' },
            },
            description: 'The type of the carousel',
        },

        // Appearance
        showArrows: {
            control: 'boolean',
            table: {
                category: 'Appearance',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'true' },
            },
            description: 'The show arrows state of the carousel',
        },
        showDots: {
            control: 'boolean',
            table: {
                category: 'Appearance',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'true' },
            },
            description: 'The show dots state of the carousel',
        },
        maxDots: {
            control: 'number',
            table: {
                category: 'Appearance',
                type: { summary: 'number' },
                defaultValue: { summary: '6' },
            },
            description: 'The max dots state of the carousel',
        },
        showPartial: {
            control: 'boolean',
            table: {
                category: 'Appearance',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            description: 'The show partial state of the carousel',
        },
        slidesToScroll: {
            control: 'select',
            options: ['auto', 'number'],
            table: {
                category: 'Appearance',
                type: { summary: 'auto | number' },
                defaultValue: { summary: 'auto' },
            },
            description: 'The slides to scroll state of the carousel',
        },
        dir: {
            control: 'select',
            options: ['ltr', 'rtl'],
            table: {
                category: 'Appearance',
                type: { summary: 'ltr | rtl' },
                defaultValue: { summary: 'rtl' },
            },
            description: 'The dir state of the carousel',
        },
        itemWidth: {
            control: 'number',
            table: {
                category: 'Appearance',
                type: { summary: 'number' },
                defaultValue: { summary: '230' },
            },
            description: 'The item width state of the carousel',
        },
        slidesToShow: {
            control: 'number',
            table: {
                category: 'Appearance',
                type: { summary: 'number' },
                defaultValue: { summary: 'undefined' },
            },
            description: 'The slides to show state of the carousel',
        },
        autoplayInterval: {
            control: 'number',
            table: {
                category: 'Appearance',
                type: { summary: 'number' },
                defaultValue: { summary: '5000' },
            },
            description: 'The autoplay interval state of the carousel',
        },
        containerClassName: {
            control: 'text',
            table: {
                category: 'Appearance',
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
            description: 'The container class name state of the carousel',
        },
        itemClassName: {
            control: 'text',
            table: {
                category: 'Appearance',
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
            description: 'The item class name state of the carousel',
        },
    },
    parameters: {
        docs: {
            description: {
                component: '<h4>A carousel with motion and swipe built using Embla.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Carousel>
export const Default: Story = {
    render: arg => {
        return (
            <Carousel {...arg} className="w-full  ">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div className="" key={index}>
                        <Card className="h-96">
                            <CardContent className="flex h-full  items-center justify-center p-6">
                                <span className="text-4xl font-semibold">{index + 1}</span>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </Carousel>
        )
    },
}
