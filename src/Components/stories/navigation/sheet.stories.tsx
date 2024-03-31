import type { Meta, StoryObj } from '@storybook/react'

import { SheetForm, SheetFormBody, SheetFormContent, SheetFormFooter, SheetFormHeader } from '../../SheetForm'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Label } from '../../ui/label'
import { SheetClose, SheetTrigger } from '../../ui/sheet'

const meta: Meta<typeof SheetForm> = {
    title: 'Design System/Navigation/Sheet',
    component: SheetForm,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>Extends the Dialog component to display content that complements the main content of the screen.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof SheetForm>
export const Default: Story = {
    render: arg => (
        <SheetForm {...arg}>
            <SheetTrigger asChild>
                <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetFormContent>
                <SheetFormHeader title="Edit profile" />

                <SheetFormBody>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input id="name" value="Pedro Duarte" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input id="username" value="@peduarte" className="col-span-3" />
                        </div>
                    </div>
                </SheetFormBody>
                <SheetFormFooter>
                    <SheetClose asChild>
                        <Button type="submit" variant="default" colors="primary" className="w-full" rounded={'full'}>
                            Save changes
                        </Button>
                    </SheetClose>
                </SheetFormFooter>
            </SheetFormContent>
        </SheetForm>
    ),
}
