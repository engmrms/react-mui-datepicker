/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'
import { QueryClient, QueryClientProvider, useInfiniteQuery } from '@tanstack/react-query'
import { VirtualScroller } from '../..'
import { Avatar } from '../../ui/avatar'

// Enhanced argTypes with more detailed descriptions and usage notes for better documentation and clarification.
const meta: Meta<typeof VirtualScroller> = {
    component: Avatar,
    title: 'Design System/Data Display/VirtualScroller',
    tags: ['autodocs'],

    argTypes: {
        items: {
            control: 'object',
            description:
                "The array of data items to be rendered in the virtual scroller. Each item will be passed to the `renderItem` function.\n\nExample:\n  items={['Item 1', 'Item 2', 'Item 3']}",
        },
        renderItem: {
            action: 'renderItem',
            description:
                'A function that receives an item and its virtual item metadata, and returns a React node to render. This is where you define how each row looks.\n\nExample:\n  renderItem={(item, virtualItem) => (\n    <div>\n      <span>{virtualItem?.index}</span>\n      <span>{item}</span>\n    </div>\n  )}',
        },
        async: {
            control: 'boolean',
            description:
                'If true, enables infinite/async loading. When the user scrolls to the end, `onAsyncLoad` will be called.\n\nExample:\n  async={true}',
        },
        onAsyncLoad: {
            action: 'onAsyncLoad',
            description:
                'Callback triggered when the user scrolls near the end of the list and more data should be loaded. Use this to fetch more items.\n\nExample:\n  onAsyncLoad={() => {\n    // Fetch more data here\n  }}',
        },
        isLoading: {
            control: 'boolean',
            description:
                'Indicates if more data is currently being loaded. Used to show loading indicators.\n\nExample:\n  isLoading={isFetchingNextPage}',
        },
        options: {
            control: 'object',
            description:
                'Additional options for the virtualizer, such as `overscan` (number of extra items to render above/below the viewport).\n\nExample:\n  options={{ overscan: 5 }}',
            default: {},
        },
        renderLoader: {
            action: 'renderLoader',
            description:
                'Optional. Custom loader component to render while loading more items.\n\nExample:\n  renderLoader={() => <div>Loading...</div>}',
        },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `<h4>Efficiently renders large lists by only rendering visible items, improving performance for long data sets.</h4>
`,
            },
        },
    },
    decorators: [
        Story => {
            const queryClient = new QueryClient()
            return (
                <div className="min-h-space-12">
                    <QueryClientProvider client={queryClient}>
                        <Story />
                    </QueryClientProvider>
                </div>
            )
        },
    ],
}

export default meta

type Story = StoryObj<typeof meta>

const items = Array.from({ length: 1000 }).map((_, i) => `Item #${i}`)

export const Default: Story = {
    args: {
        items: [],
        renderItem: () => {},
        options: {},
    },

    render: args => (
        <VirtualScroller
            {...args}
            items={items}
            renderItem={(item: string, virtualItem) => (
                <div className="  border-b border-border-primary px-space-03 py-space-02">
                    <div className="text-xs text-black">Row{virtualItem?.index}</div>
                    <div className="text-sm text-black">{item}</div>
                </div>
            )}
            className="h-[500px] w-[500px] border-2 border-border-primary"
        />
    ),
}

async function fetchServerPage(limit: number, offset: number = 0): Promise<{ rows: Array<string>; nextOffset: number }> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                rows: Array.from({ length: limit }).map((_, i) => `Async loaded row #${i + offset * limit} \n`),
                nextOffset: offset + 1,
            })
        }, 2000)
    })
}

export const Async: Story = {
    args: {
        items: [],
        async: true,
        onAsyncLoad: () => {},
        isLoading: true,
        options: {},
        renderItem: () => {},
        renderLoader: () => {
            return <div className="h-[35px] w-full"> Loading... </div>
        },
    },

    render: args => {
        const { data, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery({
            queryKey: ['projects'],
            queryFn: ctx => fetchServerPage(10, ctx.pageParam),
            getNextPageParam: lastGroup => lastGroup.nextOffset,
            initialPageParam: 0,
        })

        const allRows = data ? data.pages.flatMap(d => d.rows) : []

        return (
            <VirtualScroller
                {...args}
                async
                items={allRows}
                onAsyncLoad={() => {
                    if (hasNextPage && !isFetchingNextPage) fetchNextPage()
                }}
                isLoading={isFetchingNextPage}
                options={{
                    //The number of items to render above and below the visible area.
                    overscan: 5,
                }}
                renderItem={(item, virtualItem) => (
                    <div className="  border-b border-border-primary px-space-03 py-space-02">
                        <div className="text-xs text-black">Row{virtualItem?.index}</div>
                        <div className="text-sm text-black">{item}</div>
                    </div>
                )}
                className="h-[500px] w-[500px] border-2 border-border-primary"
            />
        )
    },
}
