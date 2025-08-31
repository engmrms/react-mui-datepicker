import { CheckCircle, ErrorOutline, Info, WarningAmber } from 'google-material-icons/outlined'
import { Toast, ToastClose, ToastDescription, ToastIcon, ToastProps, ToastProvider, ToastTitle, ToastViewport } from '../../Components/ui/toast'
import { useToast } from '../../Components/ui/use-toast'
import accessibilityTools from '../../Stores/accessibilityTools'

const IconMap = {
    destructive: <WarningAmber />,
    success: <CheckCircle />,
    default: <Info />,
    info: <Info />,
    warning: <ErrorOutline />,
}

export function Toaster({ position = 'bottom' }: { position?: ToastProps['position'] }) {
    const { toasts } = useToast()
    const isActive = accessibilityTools(state => state.isActive)
    const usedPositions = Array.from(new Set(toasts.map(toast => toast.position || position)))

    return (
        <ToastProvider>
            {toasts.map(function ({ id, title, description, action, position: toastPosition, ...props }) {
                const finalPosition = toastPosition || position
                return (
                    <Toast key={id} {...props} className={`${isActive ? 'grayscale' : 'grayscale-0'}`} position={finalPosition}>
                        <div className="flex grow flex-col justify-between gap-space-04">
                            <div className="flex w-full gap-space-03">
                                <ToastIcon icon={props.variant && IconMap[props.variant]} />
                                <div className="grid flex-1 items-center gap-space-01">
                                    {title && <ToastTitle>{title}</ToastTitle>}
                                    {description && <ToastDescription>{description}</ToastDescription>}
                                </div>
                                <ToastClose />
                            </div>
                            {action && <div className="mx-space-07">{action}</div>}
                        </div>
                    </Toast>
                )
            })}
            {usedPositions.map(pos => (
                <ToastViewport key={pos} position={pos} />
            ))}
        </ToastProvider>
    )
}
