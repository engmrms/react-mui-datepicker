/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'

import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    Breadcrumbs,
    BreadcrumbSeparator,
} from '../../ui/breadcrumb'

const meta: Meta<typeof Breadcrumb> = {
    component: Breadcrumb,
    title: 'Design System/Navigation/Breadcrumbs',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>Displays the path to the current resource using a hierarchy of links.</h4>',
            },
        },
    },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: (_, { globals: { dir } }) => (
        <Breadcrumb dir={dir} separator={<>-</>}>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    ),
}

export const BreadcrumbWithCustomSeparator: Story = {
    render: (_, { globals: { dir } }) => (
        <Breadcrumb dir={dir}>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    ),
}

export const BreadcrumbCollapsed: Story = {
    render: (_, { globals: { dir } }) => (
        <Breadcrumb dir={dir}>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <a href="/">Home</a>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbEllipsis />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <a href="/">Components</a>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    ),
}

export const BreadcrumbResponsive: Story = {
    render: () => (
        <Breadcrumbs
            items={[
                { render: <a href="/">Home</a>, title: 'Home' },
                { path: '/Link1', title: 'Link1' },
                {
                    render: (
                        <a className="block" href="/Link2">
                            Link2
                        </a>
                    ),
                    title: 'Link2',
                },
                {
                    render: (
                        <a className="block" href="/Link3">
                            Link3
                        </a>
                    ),
                    title: 'Link3',
                },
                {
                    render: (
                        <a className="block" href="/Link4">
                            Link4
                        </a>
                    ),
                    title: 'Link4',
                },
                {
                    render: (
                        <a className="block" href="/Link5">
                            Link5
                        </a>
                    ),
                    title: 'Link5',
                },
                {
                    render: (
                        <a className="block" href="/Link6">
                            Link6
                        </a>
                    ),
                    title: 'Link6',
                },
            ]}
        />
    ),
}
