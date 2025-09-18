import RowDetails from './RowDetails'

export default function BorderRadius() {
    return (
        <div className=" flex flex-col pt-space-03">
            <div className="flex w-full flex-col  space-y-space-07 ">
                <div className="  flex w-full flex-col  gap-0 divide-y divide-border rounded-1 border border-border p-0">
                    <div className="flex w-full flex-row gap-0 divide-x divide-border p-0">
                        <div className="flex-1 p-space-04">
                            <span className=" font-semibold ">Token Name</span>
                        </div>
                        <div className="flex-1 p-space-04">
                            <span className=" font-semibold ">Primitive value</span>
                        </div>
                        <div className="flex-1 p-space-04">
                            <span className="font-semibold">Sample</span>
                        </div>
                    </div>

                    <RowDetails name="Rounded" value={4} sample="rounded size-space-12" />
                    <RowDetails name="Rounded-1" value={8} sample="rounded-1 size-space-12" />
                    <RowDetails name="Rounded-2" value={12} sample="rounded-2 size-space-12" />
                    <RowDetails name="Rounded-3" value={16} sample="rounded-3 size-space-12" />
                    <RowDetails name="Rounded-4" value={24} sample="rounded-4 size-space-12" />
                    <RowDetails name="Rounded-5" value={32} sample="rounded-5 size-space-12" />
                    <RowDetails name="Rounded-6" value={40} sample="rounded-6 size-space-12 " />
                    <RowDetails name="Rounded-7" value={48} sample="rounded-7 size-space-12" />
                    <RowDetails name="Rounded-8" value={64} sample="rounded-8 size-space-12" />
                    <RowDetails name="Rounded-Full" value={'Full radius'} sample="rounded-full size-space-12" />
                </div>
            </div>
        </div>
    )
}
