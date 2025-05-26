import type { Meta, StoryObj } from '@storybook/react'

import { Card, CardContent, Carousel } from '../../../package'

const meta: Meta<typeof Carousel> = {
    title: 'Design System/Data Display/Carousel',
    component: Carousel,
    tags: ['autodocs'],
    argTypes: {},
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
        type: {
            options: ['single', 'multiple'],
            control: { type: 'radio' },
        },
    },

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
