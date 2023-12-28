import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from '../../Components/ui/toast'
import { useToast } from '../../Components/ui/use-toast'

export function Toaster() {
    const { toasts } = useToast()

    return (
        <ToastProvider>
            {toasts.map(function ({ id, title, description, action, ...props }) {
                return (
                    <Toast key={id} {...props}>
                        <ToastClose />
                        <span className="block !ml-0 !mr-0 h-20 self-center border border-border opacity-20" />
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
