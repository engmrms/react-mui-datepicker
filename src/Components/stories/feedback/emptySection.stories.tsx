import type { Meta, StoryObj } from '@storybook/react'
import EmptySection, { EmptySectionProps } from '../../ui/EmptySection'
import { Button } from '../../ui/button'

const Icon = (
    <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.125 12C0.125 5.37258 5.49758 0 12.125 0H36.125C42.7524 0 48.125 5.37258 48.125 12V36C48.125 42.6274 42.7524 48 36.125 48H12.125C5.49758 48 0.125 42.6274 0.125 36V12Z"
            fill="#EBEBEB"
        />
        <path
            d="M30.7917 12V34.1867C30.7916 35.18 30.5567 36.1593 30.106 37.0444C29.6553 37.9296 29.0016 38.6957 28.1983 39.28L28.125 39.3334H10.7917L10.9383 39.2267C11.7188 38.6588 12.354 37.9144 12.792 37.0543C13.2299 36.1941 13.4583 35.2426 13.4583 34.2774V12C13.4583 11.116 13.8095 10.2681 14.4346 9.643C15.0598 9.01788 15.9076 8.66669 16.7917 8.66669H34.125C33.241 8.66669 32.3931 9.01788 31.768 9.643C31.1429 10.2681 30.7917 11.116 30.7917 12Z"
            fill="#C4C4C6"
        />
        <path
            d="M32.5903 8.66669H16.7917C15.9076 8.66669 15.0598 9.01788 14.4346 9.643C13.8095 10.2681 13.4583 11.116 13.4583 12V27.8L32.5903 8.66669Z"
            fill="#EBEBEB"
        />
        <path
            d="M30.7917 12V34.1867C30.7916 35.18 30.5567 36.1592 30.106 37.0444C29.6553 37.9296 29.0016 38.6957 28.1983 39.28L28.125 39.3334H10.7917L10.9383 39.2267C11.7188 38.6588 12.354 37.9144 12.792 37.0543C13.2299 36.1941 13.4583 35.2426 13.4583 34.2774V12C13.4583 11.116 13.8095 10.2681 14.4346 9.643C15.0598 9.01788 15.9076 8.66669 16.7917 8.66669H34.125C33.241 8.66669 32.3931 9.01788 31.768 9.643C31.1429 10.2681 30.7917 11.116 30.7917 12Z"
            stroke="#5B5F5E"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M37.4583 12V16.6667C37.4583 17.0203 37.3179 17.3595 37.0678 17.6095C36.8178 17.8595 36.4786 18 36.125 18H30.7917V12.1867C30.7737 11.3379 31.0679 10.512 31.6184 9.86561C32.1689 9.21925 32.9375 8.79739 33.7783 8.68002C33.8935 8.66893 34.0093 8.66447 34.125 8.66669C34.5627 8.66669 34.9962 8.75291 35.4006 8.92043C35.805 9.08794 36.1725 9.33347 36.482 9.643C36.7916 9.95253 37.0371 10.32 37.2046 10.7244C37.3721 11.1288 37.4583 11.5623 37.4583 12Z"
            fill="#C4C4C6"
            stroke="#5B5F5E"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M16.7917 14H20.125" stroke="#5B5F5E" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.4583 18H26.7917" stroke="#5B5F5E" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.7917 22H26.7917" stroke="#5B5F5E" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.7917 26H26.7917" stroke="#5B5F5E" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.7917 30H22.7917" stroke="#5B5F5E" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.7917 30H26.7917" stroke="#5B5F5E" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.7917 34H22.7917" stroke="#5B5F5E" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)
const Actions = () => {
    return (
        <>
            <Button size="sm" variant="outline" colors="primary">
                Action 1
            </Button>
            <Button size="sm" colors="primary">
                Action 2
            </Button>
        </>
    )
}

const Template = (args: EmptySectionProps) => {
    return (
        <div className="flex">
            <EmptySection {...args} description="Try adjusting your search or filter to find what you are looking for." />
        </div>
    )
}
const meta: Meta<typeof EmptySection> = {
    title: 'Design System/FeedBack/EmptySection',
    tags: ['autodocs'],
    component: Template,
    args: { bordered: false },
    argTypes: {
        layout: {
            options: ['vertical', 'horizontal'],
            control: { type: 'inline-radio' },
            table: {
                category: 'Appearance',
                type: { summary: 'vertical | horizontal' },
                defaultValue: { summary: 'vertical' },
            },
            description: 'The layout of the empty section',
        },
        background: {
            options: ['gray', 'none'],
            control: { type: 'inline-radio' },
            table: {
                category: 'Appearance',
                type: { summary: 'gray | none' },
                defaultValue: { summary: 'gray' },
            },
            description: 'The background of the empty section',
        },
        icon: {
            control: 'object',
            table: {
                category: 'Appearance',
                type: { summary: 'ReactNode' },
                defaultValue: { summary: 'undefined' },
            },
            description: 'The icon of the empty section',
        },
        bordered: {
            control: 'boolean',
            table: {
                category: 'Appearance',
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            description: 'The bordered state of the empty section',
        },
        description: {
            control: 'text',
            table: {
                category: 'Appearance',
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
            description: 'The description of the empty section',
        },
        title: {
            control: 'text',
            table: {
                category: 'Appearance',
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
            description: 'The title of the empty section',
        },
    },
    parameters: {
        docs: {
            description: {
                component: '<h4>EmptySection is a component that displays a message when there is no data.</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof EmptySection>

export const Default: Story = {
    args: {
        background: 'gray',
        layout: 'vertical',
        icon: Icon,
    },
    argTypes: {},
}
export const WithActions: Story = {
    args: {
        background: 'gray',
        layout: 'vertical',
        icon: Icon,
        children: <Actions />,
    },
    argTypes: {},
}
