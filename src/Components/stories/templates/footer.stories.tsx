import type { Meta, StoryObj } from '@storybook/react'

import { Footer, FooterProps } from '../../Footer'

const meta: Meta<typeof Footer> = {
    title: 'Design System/Templates/Footer',
    component: Footer,
    tags: ['autodocs'],

    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '<h4>Displays a Footer template component .</h4>',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof Footer>

const schema: FooterProps = {
    socialMediaTitle: ' Social Media',
    socialMediaLinks: [
        {
            title: 'facebook',
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.943526 1.21547C1.05038 1.00649 1.2653 0.875 1.5 0.875H5.66667C5.86736 0.875 6.05584 0.971373 6.17334 1.13407L10.2867 6.82945L16.0581 1.05806C16.3021 0.813981 16.6979 0.813981 16.9419 1.05806C17.186 1.30214 17.186 1.69786 16.9419 1.94194L11.028 7.85589L17.0067 16.1341C17.1441 16.3243 17.1633 16.5756 17.0565 16.7845C16.9496 16.9935 16.7347 17.125 16.5 17.125H12.3333C12.1326 17.125 11.9442 17.0286 11.8267 16.8659L7.71333 11.1706L1.94194 16.9419C1.69787 17.186 1.30214 17.186 1.05806 16.9419C0.813983 16.6979 0.813983 16.3021 1.05806 16.0581L6.97201 10.1441L0.993328 1.86593C0.85591 1.67566 0.836676 1.42444 0.943526 1.21547ZM2.72235 2.125L12.6529 15.875H15.2777L5.3471 2.125H2.72235Z"
                        fill="currentColor"></path>
                </svg>
            ),
            target: './facebook',
        },
        {
            title: 'X',
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.943526 1.21547C1.05038 1.00649 1.2653 0.875 1.5 0.875H5.66667C5.86736 0.875 6.05584 0.971373 6.17334 1.13407L10.2867 6.82945L16.0581 1.05806C16.3021 0.813981 16.6979 0.813981 16.9419 1.05806C17.186 1.30214 17.186 1.69786 16.9419 1.94194L11.028 7.85589L17.0067 16.1341C17.1441 16.3243 17.1633 16.5756 17.0565 16.7845C16.9496 16.9935 16.7347 17.125 16.5 17.125H12.3333C12.1326 17.125 11.9442 17.0286 11.8267 16.8659L7.71333 11.1706L1.94194 16.9419C1.69787 17.186 1.30214 17.186 1.05806 16.9419C0.813983 16.6979 0.813983 16.3021 1.05806 16.0581L6.97201 10.1441L0.993328 1.86593C0.85591 1.67566 0.836676 1.42444 0.943526 1.21547ZM2.72235 2.125L12.6529 15.875H15.2777L5.3471 2.125H2.72235Z"
                        fill="currentColor"></path>
                </svg>
            ),
            target: './facebook',
        },
        {
            title: 'linkedin',
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.943526 1.21547C1.05038 1.00649 1.2653 0.875 1.5 0.875H5.66667C5.86736 0.875 6.05584 0.971373 6.17334 1.13407L10.2867 6.82945L16.0581 1.05806C16.3021 0.813981 16.6979 0.813981 16.9419 1.05806C17.186 1.30214 17.186 1.69786 16.9419 1.94194L11.028 7.85589L17.0067 16.1341C17.1441 16.3243 17.1633 16.5756 17.0565 16.7845C16.9496 16.9935 16.7347 17.125 16.5 17.125H12.3333C12.1326 17.125 11.9442 17.0286 11.8267 16.8659L7.71333 11.1706L1.94194 16.9419C1.69787 17.186 1.30214 17.186 1.05806 16.9419C0.813983 16.6979 0.813983 16.3021 1.05806 16.0581L6.97201 10.1441L0.993328 1.86593C0.85591 1.67566 0.836676 1.42444 0.943526 1.21547ZM2.72235 2.125L12.6529 15.875H15.2777L5.3471 2.125H2.72235Z"
                        fill="currentColor"></path>
                </svg>
            ),
            target: './facebook',
        },
        {
            title: 'instegram',
            icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.943526 1.21547C1.05038 1.00649 1.2653 0.875 1.5 0.875H5.66667C5.86736 0.875 6.05584 0.971373 6.17334 1.13407L10.2867 6.82945L16.0581 1.05806C16.3021 0.813981 16.6979 0.813981 16.9419 1.05806C17.186 1.30214 17.186 1.69786 16.9419 1.94194L11.028 7.85589L17.0067 16.1341C17.1441 16.3243 17.1633 16.5756 17.0565 16.7845C16.9496 16.9935 16.7347 17.125 16.5 17.125H12.3333C12.1326 17.125 11.9442 17.0286 11.8267 16.8659L7.71333 11.1706L1.94194 16.9419C1.69787 17.186 1.30214 17.186 1.05806 16.9419C0.813983 16.6979 0.813983 16.3021 1.05806 16.0581L6.97201 10.1441L0.993328 1.86593C0.85591 1.67566 0.836676 1.42444 0.943526 1.21547ZM2.72235 2.125L12.6529 15.875H15.2777L5.3471 2.125H2.72235Z"
                        fill="currentColor"></path>
                </svg>
            ),
            target: './facebook',
        },
    ],
    groupLinks: [
        {
            title: 'Overview',
            links: [
                { href: '', label: 'about' },
                { href: '', label: 'Privacy and terms of use' },
                { href: '', label: 'News and events' },
                { href: '', label: 'News and events' },
            ],
        },
        {
            title: 'Important links',
            links: [
                { href: '', label: 'National service portal' },
                { href: '', label: 'Open government data' },
                { href: '', label: 'National strategy for data & Artificial intelligence' },
                { href: '', label: 'Open data portal' },
            ],
        },
        {
            title: 'Contact & support',
            links: [
                { href: '', label: 'Customer hub' },
                { href: '', label: 'Contact us' },
                { href: '', label: 'Engage with Us' },
                { href: '', label: 'Report corruption' },
                { href: '', label: 'Submit complaint' },
            ],
        },
    ],
    basicLinks: [
        { label: 'about', href: './about' },
        { label: 'sitemap', href: './about' },
        { label: 'sitemap2', href: './about' },
        { label: 'sitemap3', href: './about' },
        { label: 'sitemap4', href: './about' },
        { label: 'Mobile App', href: '/app' },
    ],
    extraLinks: [
        { href: '', label: 'Terms and conditions' },
        { href: '', label: 'Privacy Policy ' },
    ],
}

export const Default: Story = {
    args: {
        colors: 'default',
        showBasicLinks: true,
        showGroupLinks: true,
        socialMediaTitle: 'Social Media',
    },
    render: args => <Footer {...args} {...schema} />,
}
