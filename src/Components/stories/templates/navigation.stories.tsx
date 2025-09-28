/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react'

import { Person } from 'google-material-icons/outlined'
import { useToggle } from 'usehooks-ts'
import vision from '../../../Assets/images/logos/vision_neutral.svg'
import { strings } from '../../../Locales'
import { Button, NavigationMobileFooter, NavigationMobileLink, Stack } from '../../../package'
import {
    NavigationAction,
    NavigationActions,
    NavigationHeader,
    NavigationHeaderLogo,
    NavigationMain,
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMobileBody,
    NavigationMobileHeader,
    NavigationMobileSideBar,
    NavigationSearch,
    NavigationSwitchLanguage,
} from '../../ui/navigation-menu'

const menuItems = [
    {
        title: 'Item 1',
        href: 'item1',
        items: [],
    },
    {
        title: 'Item 2',
        href: 'item2',
        items: [],
    },
    {
        title: 'Item 3',
        href: 'item3',
        items: [],
    },
    {
        title: 'Item 4',
        href: 'item4',
        items: [],
    },
    {
        title: 'Item 5',
        href: 'item5',
        items: [],
    },
    {
        title: 'Item 6',
        href: 'item6',
        items: [],
    },
]

const meta: Meta<typeof NavigationHeader> = {
    title: 'Design System/Templates/Navigation Header',
    component: NavigationHeader,
    tags: ['autodocs'],
    argTypes: {
        divider: {
            description: 'The divider of the navigation header',
            table: {
                category: 'Appearance',
                type: { summary: 'boolean' },
            },
        },
    },

    parameters: {
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
    args: {
        divider: true,
    },
    render: args => {
        const [open, toggle, setToggle] = useToggle()
        strings.setLanguage('en')
        return (
            <>
                <NavigationHeader {...args}>
                    <NavigationMain collapsed={open} onToggleCollapsed={toggle}>
                        <NavigationHeaderLogo logoSrc={vision} logoAlt="logo" />
                        <NavigationMenu className="">
                            <NavigationMenuList>
                                {[...menuItems].map(m => (
                                    <NavigationMenuItem key={m.title}>
                                        <NavigationMenuLink href={m.title}>{m.title}</NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </NavigationMain>
                    <NavigationActions>
                        <NavigationSearch onSearch={val => console.log(val)} />
                        <NavigationSwitchLanguage />
                        <NavigationAction asChild>
                            <a href="#">
                                <Person />
                                <span className="sr-only lg:not-sr-only">{strings.Shared.Login}</span>
                            </a>
                        </NavigationAction>
                    </NavigationActions>
                </NavigationHeader>
                <NavigationMobileSideBar open={open} onOpenChange={setToggle}>
                    <NavigationMobileHeader>
                        <img src={vision} />
                    </NavigationMobileHeader>
                    <NavigationMobileBody>
                        <Stack gap={'none'} direction={'col'}>
                            {[...menuItems].map(m => (
                                <NavigationMobileLink key={m.title} href={m.title}>
                                    {m.title}
                                </NavigationMobileLink>
                            ))}
                            {[...menuItems].map(m => (
                                <NavigationMobileLink key={m.title} href={m.title}>
                                    {m.title}
                                </NavigationMobileLink>
                            ))}
                        </Stack>
                        <NavigationMobileFooter>
                            <Button rounded={'default'} size={'sm'}>
                                Login
                            </Button>
                        </NavigationMobileFooter>
                    </NavigationMobileBody>
                </NavigationMobileSideBar>
            </>
        )
    },
}
