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
        maxDots:6,
        showPartial:false
    },

    render: arg => {
        return (
            <Carousel  {...arg} className="w-full  ">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div className="p-1" key={index}>
                        <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                <span className="text-4xl font-semibold">{index + 1}</span>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </Carousel>
        )
    },
}
