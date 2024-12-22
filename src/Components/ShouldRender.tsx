import { FC, ReactNode } from 'react'

type ShouldRenderProps = {
    children: ReactNode
    shouldRender?: boolean
    other?: ReactNode
}

export const ShouldRender: FC<ShouldRenderProps> = ({ other, children, shouldRender }) => {
    return shouldRender ? children : other ?? null
}
export default ShouldRender
