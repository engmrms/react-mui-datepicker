/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Meta, StoryObj } from '@storybook/react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Grid, GridItem } from '../../ui/Layout'

const GridSample = (arg: any) => {
    return (
        <Grid {...arg}>
            <GridItem className="bg-red-300 p-space-02">col-1</GridItem>
            <GridItem className="bg-red-300 p-space-02">col-1</GridItem>
            <GridItem columns={{ sm: 1, md: 3, xl: 6 }} className="bg-red-300 p-space-02">
                responsive
            </GridItem>
            <GridItem columns={5} className="bg-red-300 p-space-02">
                col-5
            </GridItem>
            <GridItem columns={6} className="bg-red-300 p-space-02">
                col-6
            </GridItem>
            <GridItem className="bg-red-300 p-space-02">col-1</GridItem>
        </Grid>
    )
}
const meta: Meta<typeof Grid> = {
    title: 'Design System/layout/Grid',
    component: GridSample,
    tags: ['autodocs'],
    args: {
        gap: 1,
    },
    argTypes: {
        gap: {
            options: ['none', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            control: { type: 'inline-radio' },
        },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>Displays a Stack</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Grid>
export const Default: Story = {
    render: GridSample,
}

const TwoColumnStory = (arg: any) => {
    return (
        <Grid {...arg}>
            <GridItem columns={{ sm: 2, md: 4, lg: 6 }}>
                <div className="h-36 w-36 bg-red-300" />
            </GridItem>
            <GridItem columns={{ sm: 2, md: 4, lg: 6 }}>
                <div className="h-36 w-36 bg-red-300" />
            </GridItem>
        </Grid>
    )
}
export const TwoColumn: Story = {
    render: TwoColumnStory,
}
const SixColumnsStory = (arg: any) => {
    return (
        <Grid {...arg}>
            <GridItem columns={{ base: 2, md: 4, lg: 6 }}>
                <div className="h-36 w-36 bg-red-300" />
            </GridItem>
            <GridItem columns={{ base: 2, md: 4, lg: 6 }}>
                <div className="h-36 w-36 bg-red-300" />
            </GridItem>
            <GridItem columns={{ base: 2, md: 4, lg: 6 }}>
                <div className="h-36 w-36 bg-red-300" />
            </GridItem>
            <GridItem columns={{ base: 2, md: 4, lg: 6 }}>
                <div className="h-36 w-36 bg-red-300" />
            </GridItem>
            <GridItem columns={{ base: 2, md: 4, lg: 6 }}>
                <div className="h-36 w-36 bg-red-300" />
            </GridItem>
            <GridItem columns={{ base: 2, md: 4, lg: 6 }}>
                <div className="h-36 w-36 bg-red-300" />
            </GridItem>
        </Grid>
    )
}
export const SixColumns: Story = {
    render: SixColumnsStory,
}
