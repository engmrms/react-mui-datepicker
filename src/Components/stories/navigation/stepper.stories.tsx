import type { Meta, StoryObj } from '@storybook/react'

import { Step, StepDescription, Stepper, StepTitle } from '../../Stepper'

const meta: Meta<typeof Stepper> = {
    title: 'Design System/Navigation/Stepper',
    component: Stepper,
    tags: ['autodocs'],
    argTypes: {},
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>Steppers convey progress through numbered steps. It provides a wizard-like workflow.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Stepper>
export const Default: Story = {
    args: {
        orientation: 'horizontal',
        activeStep: 1,
        variant: 'circle',
    },
    argTypes: {
        orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
        variant: { control: 'radio', options: ['circle', 'dot'] },
    },

    render: arg => (
        <Stepper {...arg}>
            <Step>
                <StepTitle>first</StepTitle>
                <StepDescription>first description first description first description</StepDescription>
            </Step>
            <Step>
                <StepTitle>second</StepTitle>
                <StepDescription>second description second description second description</StepDescription>
            </Step>
            <Step>
                <StepTitle>third</StepTitle>
                <StepDescription>third description third description third description</StepDescription>
            </Step>
            <Step>
                <StepTitle>fourth</StepTitle>
                <StepDescription>fourth description fourth description fourth description</StepDescription>
            </Step>
            <Step>
                <StepTitle>fifth</StepTitle>
                <StepDescription>fifth description</StepDescription>
            </Step>
            <Step>
                <StepTitle>sixth</StepTitle>
                <StepDescription>sixth description </StepDescription>
            </Step>
        </Stepper>
    ),
}
