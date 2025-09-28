import type { Meta, StoryObj } from '@storybook/react'

import { Step, StepDescription, Stepper, StepTitle } from '../../Stepper'

const meta: Meta<typeof Stepper> = {
    title: 'Design System/Navigation/Stepper',
    component: Stepper,
    tags: ['autodocs'],
    argTypes: {
        // Appearance
        orientation: {
            control: 'radio',
            options: ['horizontal', 'vertical'],
            description: 'The orientation of the stepper',
            table: {
                category: 'Appearance',
                type: { summary: 'horizontal | vertical' },
                defaultValue: { summary: 'horizontal' },
            },
        },
        variant: {
            control: 'radio',
            options: ['circle', 'dot'],
            description: 'The variant of the stepper',
            table: {
                category: 'Appearance',
                type: { summary: 'circle | dot' },
                defaultValue: { summary: 'circle' },
            },
        },

        // Events
        onChange: {
            description: 'The on step change of the stepper',
            table: {
                category: 'Events',
                type: { summary: 'function' },
            },
        },

        // Core Configuration
        activeStep: {
            control: 'number',
            description: 'The active step of the stepper',
            table: {
                category: 'Core Configuration',
                type: { summary: 'number' },
                defaultValue: { summary: '1' },
            },
        },
        className: {
            control: 'text',
            description: 'The class name of the stepper',
            table: {
                category: 'Core Configuration',
                type: { summary: 'string' },
            },
        },
    },
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
