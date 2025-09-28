import RowDetails from './RowDetails'

const Spacing = () => {
    return (
        <div className=" flex flex-col   overflow-hidden  pt-space-03">
            <div className="  flex w-full flex-col  gap-0 divide-y divide-border rounded-1 border  p-0">
                <div className=" flex w-full flex-row  gap-0 divide-x divide-border p-0">
                    <div className=" w-1/3     p-space-04 ">
                        <span className="font-semibold ">Token Name</span>
                    </div>
                    <div className="  w-1/3     p-space-04 ">
                        <span className="font-semibold ">Primitive value</span>
                    </div>
                    <div className=" w-1/3     p-space-04 ">
                        <span className="font-semibold ">Sample</span>
                    </div>
                </div>

                <RowDetails name="Spacing-01" value={4} sample="size-space-01" />
                <RowDetails name="Spacing-02" value={8} sample="size-space-02" />
                <RowDetails name="Spacing-03" value={12} sample="size-space-03" />
                <RowDetails name="Spacing-04" value={16} sample="size-space-04" />
                <RowDetails name="Spacing-05" value={24} sample="size-space-05" />
                <RowDetails name="Spacing-06" value={32} sample="size-space-06" />
                <RowDetails name="Spacing-07" value={40} sample="size-space-07" />
                <RowDetails name="Spacing-08" value={48} sample="size-space-08" />
                <RowDetails name="Spacing-09" value={64} sample="size-space-09" />
                <RowDetails name="Spacing-10" value={80} sample="size-space-10" />
                <RowDetails name="Spacing-11" value={96} sample="size-space-11" />
                <RowDetails name="Spacing-12" value={160} sample="size-space-12" />
            </div>
        </div>
    )
}

export default Spacing
