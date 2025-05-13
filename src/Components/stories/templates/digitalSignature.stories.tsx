import type { Meta, StoryObj } from '@storybook/react'

import { DigitalSignature } from '../../DigitalSignature'

const meta: Meta<typeof DigitalSignature> = {
    title: 'Design System/Templates/Digital Signature',
    component: DigitalSignature,
    tags: ['autodocs'],

    parameters: {
        docs: {
            description: {
                component:
                    "<h4>The Digital Stamp Component is an interface element that ensures users are interacting with a verified and secure source, confirming the integrity and authenticity of government sites. It provides an encrypted digital stamp, reinforcing trust and transparency in the website's content.</h4>",
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof DigitalSignature>

export const Default: Story = {
    args: {
        extension: '.gov.sa',
        linkProps: {
            children: 20003000303,
            href: 'ds',
            underline: 'always',
            colors: 'primary',
        },
    },

    render: args => <DigitalSignature {...args} />,
}
