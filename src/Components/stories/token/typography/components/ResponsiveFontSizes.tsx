import { FontInfo, FontName, Sample } from './RowDetails'

export default function ResponsiveFontSizes() {
    return (
        <div className="  flex flex-col items-start gap-0 overflow-hidden  pt-space-03">
            <div className="flex w-full flex-col items-start gap-0 divide-y divide-border rounded-1 border border-border p-0">
                <div className=" flex w-full flex-row  gap-0 divide-x divide-border p-0">
                    <div className=" flex w-1/4 flex-row items-start gap-2  p-space-04">
                        <span className=" min-w-0 text-left text-subtitle-01 font-semibold">Token Name</span>
                    </div>
                    <div className=" flex w-1/4    flex-row items-start gap-2   p-space-04">
                        <span className=" text-left  text-subtitle-01 font-semibold">Font attributes</span>
                    </div>
                    <div className=" flex w-2/4   flex-row items-start gap-2  p-space-04">
                        <span className=" text-left  text-subtitle-01 font-semibold">Sample</span>
                    </div>
                </div>

                {/* title-01 */}
                <div className="flex w-full flex-row  gap-0 divide-x divide-border p-0">
                    <FontName title="Title-01" />
                    <div className="flex w-1/4 flex-col items-start gap-0  divide-y divide-border p-0">
                        <FontInfo fontSize={22} lineHeight={32} size="sm" />
                        <FontInfo fontSize={22} lineHeight={32} size="md" />
                        <FontInfo fontSize={24} lineHeight={32} size="xl" />
                        <FontInfo fontSize={24} lineHeight={32} size="2xl" />
                    </div>
                    <div className="flex w-2/4 flex-col  gap-0 divide-y divide-border p-0">
                        <Sample className="text-[22px] leading-[32px]" />
                        <Sample className="text-[22px] leading-[32px]" />
                        <Sample className="text-[24px] leading-[32px]" />
                        <Sample className="text-[24px] leading-[32px]" />
                    </div>
                </div>

                {/* title-02 */}
                <div className="flex w-full flex-row  gap-0 divide-x divide-border p-0">
                    <FontName title="Title-02" />
                    <div className="flex w-1/4 flex-col items-start gap-0   divide-y divide-border p-0">
                        <FontInfo fontSize={24} lineHeight={32} size="sm" />
                        <FontInfo fontSize={24} lineHeight={32} size="md" />
                        <FontInfo fontSize={30} lineHeight={38} size="xl" />
                        <FontInfo fontSize={30} lineHeight={38} size="2xl" />
                    </div>
                    <div className="flex w-2/4 flex-col  gap-0  divide-y divide-border p-0">
                        <Sample className="text-[24px] leading-[32px]" />
                        <Sample className="text-[24px] leading-[32px]" />
                        <Sample className="text-[30px] leading-[38px]" />
                        <Sample className="text-[30px] leading-[38px]" />
                    </div>
                </div>

                {/* title-03 */}
                <div className="flex w-full flex-row  gap-0 divide-x divide-border p-0">
                    <FontName title="Title-03" />
                    <div className="flex w-1/4 flex-col items-start gap-0  divide-y divide-border p-0">
                        <FontInfo fontSize={28} lineHeight={38} size="sm" />
                        <FontInfo fontSize={30} lineHeight={38} size="md" />
                        <FontInfo fontSize={36} lineHeight={44} size="xl" />
                        <FontInfo fontSize={36} lineHeight={44} size="2xl" />
                    </div>
                    <div className="flex w-2/4 flex-col  gap-0  divide-y divide-border p-0">
                        <Sample className="text-[28px] leading-[38px]" />
                        <Sample className="text-[30px] leading-[38px]" />
                        <Sample className="text-[36px] leading-[44px]" />
                        <Sample className="text-[36px] leading-[44px]" />
                    </div>
                </div>

                {/* display-01 */}
                <div className="flex w-full flex-row  gap-0 divide-x divide-border p-0">
                    <FontName title="Display-01" />
                    <div className="flex w-1/4 flex-col items-start gap-0  divide-y divide-border p-0">
                        <FontInfo fontSize={32} lineHeight={40} size="sm" />
                        <FontInfo fontSize={32} lineHeight={40} size="md" />
                        <FontInfo fontSize={48} lineHeight={60} size="xl" />
                        <FontInfo fontSize={48} lineHeight={60} size="2xl" />
                    </div>
                    <div className="flex w-2/4 flex-col  gap-0  divide-y divide-border p-0">
                        <Sample className="text-[32px] leading-[40px]" />
                        <Sample className="text-[32px] leading-[40px]" />
                        <Sample className="text-[48px] leading-[60px]" />
                        <Sample className="text-[48px] leading-[60px]" />
                    </div>
                </div>

                {/* display-02 */}
                <div className="flex w-full flex-row  gap-0 divide-x divide-border p-0">
                    <FontName title="Display-02" />
                    <div className="flex w-1/4 flex-col items-start gap-0  divide-y divide-border p-0">
                        <FontInfo fontSize={30} lineHeight={60} size="sm" />
                        <FontInfo fontSize={36} lineHeight={44} size="md" />
                        <FontInfo fontSize={48} lineHeight={60} size="xl" />
                        <FontInfo fontSize={60} lineHeight={72} size="2xl" />
                    </div>
                    <div className="flex w-2/4 flex-col  gap-0  divide-y divide-border p-0">
                        <Sample className="text-[30px] leading-[60px]" />
                        <Sample className="text-[36px] leading-[36px]" />
                        <Sample className="text-[48px] leading-[60px]" />
                        <Sample className="text-[60px] leading-[72px]" />
                    </div>
                </div>

                {/* display-03 */}
                <div className="flex w-full flex-row  gap-0 divide-x divide-border p-0">
                    <FontName title="Display-03" />
                    <div className="flex w-1/4 flex-col items-start gap-0  divide-y divide-border p-0">
                        <FontInfo fontSize={36} lineHeight={44} size="sm" />
                        <FontInfo fontSize={48} lineHeight={60} size="md" />
                        <FontInfo fontSize={60} lineHeight={90} size="xl" />
                        <FontInfo fontSize={72} lineHeight={90} size="2xl" />
                    </div>
                    <div className="flex w-2/4 flex-col  gap-0  divide-y divide-border p-0">
                        <Sample className="text-[36px] leading-[44px]" />
                        <Sample className="text-[48px] leading-[60px]" />
                        <Sample className="text-[60px] leading-[90px]" />
                        <Sample className="text-[72px] leading-[90px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}
