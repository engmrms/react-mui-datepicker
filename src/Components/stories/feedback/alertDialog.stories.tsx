import type { Meta, StoryObj } from '@storybook/react'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '../../ui/alert-dialog'

import { Button } from '../../ui/button'

const AlertDialogExample = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" colors="error" className="w-60">
                    Delete
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="w-full justify-center">
                    <AlertDialogCancel asChild>
                        <Button rounded="full" variant="outline" colors={'error'} className="w-full">
                            Sure
                        </Button>
                    </AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <Button variant="default" rounded="full" colors={'primary'} className="w-full">
                            Cancel
                        </Button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

const meta: Meta<typeof AlertDialogExample> = {
    component: AlertDialogExample,
    title: 'Design System/FeedBack/Alert Dialog',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            source: {
                code: `<AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" className="w-60">
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
</AlertDialog>
      `,
            },

            description: {
                component: '<h4>A modal dialog that interrupts the user with important content and expects a response.</h4>',
            },
        },
    },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
