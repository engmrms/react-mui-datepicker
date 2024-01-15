import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from '../../Components/ui/toast'
import { useToast } from '../../Components/ui/use-toast'
import accessibilityTools from '../../Stores/accessibilityTools'

export function Toaster() {
    const { toasts } = useToast()
    const isActive = accessibilityTools(state => state.isActive)

    return (
        <ToastProvider>
            {toasts.map(function ({ id, title, description, action, ...props }) {
                return (
                    <Toast key={id} {...props} className={`${isActive ? 'grayscale' : 'grayscale-0'}`}>
                        <ToastClose />
                        <span className="hidden sm:block !ml-0 !mr-0 h-20 self-center border border-border opacity-20" />
                        <div className="grid gap-1 flex-1">
                            {title && <ToastTitle>{title}</ToastTitle>}
                            {description && <ToastDescription>{description}</ToastDescription>}
                        </div>
                        {action}
                    </Toast>
                )
            })}
            <ToastViewport />
        </ToastProvider>
    )
}
