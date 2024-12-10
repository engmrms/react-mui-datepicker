/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'

import * as Outlined from 'google-material-icons/outlined'
//import debounce from 'lodash/debounce'
import { filledIcons, outlinedIcons } from 'google-material-icons'
import React, { useMemo, useState } from 'react'
import { debounce } from '../../../Lib/utils'
import { Input } from '../../ui/input'
import { Stack } from '../../ui/Layout'
import { Switch } from '../../ui/switch'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../ui/tooltip'

function SVGIcons() {
    const [search, setSearch] = useState('')
    const [toggle, setToggle] = useState(false)
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event?.target.value)
    }

    const icons = useMemo(() => {
        return Object.entries(toggle ? outlinedIcons : filledIcons).filter(
            ([name]) => name !== 'createIcon' && name.toLowerCase().includes(search.toLowerCase()),
        )
    }, [search, toggle])

    return (
        <Stack direction={'col'}>
            <h3 className="title-02">Icons</h3>
            <Stack alignItems={'center'}>
                <div className="flex flex-col lg:flex-row lg:items-center">
                    <Input
                        variant="outline"
                        rounded="full"
                        type="text"
                        placeholder="Search icon"
                        //onChange={debounce(changeHandler, 600)}
                        onChange={debounce(changeHandler, 600)}
                        endAdornment={<Outlined.Search />}
                    />
                </div>
                <span className="flex items-center gap-x-space-02">
                    Filled <Switch onCheckedChange={() => setToggle(!toggle)} /> Outlined{' '}
                </span>
            </Stack>

            <div className="grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-12">
                <TooltipProvider>
                    {icons.map(([name, Icon]) => (
                        <Tooltip key={name}>
                            <TooltipTrigger>
                                <Stack
                                    key={name}
                                    direction={'col'}
                                    gap={3}
                                    justifyItems={'center'}
                                    alignItems={'center'}
                                    className="cursor-pointer rounded-1 border p-space-04 hover:bg-card-hover hover:shadow-01"
                                    onClick={() => {
                                        navigator.clipboard.writeText(name).catch(err => console.error('Failed to copy to clipboard:', err))
                                    }}
                                    title="Click to copy icon name">
                                    {React.createElement(Icon as any, {
                                        className: 'size-space-3 ',
                                    })}
                                </Stack>
                            </TooltipTrigger>
                            <TooltipContent>
                                <span className="break-all text-center text-body-01 text-foreground-secondary ">{name}</span>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </TooltipProvider>
            </div>
        </Stack>
    )
}

/** ####This page contains a list of available icons under google-material-icons package. To use icons install the package and select an icon to use.*/
const meta: Meta = {
    title: 'Design System/Data Display/Icons',
    component: SVGIcons,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        // layout: 'centered',
    },
}

export default meta
type Story = StoryObj<typeof SVGIcons>
export const Default: Story = {
    render: SVGIcons,
}
