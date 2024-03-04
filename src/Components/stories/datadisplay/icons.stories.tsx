/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'

import { filled, outlined } from 'google-material-icons'
import debounce from 'lodash/debounce'
import React, { useCallback, useState } from 'react'
import { Input } from '../../ui/input'
import { Switch } from '../../ui/switch'

function SVGIcons() {
    const [search, setSearch] = useState('')
    const [toggle, setToggle] = useState(false)
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event?.target.value)
    }

    const searchFilter = useCallback(() => {
        return Object.keys(toggle ? outlined : filled).filter(icon => icon.toLowerCase().includes(search) && icon !== 'default')
    }, [search, toggle])

    return (
        <>
            <div className="visible mb-4">
                <h3 className="title-01">Icons</h3>
                <div className="flex w-full items-end    justify-between">
                    <span className="flex items-center gap-x-space-02">
                        Filled <Switch onCheckedChange={() => setToggle(!toggle)} /> Outlined{' '}
                    </span>
                    <div className="flex flex-col lg:flex-row lg:items-center">
                        <Input
                            variant="outline"
                            rounded="full"
                            type="text"
                            placeholder="Search icon"
                            onChange={debounce(changeHandler, 600)}
                            endAdornment={<outlined.Search />}
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-space-02">
                {searchFilter().map(icon => (
                    <div key={icon} className="flex flex-col items-center gap-4 border border-gray-300 p-4">
                        {React.createElement((toggle ? (outlined as unknown as any) : (filled as unknown as any))[icon])}{' '}
                        <p className="text-wrap border-t border-t-border pt-2 text-body-01 text-foreground-secondary">{icon}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

/** ####This page contains a list of available icons under google-material-icons package. To use icons install the package and select an icon to use.*/
const meta: Meta = {
    title: 'Design System/Data Display/Icons',
    component: SVGIcons,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        layout: 'centered',
    },
}

export default meta
type Story = StoryObj<typeof SVGIcons>
export const Default: Story = {
    render: SVGIcons,
}
