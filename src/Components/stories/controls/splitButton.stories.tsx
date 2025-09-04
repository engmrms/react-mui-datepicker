import type { Meta, StoryObj } from '@storybook/react'

import { CardGiftcard, Person2, School, TravelExplore } from 'google-material-icons/outlined'
import { Badge, Stack } from '../../../package'
import { SplitButton } from '../../ui/SplitButton'

const meta: Meta<typeof SplitButton> = {
    title: 'Design System/Controls/SplitButton',
    component: SplitButton,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `<h4 className="tw-text-subtitle-02">A split button combines a primary action with a dropdown menu for additional options. Use it when you want to provide a main action and related secondary actions in a compact, accessible way.</h4>`,
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof SplitButton>

export const Default: Story = {
    args: {
        variant: 'default',
        colors: 'primary',
        size: 'default',
        rounded: 'default',
        children: 'Split Button',
        disabled: false,
        renderMenuItems: (item: unknown) => <div>{String(item)}</div>,
        menuItems: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10'],
    },
}

const menuItems = [
    {
        label: 'item 1',
        description: 'item 1 description',
        icon: <School />,
        count: 10,
    },
    {
        label: 'item 2',
        description: 'item 2 description',
        icon: <TravelExplore />,
        count: 10,
    },
    {
        label: 'item 3',
        description: 'item 3 description',
        icon: <CardGiftcard />,
        count: 10,
    },
    {
        label: 'item 4',
        description: 'item 4 description',
        icon: <Person2 />,
        count: 10,
    },
]

export const CustomRenderMenuItems: Story = {
    args: {
        variant: 'default',
        colors: 'primary',
        size: 'default',
        rounded: 'default',
        children: 'Custom Render Menu Items',
        disabled: false,
        menuItems: menuItems,
    },

    render: args => (
        <SplitButton
            {...args}
            menuItems={menuItems}
            renderMenuItems={item => (
                <Stack gap={8} className="min-w-80  [&>svg]:size-space-05">
                    <Stack direction="row" gap={2}>
                        {item.icon}
                        <Stack direction="col" gap={'none'}>
                            <span>{item.label}</span>
                            <span className="text-caption-01 text-foreground-secondary">{item.description}</span>
                        </Stack>
                    </Stack>
                    <Badge size="sm" variant="ghost" colors="gray" className="ms-auto">
                        {item.count}
                    </Badge>
                </Stack>
            )}>
            {args.children}
        </SplitButton>
    ),
}
