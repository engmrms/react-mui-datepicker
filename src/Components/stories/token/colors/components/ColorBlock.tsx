import { cn } from '../../../../../Lib/utils'

const ColorBlock = ({ color, value }: { color: string; value: string }) => {
    return (
        <div className="space-y-space-02 rounded-2 border p-space-02">
            <span className={cn(`block h-32 w-32 rounded-1`,color)}></span>
            <span className="block text-center">{value.split("-").pop()}</span>

        </div>
    )
}

export default ColorBlock
