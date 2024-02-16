import type { Meta, StoryObj } from '@storybook/react'

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../../ui/sheet'

import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Label } from '../../ui/label'

const meta: Meta<typeof Sheet> = {
    title: 'Design System/Navigation/Sheet',
    component: Sheet,
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
type Story = StoryObj<typeof Sheet>
export const Default: Story = {
    render: (arg, { globals: { locale } }) => (
        <Sheet {...arg}>
            <SheetTrigger asChild>
                <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent side={locale === 'ar' ? 'left' : 'right'}>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>Make changes to your profile here. Click save when you&apos;re done.</SheetDescription>
                </SheetHeader>
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
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit" variant="default" colors="primary">
                            Save changes
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    ),
}
