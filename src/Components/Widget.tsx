/* eslint-disable react/prop-types */
import { useSortable } from '@dnd-kit/sortable'
import { cva, type VariantProps } from 'class-variance-authority'
import { Cancel, DragIndicator } from 'google-material-icons/outlined'
import { MoreHorizontal } from 'lucide-react'
import * as React from 'react'
import { cn } from '../Lib/utils'
import { strings } from '../Locales'
import { WidgetProps, WidgetSize } from '../Models/widgetDTO'
import { ComboboxControlNoForm } from './Combobox'
import { Button, ButtonProps } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Stack } from './ui/Layout'
const widgetContentVariants = cva('flex gap-space-04 flex-grow', {
    variants: {
        direction: {
            col: 'flex-col',
            row: 'flex-row',
        },
    },
    defaultVariants: {
        direction: 'col',
    },
})

const Widget = React.forwardRef<HTMLDivElement, WidgetProps>(
    ({ className, onConfigChange, isDragOverlay, isEditMode, config, isOver, children, ...props }, ref) => {
        const [isInteractingWithButtons, setIsInteractingWithButtons] = React.useState(false)
        const { attributes, listeners, setNodeRef, isDragging, transform, transition } = useSortable({
            id: config.alias,
            disabled: !isEditMode || isInteractingWithButtons,
        })
        const style: React.CSSProperties = {
            transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
            transition,
        }
        return (
            <div
                ref={setNodeRef}
                {...attributes}
                {...(isEditMode && !isDragOverlay ? listeners : {})}
                className={cn(
                    'cursor-auto rounded-3 border-2 transition-all duration-200',
                    isEditMode &&
                        !isDragOverlay && ['border-dashed', isOver ? 'border-2 border-primary' : 'border-border', isDragging && 'opacity-50'],
                    isDragOverlay && ['border border-solid border-primary'],
                    !isEditMode && 'border-transparent',
                    config.size === 'full' ? 'sm:col-span-2' : 'sm:col-span-1',
                    isEditMode && 'cursor-move',
                )}>
                <div
                    style={style}
                    className={cn(
                        'rounded-3 bg-background shadow-card-shadow transition-all duration-200',
                        isDragging && 'invisible',
                        isEditMode && 'hover:shadow-card-hover-02',
                    )}>
                    <div className="flex flex-col">
                        {isEditMode && (
                            <WidgetEditMode
                                isResizable={config.isResizable}
                                isMandatory={config.isMandatory}
                                size={config.size}
                                onSizeChange={value => onConfigChange?.({ alias: config.alias, size: value })}
                                onDelete={() => {
                                    onConfigChange?.({ alias: config.alias, isVisible: false })
                                }}
                                onButtonHover={setIsInteractingWithButtons}
                            />
                        )}
                        <div
                            ref={ref}
                            className={cn(
                                'flex h-[380px] flex-col gap-space-04 rounded-3 border border-border-secondary bg-card p-space-04 transition-all duration-200',
                                { 'pointer-events-none': isEditMode },
                                className,
                            )}
                            {...props}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        )
    },
)
Widget.displayName = 'Widget'
// Widget Header Component
const WidgetHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center justify-between bg-card', className)} {...props} />
))
WidgetHeader.displayName = 'WidgetHeader'
// Widget Title Component
const WidgetTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, children, ...props }, ref) => (
    <h3 ref={ref} className={cn('flex items-center gap-space-02 text-subtitle-01 font-bold text-card-foreground', className)} {...props}>
        {children}
    </h3>
))
WidgetTitle.displayName = 'WidgetTitle'
// Types for action items
interface WidgetActionItem extends Partial<ButtonProps> {
    label: string
    icon?: React.ReactNode
    onClick: () => void
    'data-testid'?: string
}
interface WidgetActionsProps extends React.HTMLAttributes<HTMLDivElement> {
    actions: WidgetActionItem[]
}
const WidgetActions = ({ actions }: WidgetActionsProps) => {
    if (actions.length === 1) {
        const { label, icon, onClick, 'data-testid': dataTestId, ...buttonProps } = actions[0]
        return (
            <Button
                onClick={onClick}
                variant={buttonProps.variant}
                data-testid={dataTestId}
                size={buttonProps.size}
                {...buttonProps}
                className={cn(buttonProps.className)}>
                {icon}
                {label}
            </Button>
        )
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-5 w-5" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[232px]">
                {actions.map(action => {
                    const { label, icon, 'data-testid': dataTestId, onClick } = action
                    return (
                        <DropdownMenuItem key={action?.label} onClick={onClick} className="cursor-pointer" data-testid={dataTestId}>
                            {icon && <span className="mr-2">{icon}</span>}
                            {label}
                        </DropdownMenuItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
WidgetActions.displayName = 'WidgetActions'
const WidgetContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof widgetContentVariants>>(
    ({ className, direction, ...props }, ref) => (
        <div ref={ref} className={cn(widgetContentVariants({ direction }), 'overflow-hidden', className)} {...props} />
    ),
)
WidgetContent.displayName = 'WidgetContent'

interface WidgetEditModeProps extends React.HTMLAttributes<HTMLDivElement> {
    onSizeChange?: (value: WidgetSize) => void
    onDelete?: () => void
    size?: WidgetSize
    isMandatory: boolean
    onButtonHover?: (isHovering: boolean) => void
    isResizable: boolean
}

const useHoverEvents = (onHover: (isHovering: boolean) => void) => {
    return {
        onMouseEnter: () => onHover(true),
        onMouseLeave: () => onHover(false),
        onTouchStart: () => onHover(true),
        onTouchEnd: () => {
            setTimeout(() => onHover(false), 100)
        },
    }
}

const WidgetEditMode = React.forwardRef<HTMLDivElement, WidgetEditModeProps>(
    ({ onSizeChange, isMandatory, isResizable, onDelete, size, className, onButtonHover, ...props }, ref) => {
        const hoverEvents = useHoverEvents(onButtonHover ?? (() => {}))
        return (
            <div
                ref={ref}
                className={cn(
                    'relative z-50 flex min-h-space-09 items-center justify-between gap-space-01 rounded-3 bg-background p-space-02',
                    className,
                )}
                {...props}>
                <DragIndicator className="size-[18px]" />
                <Stack gap={2} alignItems={'center'}>
                    {isResizable && (
                        <div {...hoverEvents}>
                            <ComboboxControlNoForm
                                className="hidden sm:flex"
                                rounded="default"
                                size={'sm'}
                                options={[
                                    { Name: strings.DragAndDrop.Half, Value: 'half' },
                                    { Name: strings.DragAndDrop.Full, Value: 'full' },
                                ]}
                                optionLabel={'Name'}
                                optionValue="Value"
                                placeholder={strings.DragAndDrop.Width}
                                onChange={value => {
                                    if (!onSizeChange) return
                                    onSizeChange(value as WidgetSize)
                                }}
                                value={size ?? ''}
                            />
                        </div>
                    )}
                    {!isMandatory && (
                        <div {...hoverEvents}>
                            <Button variant="outline" size="sm" onClick={onDelete} className="gap-space-01" rounded="default">
                                <Cancel className="size-[20px]" />
                                {strings.DragAndDrop.Delete}
                            </Button>
                        </div>
                    )}
                </Stack>
            </div>
        )
    },
)
WidgetEditMode.displayName = 'WidgetEditMode'
export { Widget, WidgetActions, WidgetContent, WidgetHeader, WidgetTitle, type WidgetActionItem }
