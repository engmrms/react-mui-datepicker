import { FontInfo, FontName, Sample } from './RowDetails'

export default function FixedFontSizes() {
    return (
        <div className="flex flex-col items-start overflow-hidden  pt-space-03  ">
            <div className="flex w-full flex-col items-start  divide-y divide-border rounded-1 border border-border p-0">
                <div className=" flex w-full flex-row  gap-0 divide-x divide-border  p-0">
                    <div className=" flex w-1/4 flex-row items-start gap-2   p-space-04">
                        <span className=" min-w-0 text-left text-subtitle-01 font-semibold">Token Name</span>
                    </div>
                    <div className=" flex w-1/4    flex-row items-start gap-2   p-space-04">
                        <span className=" text-left  text-subtitle-01 font-semibold">Font attributes</span>
                    </div>
                    <div className=" flex w-2/4   flex-row items-start gap-2   p-space-04">
                        <span className=" text-left  text-subtitle-01 font-semibold">Sample</span>
                    </div>
                </div>

                {/* caption-01  */}

                <div className="flex w-full flex-row  gap-0 divide-x  divide-border  p-0">
                    <FontName title="Caption-01" />
                    <div className="flex w-1/4 flex-col items-start gap-0   p-0">
                        <FontInfo fontSize={12} lineHeight={16} />
                    </div>
                    <div className="flex w-2/4 flex-col  gap-0   p-0">
                        <Sample className="text-[12px] leading-[16px]" />
                    </div>
                </div>

                {/* caption-02 */}

                <div className="flex w-full flex-row  gap-0 divide-x  divide-border  p-0">
                    <FontName title="Caption-02" />
                    <div className="flex w-1/4 flex-col items-start gap-0   p-0">
                        <FontInfo fontSize={10} lineHeight={14} />
                    </div>
                    <div className="flex w-2/4 flex-col  gap-0   p-0">
                        <Sample className="text-[10px] leading-[14px]" />
                    </div>
                </div>

                {/* body-01 */}

                <div className="flex w-full flex-row  gap-0 divide-x  divide-border  p-0">
                    <FontName title="Body-01" />
                    <div className="flex w-1/4 flex-col items-start gap-0   p-0">
                        <FontInfo fontSize={14} lineHeight={20} />
                    </div>
                    <div className="flex w-2/4 flex-col  gap-0   p-0">
                        <Sample className="text-[14px] leading-[20px]" />
                    </div>
                </div>

                {/* body-02 */}
                <div className="flex w-full flex-row  gap-0 divide-x divide-border  p-0">
                    <FontName title="Body-02" />
                    <div className="flex w-1/4 flex-col items-start gap-0   p-0">
                        <FontInfo fontSize={16} lineHeight={24} />
                    </div>
                    <div className="flex w-2/4 flex-col  gap-0   p-0">
                        <Sample className="text-[16px] leading-[24px]" />
                    </div>
                </div>

                {/* subtitle-01 */}
                <div className="flex w-full flex-row  gap-0 divide-x  divide-border  p-0">
                    <FontName title="Subtitle-01" />
                    <div className="flex w-1/4 flex-col items-start gap-0   p-0">
                        <FontInfo fontSize={18} lineHeight={28} />
                    </div>
                    <div className="flex w-2/4 flex-col  gap-0   p-0">
                        <Sample className="text-[18px] leading-[28px]" />
                    </div>
                </div>

                {/* subtitle-02 */}
                <div className="flex w-full flex-row gap-0 divide-x   divide-border p-0">
                    <FontName title="Subtitle-02" />
                    <div className="flex w-1/4 flex-col items-start gap-0 p-0">
                        <FontInfo fontSize={20} lineHeight={28} />
                    </div>
                    <div className="flex w-2/4 flex-col  gap-0 p-0">
                        <Sample className="text-[20px] leading-[28px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}
