import type { Meta, StoryObj } from '@storybook/react'

import * as outlined from 'google-material-icons/outlined'
import { Description, DescriptionItem, DescriptionProps } from '../../Description'
import { Stack } from '../../ui/Layout'

const icons = Object.entries(outlined).filter(([name]) => name !== 'createIcon')
const iconsName = Object.keys(outlined).filter(([name]) => name !== 'createIcon')

const meta: Meta<DescriptionProps> = {
    title: 'Design System/Data Display/Description',
    component: DescriptionItem,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        layout: '',
        docs: {
            description: {
                component: '<h4>Displays a badge or a component that looks like a badge.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<DescriptionProps>
export const Default: Story = {
    args: {
        variant: 'default',
        orientation: 'horizental',
        lastItem: true,
        title: 'Title',
        stretch: false,
        isSingleLine: true,
    },
    argTypes: {
        variant: {
            control: 'radio',
            options: ['default', 'list'],
        },
        orientation: {
            control: 'radio',
            options: ['horizental', 'vertical'],
        },
        icon: {
            control: 'select',
            options: iconsName,
            description: 'Google Material Icon (Outlined | Filled) ',
        },
    },

    render: arg => {
        const iconName = arg.icon as unknown as string
        const icon = icons.find(([name]) => name === iconName)?.[1] as outlined.GoogleMaterialIcon | undefined

        return (
            <Stack direction={'col'} className="p-space-08">
                <Description>
                    <DescriptionItem {...arg} icon={icon}>
                        description
                    </DescriptionItem>
                </Description>
            </Stack>
        )
    },
}
