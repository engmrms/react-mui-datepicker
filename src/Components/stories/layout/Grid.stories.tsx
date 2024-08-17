/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Meta, StoryObj } from '@storybook/react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Grid, GridItem } from '../../ui/Layout'

const GridSample = (arg: any) => {
    return (
        <Grid {...arg}>
            <GridItem className="bg-red-300">col-1</GridItem>
            <GridItem className="bg-red-300">col-1</GridItem>
            <GridItem columns={{ sm: 1, md: 3, xl: 6 }} className="bg-red-300">
                responsive
            </GridItem>
            <GridItem columns={5} className="bg-red-300">
                col-5
            </GridItem>
            <GridItem columns={6} className="bg-red-300">
                col-6
            </GridItem>
            <GridItem className="bg-red-300">col-1</GridItem>
        </Grid>
    )
}
const meta: Meta<typeof Grid> = {
    title: 'Design System/layout/Grid',
    component: GridSample,
    tags: ['autodocs'],
    args: {
        gap: 'medium',
    },
    argTypes: {
        gap: {
            options: ['none', 'small', 'medium'],
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
