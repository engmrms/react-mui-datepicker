import { cn } from '../Lib'
import accessibilityTools from '../Stores/accessibilityTools'

export const PageLoader = () => {
    const isActive = accessibilityTools(state => state.isActive)

    return (
        <div
            className={cn({
                'fixed  left-0 top-0 z-[1000] flex h-full w-full items-center justify-center opacity-70': true,
                grayscale: isActive,
                'grayscale-0': !isActive,
            })}>
            <div className="z-[1001] block h-60 w-60 animate-spin rounded-[50%] border-[3px] border-solid border-[transparent] border-t-green-800 before:absolute before:bottom-2 before:left-2 before:right-2 before:top-2 before:animate-spin before:rounded-[50%] before:border-[3px] before:border-solid before:border-[transparent] before:border-t-slate-800 after:absolute after:bottom-6 after:left-6 after:right-6 after:top-6 after:animate-spin after:rounded-[50%] after:border-[3px] after:border-solid after:border-[transparent] after:border-t-orange-600" />
        </div>
    )
}
