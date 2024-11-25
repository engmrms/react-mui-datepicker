import {
    DndContext,
    DragOverEvent,
    DragOverlay,
    DragStartEvent,
    MouseSensor,
    TouchSensor,
    UniqueIdentifier,
    closestCenter,
    useSensor,
    useSensors,
    type DragEndEvent,
} from '@dnd-kit/core'
import { SortableContext, arrayMove, useSortable } from '@dnd-kit/sortable'
import { AddBox, Close, DashboardCustomize, Refresh } from 'google-material-icons/outlined'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../Lib/utils'
import { strings } from '../Locales'
import { WidgetBaseProps, WidgetConfig, WidgetSize } from '../Models/widgetDTO'
import { Button } from './ui/button'
import { Stack } from './ui/Layout'
import { Separator } from './ui/separator'

interface DraggableGridProps {
    configs: WidgetConfig[]
    isEditMode: boolean
    componentMap: Record<string, React.ComponentType<WidgetBaseProps>>
    onConfigChange: (changes: Partial<WidgetConfig>) => void
    onOrderChange: (newConfigs: WidgetConfig[]) => void
    onSave?: () => void
    onCancel?: () => void
    onReset?: () => void
    onAdd?: () => void
}

export function DraggableGrid({
    configs,
    isEditMode,
    componentMap,
    onConfigChange,
    onOrderChange,
    onSave,
    onCancel,
    onReset,
    onAdd,
}: DraggableGridProps) {
    const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null)
    const [overId, setOverId] = useState<UniqueIdentifier | null>(null)
    const mouseSensor = useSensor(MouseSensor, {
        activationConstraint: {
            distance: 5,
        },
    })
    const touchSensor = useSensor(TouchSensor, {
        activationConstraint: {
            delay: 100,
            tolerance: 5,
        },
    })
    const sensors = useSensors(mouseSensor, touchSensor)
    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id)
    }
    const handleDragOver = (event: DragOverEvent) => {
        const { over } = event
        setOverId(over ? over.id : null)
    }
    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event
        setActiveId(null)
        setOverId(null)
        if (!over || active.id === over.id) return
        // Check if we're dropping on a placeholder
        if (over.id.toString().startsWith('placeholder-')) {
            // Get the index from the placeholder ID
            const placeholderIndex = parseInt(over.id.toString().split('-')[1])
            const activeWidget = configs.find(config => config.alias === active.id)
            if (activeWidget && activeWidget.size === 'half') {
                const oldIndex = configs.findIndex(config => config.alias === active.id)
                const newConfigs = [...configs]
                newConfigs.splice(placeholderIndex + 1, 0, ...newConfigs.splice(oldIndex, 1))
                onOrderChange(newConfigs)
            }
            return
        }
        const oldIndex = configs.findIndex(config => config.alias === active.id)
        const newIndex = configs.findIndex(config => config.alias === over.id)
        const newConfigs = arrayMove(configs, oldIndex, newIndex)
        onOrderChange(newConfigs)
    }
    const visibleConfigs = configs.filter(config => config?.isVisible)
    const placeholderIds = Array(visibleConfigs.length)
        .fill(0)
        .map((_, i) => `placeholder-${i}`)
    return (
        <>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragOver={handleDragOver}>
                <SortableContext items={[...configs.map(config => config.alias), ...placeholderIds]}>
                    <div className="grid gap-space-05 sm:grid-cols-2">
                        {(() => {
                            let usedColumns = 0
                            const gridElements = []
                            const draggedWidget = configs.find(c => c.alias === activeId)
                            for (let i = 0; i < visibleConfigs.length; i++) {
                                const currentWidget = visibleConfigs[i]
                                const Component = componentMap[currentWidget.alias]
                                gridElements.push(
                                    <Component
                                        key={currentWidget.alias}
                                        config={currentWidget}
                                        isEditMode={isEditMode}
                                        onConfigChange={onConfigChange}
                                        isOver={currentWidget.alias === overId}
                                        isDragging={currentWidget.alias === activeId}
                                    />,
                                )
                                const widgetWidth = currentWidget.size === 'full' ? 2 : 1
                                usedColumns += widgetWidth
                                if (isEditMode && currentWidget.size === 'half' && usedColumns % 2 === 1) {
                                    const nextWidget = visibleConfigs[i + 1]
                                    if (!nextWidget || nextWidget.size === 'full') {
                                        const placeholderId = `placeholder-${i}`
                                        gridElements.push(
                                            <Placeholder
                                                key={placeholderId}
                                                id={placeholderId}
                                                isEditMode={isEditMode}
                                                activeId={activeId}
                                                overId={overId}
                                                draggedWidgetSize={draggedWidget?.size}
                                            />,
                                        )
                                        usedColumns += 1
                                    }
                                }
                            }
                            return gridElements
                        })()}
                    </div>
                </SortableContext>
                <DragOverlay>
                    {activeId &&
                        (() => {
                            const config = configs.find(c => c.alias === activeId)
                            if (!config) return null
                            const Component = componentMap[config.alias]
                            return (
                                <Component
                                    config={config}
                                    isEditMode={isEditMode}
                                    onConfigChange={onConfigChange}
                                    isDragOverlay
                                    isOver={config.alias === overId}
                                    isDragging={config.alias === activeId}
                                />
                            )
                        })()}
                </DragOverlay>
            </DndContext>
            {createPortal(
                <div
                    className={`fixed bottom-4 left-0 right-0 flex justify-center transition-all duration-300 ${
                        isEditMode ? 'z-[50000] opacity-100' : 'pointer-events-none opacity-0'
                    }`}>
                    <div
                        className={`flex transform items-center gap-space-04 rounded-full border bg-background-brand p-space-02 shadow-01 transition-all duration-300 ${
                            isEditMode ? 'translate-y-[-10px]' : 'translate-y-full'
                        }`}>
                        <Stack gap={4} alignItems="center">
                            <Button variant="outline" colors="gray" size="icon-sm" onClick={onCancel}>
                                <Close className="size-space-05" />
                            </Button>
                            <Button variant="outline" colors="gray" size="icon-sm" onClick={onReset}>
                                <Refresh className="size-space-05" />
                            </Button>
                            <Separator orientation="vertical" className="h-space-07" />
                        </Stack>
                        <Button variant="outline" colors="primary" size="icon-sm" className="xl:hidden" onClick={onAdd}>
                            <AddBox className="size-space-05" />
                        </Button>
                        <Button variant="default" onClick={onSave} size="sm" colors="primary" className="gap-space-02">
                            <DashboardCustomize className="size-space-05" />
                            {strings.DragAndDrop.SaveCustomization}
                        </Button>
                    </div>
                </div>,
                document.body,
            )}
        </>
    )
}
interface PlaceholderProps {
    id: string
    isEditMode: boolean
    activeId: UniqueIdentifier | null
    overId: UniqueIdentifier | null
    draggedWidgetSize?: WidgetSize
}
const Placeholder = ({ id, isEditMode, activeId, overId, draggedWidgetSize }: PlaceholderProps) => {
    const canAcceptWidget = draggedWidgetSize === 'half'
    const { attributes, listeners, isOver, setNodeRef } = useSortable({
        id,
        disabled: !isEditMode || !canAcceptWidget,
    })
    const showHighlight = isOver || overId === id
    return (
        <div
            ref={setNodeRef}
            {...(canAcceptWidget ? attributes : {})}
            {...(canAcceptWidget ? listeners : {})}
            className={cn(
                'h-[440px] rounded-3 border-2 border-dashed transition-all duration-200',
                showHighlight ? 'border-primary' : 'border-border',
                !canAcceptWidget && activeId ? 'cursor-not-allowed' : 'cursor-default',
            )}
        />
    )
}
