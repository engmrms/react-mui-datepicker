import { ShouldRender, Stack, cn } from '../../../../..'

const FontInfo = ({ fontSize, lineHeight, size }: { fontSize: number; lineHeight: number; size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' }) => {
    return (
        <Stack
            direction="col"
            gap={1}
            justifyContent={'center'}
            alignItems={'start'}
            className="sb-unstyled w-full  p-space-04 text-left text-body-02">
            <ShouldRender shouldRender={!!size}>
                <span className="font-semibold leading-9 text-info">{size} screen size</span>
            </ShouldRender>
            <span>
                Font Size : {fontSize}px/{fontSize / 10}rem
            </span>
            <span>
                Line Height: {lineHeight}px/{lineHeight / 10}rem
            </span>
        </Stack>
    )
}

const Sample = ({ className }: { className: string }) => {
    return (
        <Stack direction="col" gap={1} justifyContent={'center'} alignItems={'end'} className="min-h-space-11  flex-1  p-space-04">
            <span className={cn('sb-unstyled', className)}>يحيا التصميم</span>
        </Stack>
    )
}

const FontName = ({ title }: { title: string }) => {
    return (
        <Stack gap={1} className="w-1/4     p-space-04">
            <span className="sb-unstyled flex-1 text-left  text-body-02 font-semibold ">{title}</span>
        </Stack>
    )
}

export { FontInfo, FontName, Sample }
