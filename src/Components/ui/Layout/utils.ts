export function toGridColumnSpan(span: number | null | undefined): string | null {
    return span !== null ? `col-span-${span}` : null
}
