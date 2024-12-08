export type WidgetSize = 'half' | 'full'

export interface WidgetConfig {
    alias: string
    title: string
    titleEn: string
    description?: string
    descriptionEn?: string
    srcImage?: string
    srcImageEn?: string
    size: WidgetSize
    isVisible: boolean
    isEditable: boolean
    isMandatory: boolean
    isResizable: boolean
    containerValue?: string
}

export interface WidgetProps extends React.HTMLAttributes<HTMLDivElement> {
    config: WidgetConfig
    isEditMode: boolean
    onConfigChange?: (changes: Partial<WidgetConfig>) => void
    isDragOverlay?: boolean
    isOver?: boolean
    isDragging?: boolean
}

export type WidgetBaseProps = Pick<WidgetProps, 'config' | 'isEditMode' | 'onConfigChange' | 'isDragOverlay' | 'isOver' | 'isDragging'>
