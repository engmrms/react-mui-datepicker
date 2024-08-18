import { ColumnsTypes } from './Grid'

export function toGridColumnSpan(span: number | null | undefined): string | null {
    return span !== null ? `col-span-${span}` : null
}

export function processColumns(columns: ColumnsTypes): string | null | undefined {
    let gridColumn

    if (typeof columns === 'number') {
        gridColumn = toGridColumnSpan(columns)
    } else if (typeof columns === 'object' && columns !== null) {
        gridColumn = Object.entries(columns)
            .map(([key, value]) => {
                const gridColumnClass = toGridColumnSpan(value)
                return gridColumnClass ? (key === 'base' ? gridColumnClass : `${key}:${gridColumnClass}`) : null
            })
            .filter(Boolean)
            .join(' ')
    }
    return gridColumn
}
