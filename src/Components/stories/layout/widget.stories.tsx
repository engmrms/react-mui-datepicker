import type { Meta, StoryObj } from '@storybook/react'
import { Widgets } from 'google-material-icons/outlined'
import { WidgetConfig } from '../../../Models/widgetDTO'
import { Widget, WidgetActions, WidgetContent, WidgetHeader, WidgetTitle } from '../../Widget'

const baseConfig: WidgetConfig = {
    alias: 'widget-1',
    size: 'half',
    isVisible: true,
    isMandatory: false,
    isResizable: true,
    title: 'Widget Title',
    titleEn: 'Widget Title',
    isEditable: true,
}

interface StoryProps {
    config: WidgetConfig
    isEditMode: boolean
    size: 'half' | 'full'
    isResizable: boolean
    isMandatory: boolean
    isVisible: boolean
}

const meta = {
    title: 'Design System/Layout/Widget',
    component: Widget,
    parameters: {
        layout: 'fullscreen',
        controls: {
            include: ['isEditMode', 'size', 'isResizable', 'isMandatory', 'isVisible'],
            hideNoControlsWarning: true,
        },
    },
    tags: ['autodocs'],
    render: (args: StoryProps) => {
        const updatedConfig = {
            ...args.config,
            size: args.size,
            isResizable: args.isResizable,
            isMandatory: args.isMandatory,
            isVisible: args.isVisible,
        }

        return (
            <div className="flex flex-col gap-space-02 p-space-04">
                <h3 className="title-01 font-bold">Widget Demo</h3>
                <p className="text-body-02 text-foreground-secondary">
                    This demonstrates how the widget appears in different configurations. Toggle the controls below to see the changes.
                </p>
                <div className="grid grid-cols-2">
                    {args?.isVisible && (
                        <Widget config={updatedConfig} isEditMode={args.isEditMode}>
                            <WidgetHeader>
                                <WidgetTitle>
                                    <Widgets className="size-space-05" />
                                    Widget 1
                                </WidgetTitle>
                                <WidgetActions
                                    actions={[
                                        {
                                            rounded: 'default',
                                            label: 'Action',
                                            variant: 'outline',
                                            colors: 'gray',
                                            size: 'sm',
                                            onClick: () => console.log('Action clicked'),
                                        },
                                    ]}
                                />
                            </WidgetHeader>
                            <WidgetContent>
                                <div className="flex flex-col gap-space-02 p-space-03">
                                    <p>Simple widget content</p>
                                    <p className="text-body-01 text-card-foreground">Current size: {updatedConfig.size}</p>
                                    <p className="text-body-01 text-card-foreground">Edit mode: {args.isEditMode ? 'On' : 'Off'}</p>
                                    <p className="text-body-01 text-card-foreground">Resizable: {updatedConfig.isResizable ? 'Yes' : 'No'}</p>
                                    <p className="text-body-01 text-card-foreground">Mandatory: {updatedConfig.isMandatory ? 'Yes' : 'No'}</p>
                                </div>
                            </WidgetContent>
                        </Widget>
                    )}
                </div>
            </div>
        )
    },
    argTypes: {
        isEditMode: {
            control: 'boolean',
            description: 'Toggle edit mode for the widget',
        },
        size: {
            control: 'radio',
            options: ['half', 'full'],
            description: 'Size of the widget',
        },
        isResizable: {
            control: 'boolean',
            description: 'Whether the widget can be resized',
        },
        isMandatory: {
            control: 'boolean',
            description: 'Whether the widget is mandatory (cannot be removed)',
        },
        isVisible: {
            control: 'boolean',
            description: 'Whether the widget is visible',
        },
        config: {
            table: {
                disable: true,
            },
        },
        isDragging: {
            table: {
                disable: true,
            },
        },
        isOver: {
            table: {
                disable: true,
            },
        },
        isDragOverlay: {
            table: {
                disable: true,
            },
        },
        onConfigChange: {
            table: {
                disable: true,
            },
        },
        children: {
            table: {
                disable: true,
            },
        },
    },
} as Meta<StoryProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        config: baseConfig,
        isEditMode: false,
        size: 'half',
        isResizable: true,
        isMandatory: false,
        isVisible: true,
    },
}
