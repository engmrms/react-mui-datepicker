/* eslint-disable react-hooks/exhaustive-deps */
import { faker } from '@faker-js/faker'
import { QueryClient, QueryClientProvider, useInfiniteQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './Assets/css/Shared.css'
import { VirtualScroller } from './Components/VirtualScroller'
let root: ReactDOM.Root | null = null

const container = document.getElementById('root')

async function fetchServerPage(limit: number, offset: number = 0): Promise<{ rows: Array<string>; nextOffset: number }> {
    const rows = Array.from({ length: limit }).map(
        (_, i) => `Async loaded row #${i + offset * limit} \n ${faker.lorem.sentence(faker.number.int({ min: 20, max: 60 }))}`,
    )

    await new Promise(r => setTimeout(r, 1000))

    return { rows, nextOffset: offset + 1 }
}

const queryClient = new QueryClient()

const App = () => {
    const { status, data, error, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ['projects'],
        queryFn: ctx => fetchServerPage(10, ctx.pageParam),
        getNextPageParam: lastGroup => lastGroup.nextOffset,
        initialPageParam: 0,
    })

    const [items] = useState(Array.from({ length: 100 }).map((_, i) => `Item #${i}`))
    const sentences = Array.from({ length: 10000 }).map(() => faker.lorem.sentence(faker.number.int({ min: 20, max: 60 })))
    const allRows = data ? data.pages.flatMap(d => d.rows) : []

    return (
        <div className="">
            <h1 className="text-black">Hello</h1>

            <VirtualScroller
                async
                status={status}
                error={error}
                isFetchingNextPage={isFetchingNextPage}
                fetchNextPage={fetchNextPage}
                hasNextPage={hasNextPage}
                items={allRows}
                options={{
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
        </div>
    )
}

if (container) {
    if (!root) {
        root = ReactDOM.createRoot(container)
    }

    root.render(
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </React.StrictMode>,
    )
}
