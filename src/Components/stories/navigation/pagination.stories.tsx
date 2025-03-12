/* eslint-disable react-hooks/rules-of-hooks */
import { useArgs } from '@storybook/preview-api'
import type { Meta, StoryObj } from '@storybook/react'
import { LinesPerPage, Pagination, PaginationDescription } from '../../paginations'

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
    args: {
        totalItems: 50,
        itemsPerPage: 10,
        selectedPage: 1,
        withoutText: false,
    },
    render: arg => {
        const [storyArgs, updateArgs] = useArgs()
        return (
            <>
                <div className="flex items-center justify-end ">
                    <PaginationDescription currentPage={storyArgs.selectedPage} limit={storyArgs.itemsPerPage} totalCount={storyArgs.totalItems} />
                    <div className="flex items-center space-x-space-03 space-x-reverse">
                        <LinesPerPage value={storyArgs.itemsPerPage} onChange={value => updateArgs({ itemsPerPage: value })} />
                        <Pagination
                            {...arg}
                            onPageChange={function (page: number): void {
                                if (page !== storyArgs.selectedPage) {
                                    updateArgs({ selectedPage: page })
                                }
                            }}
                        />
                    </div>
                </div>
            </>
        )
    },
}

export const PaginationOnly: Story = {
    args: {
        totalItems: 50,
        itemsPerPage: 10,
        selectedPage: 1,
        withoutText: false,
    },
    render: arg => {
        const [storyArgs, updateArgs] = useArgs()
        return (
            <>
                <Pagination
                    {...arg}
                    onPageChange={function (page: number): void {
                        if (page !== storyArgs.selectedPage) {
                            updateArgs({ selectedPage: page })
                        }
                    }}
                />
            </>
        )
    },
}
