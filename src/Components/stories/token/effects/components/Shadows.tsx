const boxShadow = {
    'shadow-01': '0px 10px 16px 0px rgba(38, 36, 36, 0.04), 0px 1px 0px 0px rgba(5, 6, 12, 0.02), 0px 0px 8px 0px rgba(5, 6, 12, 0.02)',
    'shadow-03': '0px 10px 16px 0px rgba(38, 36, 36, 0.04), 0px 1px 0px 0px rgba(5, 6, 12, 0.02), 0px 0px 8px 0px rgba(5, 6, 12, 0.02)',
    'shadow-xs': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    'shadow-sm': '0px 1px 3px 0px rgba(16, 24, 40, 0.05), 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    'shadow-md': '0px 4px 8px -2px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
    'shadow-lg': '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
    'shadow-xl': ' 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
    'shadow-2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
    'shadow-3xl': ' 0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
}
export default function Shadows() {
    return (
        <div className=" flex flex-col  gap-0 space-y-space-08 overflow-hidden   p-0">
            <div className="flex w-full flex-col  space-y-space-07 ">
                <div className="  flex w-full flex-col  gap-0 p-0">
                    <div className="  flex w-full flex-row  gap-0 p-0">
                        <div className="cell flex  min-w-0 flex-1 flex-row items-start gap-2 border border-border p-space-04">
                            <span className=" text-left  text-2xl font-semibold leading-9 ">Token Name</span>
                        </div>
                        <div className="cell flex  min-w-0 flex-1 flex-row items-start gap-2 border border-border p-space-04">
                            <span className="primitiveValue text-left  text-2xl font-semibold leading-9 ">Primitive value</span>
                        </div>
                        <div className="cell flex  min-w-0 flex-1 flex-row items-start gap-2 border border-border p-space-04">
                            <span className="  text-left  text-2xl font-semibold leading-9 ">Usage </span>
                        </div>
                        <div className="cell flex  min-w-0 flex-1 flex-row items-start gap-2 border border-border p-space-04">
                            <span className="  text-left  text-2xl font-semibold leading-9 ">Sample</span>
                        </div>
                    </div>

                    {Object.entries(boxShadow).map(([shadow, value]) => (
                        <ShadowBox key={shadow} tokenName={shadow} primitiveValue={value} usage="for cards on background" shadowClass={shadow} />
                    ))}
                </div>
            </div>
        </div>
    )
}

interface ShadowBoxProps {
    tokenName: string
    primitiveValue: string
    usage: string
    shadowClass: string
}

const ShadowBox = ({ tokenName, primitiveValue, usage, shadowClass }: ShadowBoxProps) => {
    return (
        <div className="  flex w-full flex-row  gap-0 p-0">
            <div className="cell flex  min-w-0 flex-1 flex-row items-center gap-2 border border-border p-space-04">
                <span className="shadow03  min-w-0 flex-1 text-left  text-2xl font-normal leading-8 ">{tokenName}</span>
            </div>
            <div className="cell flex  min-w-0 flex-1 flex-row items-center gap-0 border border-border p-space-04">
                <span className="min-w-0 flex-1 text-left  text-2xl font-normal leading-8 ">{primitiveValue}</span>
            </div>
            <div className="cell flex  min-w-0 flex-1 flex-row items-center gap-0 border border-border p-space-04">
                <span className="forCardsOnBackground  min-w-0 flex-1 text-left  text-2xl font-normal leading-8 ">{usage}</span>
            </div>
            <div className="cell flex  min-w-0 flex-1 flex-row items-center gap-2 border border-border p-space-04">
                <div className={`${shadowClass} relative h-space-12 w-space-12 overflow-hidden rounded-3xl bg-white p-0`} />
            </div>
        </div>
    )
}
