import type { Meta, StoryObj } from '@storybook/react'

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '../../ui/pagination'

const meta: Meta<typeof Pagination> = {
    title: 'Design System/Navigation/Pagination',
    component: Pagination,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        docs: {
            description: {
                component: '<h4>Pagination with page navigation, next and previous links.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Pagination>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: arg => (
        <Pagination {...arg}>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink>1</PaginationLink>
                    <PaginationLink>2</PaginationLink>
                    <PaginationLink>3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    ),
}
