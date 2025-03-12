import type { Meta, StoryObj } from '@storybook/react'

import vission from '../../../Assets/images/logos/vision_neutral.svg'
import {
    NavigationHeader,
    NavigationHeaderLogo,
    NavigationMain,
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '../../ui/navigation-menu'

const menuItems = [
    {
        title: 'Item 7',
        href: '#',
        items: [
            {
                title: 'Sub Item 1',
                href: '#',
                description: 'Description for sub item 1',
            },
            {
                title: 'Sub Item 2',
                href: '#',
                description: 'Description for sub item 2',
            },
        ],
    },
    {
        title: 'Item 6',
        href: 'item6',
        items: [],
    },
    {
        title: 'Item 5',
        href: 'item5',
        items: [],
    },
    {
        title: 'Item 4',
        href: 'item4',
        items: [],
    },
    {
        title: 'Item 3',
        href: 'item3',
        items: [],
    },
    {
        title: 'Item 2',
        href: 'item2',
        items: [],
    },
    {
        title: 'Item 1',
        href: 'item1',
        items: [],
    },
]

const meta: Meta<typeof NavigationHeader> = {
    title: 'Design System/Templates/Navigation Header',
    component: NavigationHeader,
    tags: ['autodocs'],

    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>A collection of links for navigating websites.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof NavigationHeader>

export const Default: Story = {
    args: {},
    render: () => (
        <NavigationHeader divider>
            <NavigationMain>
                <NavigationHeaderLogo logoSrc={vission} logoAlt="logo" />
                <NavigationMenu className="" dir="ltr">
                    <NavigationMenuList>
                        {[...menuItems].reverse().map(m => (
                            <NavigationMenuItem key={m.title}>
                                {m.items.length > 0 ? (
                                    <>
                                        <NavigationMenuTrigger>{m.title}</NavigationMenuTrigger>
                                        <NavigationMenuContent className="grid w-[400px]">
                                            <ul className="one m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                                                {m.items.map(subItem => (
                                                    <li key={subItem.title} className="row-span-3 grid">
                                                        <NavigationMenuLink asChild>
                                                            <a
                                                                href={subItem.href}
                                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                                                <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                    {subItem.description}
                                                                </p>
                                                            </a>
                                                        </NavigationMenuLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </>
                                ) : (
                                    <NavigationMenuLink href={m.title}>{m.title}</NavigationMenuLink>
                                )}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </NavigationMain>
        </NavigationHeader>
    ),
}
