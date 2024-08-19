import type { Meta, StoryObj } from '@storybook/react'
import EmptySection, { EmptySectionProps } from '../../ui/EmptySection'
import { Button } from '../../ui/button'

const Icon = (
    <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.375 12C0.375 5.37258 5.74758 0 12.375 0H36.375C43.0024 0 48.375 5.37258 48.375 12V36C48.375 42.6274 43.0024 48 36.375 48H12.375C5.74758 48 0.375 42.6274 0.375 36V12Z"
            fill="#EBEBEB"
        />
        <path
            d="M31.0417 12V34.1867C31.0416 35.18 30.8067 36.1593 30.356 37.0444C29.9053 37.9296 29.2516 38.6957 28.4483 39.28L28.375 39.3334H11.0417L11.1883 39.2267C11.9688 38.6588 12.604 37.9144 13.042 37.0543C13.4799 36.1941 13.7082 35.2426 13.7083 34.2774V12C13.7083 11.116 14.0595 10.2681 14.6846 9.643C15.3098 9.01788 16.1576 8.66669 17.0417 8.66669H34.375C33.4909 8.66669 32.6431 9.01788 32.018 9.643C31.3929 10.2681 31.0417 11.116 31.0417 12Z"
            fill="#C4C4C6"
        />
        <path
            d="M32.8403 8.66669H17.0417C16.1576 8.66669 15.3098 9.01788 14.6846 9.643C14.0595 10.2681 13.7083 11.116 13.7083 12V27.8L32.8403 8.66669Z"
            fill="#EBEBEB"
        />
        <path
            d="M31.0417 12V34.1867C31.0416 35.18 30.8067 36.1592 30.356 37.0444C29.9053 37.9296 29.2516 38.6957 28.4483 39.28L28.375 39.3334H11.0417L11.1883 39.2267C11.9688 38.6588 12.604 37.9144 13.042 37.0543C13.4799 36.1941 13.7082 35.2426 13.7083 34.2774V12C13.7083 11.116 14.0595 10.2681 14.6846 9.643C15.3098 9.01788 16.1576 8.66669 17.0417 8.66669H34.375C33.4909 8.66669 32.6431 9.01788 32.018 9.643C31.3929 10.2681 31.0417 11.116 31.0417 12Z"
            stroke="#5B5F5E"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M37.7083 12V16.6667C37.7083 17.0203 37.5679 17.3595 37.3178 17.6095C37.0678 17.8595 36.7286 18 36.375 18H31.0417V12.1867C31.0237 11.3379 31.3179 10.512 31.8684 9.86561C32.4189 9.21925 33.1875 8.79739 34.0283 8.68002C34.1435 8.66893 34.2593 8.66447 34.375 8.66669C34.8127 8.66669 35.2462 8.75291 35.6506 8.92043C36.055 9.08794 36.4225 9.33347 36.732 9.643C37.0416 9.95253 37.2871 10.32 37.4546 10.7244C37.6221 11.1288 37.7083 11.5623 37.7083 12Z"
            fill="#C4C4C6"
            stroke="#5B5F5E"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M17.0417 14H20.375" stroke="#5B5F5E" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.7083 18H27.0417" stroke="#5B5F5E" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.0417 22H27.0417" stroke="#5B5F5E" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.0417 26H27.0417" stroke="#5B5F5E" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.0417 30H23.0417" stroke="#5B5F5E" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.0417 30H27.0417" stroke="#5B5F5E" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.0417 34H23.0417" stroke="#5B5F5E" strokeLinecap="round" strokeLinejoin="round" />
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
            <EmptySection {...args} />
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
        },
        background: {
            options: ['gray', 'none'],
            control: { type: 'inline-radio' },
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
