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
    args: {
        variant: 'default',
        orientation: 'horizental',
        lastItem: true,
        title: 'Title',
        stretch: false,
        isSingleLine: true,
    },
    argTypes: {
        // Appearance
        variant: {
            control: 'radio',
            options: ['default', 'list'],
            table: {
                category: 'Appearance',
                type: { summary: 'default | list' },
                defaultValue: { summary: 'default' },
            },
            description: 'The variant of the description',
        },
        orientation: {
            control: 'radio',
            options: ['horizental', 'vertical'],
            table: {
                category: 'Appearance',
                type: { summary: 'horizental | vertical' },
                defaultValue: { summary: 'horizental' },
            },
            description: 'The orientation of the description',
        },
        icon: {
            control: 'select',
            options: iconsName,
            description: 'Google Material Icon (Outlined | Filled) ',
            table: {
                category: 'Appearance',
                type: { summary: 'GoogleMaterialIcon' },
                defaultValue: { summary: 'undefined' },
            },
        },
        lastItem: {
            control: 'boolean',
            table: {
                category: 'Appearance',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'true' },
            },
            description: 'The last item of the description',
        },
        title: {
            control: 'text',
            table: {
                category: 'Appearance',
                type: { summary: 'string' },
                defaultValue: { summary: 'Title' },
            },
            description: 'The title of the description',
        },
        stretch: {
            control: 'boolean',
            table: {
                category: 'Appearance',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            description: 'The stretch of the description',
        },
        isSingleLine: {
            control: 'boolean',
            table: {
                category: 'Appearance',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'true' },
            },
            description: 'The is single line of the description',
        },
    },
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
