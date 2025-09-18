export default function Breakpoints() {
    return (
        <div className="  flex flex-col items-start gap-0 space-y-space-05 overflow-hidden p-0 pt-space-03">
            <h5 className="sb-unstyled w-full text-left text-subtitle-02 font-semibold">Breakpoints values</h5>
            <div className="flex w-full flex-col items-start gap-0 divide-y divide-border rounded-1 border border-border p-0 ">
                <div className="frame3466426 flex w-full flex-row items-start gap-0 divide-x divide-border p-0">
                    <div className="flex-1 p-space-04">
                        <span className=" text-left font-semibold">Token Name</span>
                    </div>
                    <div className="flex-1 p-space-04">
                        <span className=" text-left font-semibold">Value</span>
                    </div>
                    <div className="flex-1 p-space-04">
                        <span className=" text-left font-semibold">Screen size</span>
                    </div>
                </div>

                <Row values={['sm', '320px', 'Extra-small (phone)']} />
                <Row values={['md', '768px', 'Small (tablet)']} />
                <Row values={['lg', '1056px', 'Large (tablet)']} />
                <Row values={['xlg', '1312px', 'Medium (laptop)']} />
                <Row values={['2xlg', '1592px', 'Large (desktop)']} />
                <Row values={['3xlg', '1920px', 'XLarge (Large desktop)']} />
            </div>
            <h5 className="sb-unstyled w-full text-left text-subtitle-02 font-semibold">Grid system layout</h5>
            <div className="flex w-full flex-col items-start   divide-y divide-border rounded-1 border border-border">
                <div className=" flex w-full flex-row items-start   divide-x divide-border">
                    <div className="flex-1 p-space-04">
                        <span className=" text-left font-semibold">Token Name</span>
                    </div>
                    <div className="flex-1 p-space-04">
                        <span className=" text-left font-semibold">Number of columns</span>
                    </div>
                    <div className="flex-1 p-space-04">
                        <span className=" text-left font-semibold">Body</span>
                    </div>
                    <div className="flex-1 p-space-04">
                        <span className=" text-left font-semibold">Gutter</span>
                    </div>
                    <div className="flex-1 p-space-04">
                        <span className=" text-left font-semibold">Margin</span>
                    </div>
                </div>

                <Row values={['sm', '4 columns', 'Stretch', '16px', '16']} />
                <Row values={['md', '8 columns', 'Stretch', '16px', '32px']} />

                <Row values={['lg', '12 columns', 'Stretch', '24px', '32px']} />

                <Row values={['xlg', '12 columns', 'Stretch', '24px', '64px']} />

                <Row values={['2xlg', '12 columns', '1464px', '24px', 'stretch']} />
            </div>

            <h5 className="sb-unstyled w-full text-left text-subtitle-02 font-semibold">Grid system layout (Dashboard)</h5>
            <div className="flex w-full flex-col items-start gap-0 divide-y divide-border rounded-1 border border-border p-0">
                <div className="flex w-full flex-row items-start gap-0 divide-x divide-border p-0">
                    <div className="flex-1 p-space-04">
                        <span className="font-semibold">Token Name</span>
                    </div>
                    <div className="flex-1 p-space-04">
                        <span className="font-semibold">Number of columns</span>
                    </div>
                    <div className="flex-1 p-space-04">
                        <span className="font-semibold">Body</span>
                    </div>
                    <div className="flex-1 p-space-04">
                        <span className="font-semibold">Gutter</span>
                    </div>
                    <div className="flex-1 p-space-04">
                        <span className="font-semibold">Margin</span>
                    </div>
                </div>

                <Row values={['sm', '4 columns', 'stretch', '16px', '16']} />
                <Row values={['md', '8 columns', 'stretch', '16px', '32px']} />
                <Row values={['lg', '12 columns', 'stretch', '24px', '40px']} />
                <Row values={['xlg', '12 columns', 'stretch', '24px', '40px']} />
                <Row values={['2xlg', '12 columns', 'stretch', '24px', '40px']} />
                <Row values={['3xlg', '12 columns', '1640px', '24px', 'Stretch']} />
            </div>
        </div>
    )
}

const Row = ({ values }: { values: string[] }) => {
    return (
        <div className="flex w-full flex-row items-start divide-x divide-border">
            {values.map((value, index) => (
                <div key={index} className="flex-1 p-space-04">
                    <span className="text-left font-normal">{value}</span>
                </div>
            ))}
        </div>
    )
}
