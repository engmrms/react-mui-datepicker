import type { Meta, StoryObj } from '@storybook/react'

import { Button, Input, Label, Popover, PopoverContent, PopoverTrigger, Stack } from '../../../package'
const meta: Meta<typeof PopoverContent> = {
    title: 'Design System/FeedBack/Popover',
    component: PopoverContent,
    tags: ['autodocs'],
    args: {
        align: 'center',
        side: 'bottom',
        dir:'ltr'
    },
    argTypes: {
        align: { control: 'radio', options: ['center', 'end', 'start'] },
        side: { control: 'radio', options: ['top', 'bottom', 'right', 'left'] },
        dir: { control: 'radio', options: ['ltr', 'rtl'] },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>Displays rich content in a portal, triggered by a button.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof PopoverContent>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: arg => (
        <Popover>
            <PopoverTrigger asChild>
                <Button colors={'gray'} variant="outline">
                    Open popover
                </Button>
            </PopoverTrigger>
            <PopoverContent {...arg}>
                <div className="space-y-space-02">
                    <h4 className="font-medium leading-none">Dimensions</h4>
                    <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
                </div>
                <Stack gap={2} direction={'col'}>
                    <div className="flex-1">
                        <Label htmlFor="width">Width</Label>
                        <Input id="width" defaultValue="100%" className="" />
                    </div>
                    <div className="flex-1">
                        <Label htmlFor="maxWidth">Max. width</Label>
                        <Input id="width" defaultValue="100%" className="" />
                    </div>
                    <div className="flex-1">
                        <Label htmlFor="height">Height</Label>
                        <Input id="width" defaultValue="100%" className="" />
                    </div>
                    <div className="flex-1">
                        <Label htmlFor="maxHeight">Max. height</Label>
                        <Input id="width" defaultValue="100%" className="" />
                    </div>
                </Stack>
            </PopoverContent>
        </Popover>
    ),
}
