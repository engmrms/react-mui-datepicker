import { ShouldRender, Stack, cn } from '../../../../../'

const RowDetails = ({ name, value, sample }: { name: string; value: number | string; sample: string }) => {
    return (
        <Stack gap={'none'} className="   w-full  divide-x divide-border ">
            <div className="sb-unstyled flex-1 p-space-04 text-body-02 font-semibold">{name}</div>
            <div className="flex-1 p-space-04">
                <ShouldRender shouldRender={typeof value === 'number'}>
                    <span>{value}</span>
                    <span>px/</span>
                    <span>{+value / 10}rem</span>
                </ShouldRender>
                <ShouldRender shouldRender={typeof value === 'string'}>
                    <span>{value}</span>
                </ShouldRender>
            </div>
            <div className="flex-1  p-space-04">
                <div className={cn(` bg-lavender-100`, sample)} />
            </div>
        </Stack>
    )
}

export default RowDetails
