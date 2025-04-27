import { Close, Search } from 'google-material-icons/outlined'
import React, { useEffect, useRef, useState } from 'react'
import { cn, debounce } from '../../Lib/utils'
import { strings } from '../../Locales'
import { Button } from './button'
import { Input, InputProps } from './input'
import { Stack } from './Layout'

interface SearchInputProps {
    placeholder?: string
    type: 'onType' | 'onButton' // Determines the search behavior
    validationMessage?: string
    value?: string
    onSearch: (value: string) => void
    disabled?: boolean
    debounceTime?: number
    className?: string
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps & InputProps>(
    (
        { placeholder = 'Search...', value = '', type, validationMessage, onSearch, disabled = false, debounceTime = 600, className = '', ...props },
        ref,
    ) => {
        const [inputValue, setInputValue] = useState(value)
        const debouncedOnSearch = useRef<(value: string) => void>()
        // effects
        useEffect(() => {
            setInputValue(value)
        }, [value])

        useEffect(() => {
            // Update the debounced function whenever `onSearch` or `debounceTime` changes
            debouncedOnSearch.current = debounce((value: string) => onSearch(value), debounceTime)
        }, [onSearch, debounceTime])
        // methods
        const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                onSearch(inputValue.trim())
            }
        }

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value
            setInputValue(value)

            if (type === 'onType' && debouncedOnSearch.current) {
                debouncedOnSearch.current(value)
            }
        }

        const handleClear = () => {
            setInputValue('')
            onSearch('')
        }

        const handleSearch = () => {
            if (type === 'onButton') {
                onSearch(inputValue) // Trigger search only when clicking the button
            }
        }

        return (
            <div className="space-y-space-01">
                <Input
                    type="text"
                    variant={'outline'}
                    placeholder={placeholder}
                    value={inputValue}
                    disabled={disabled}
                    // !order is important
                    {...props}
                    onKeyDown={handleKeyDown}
                    onChange={handleInputChange}
                    className={cn('w-full ', { 'pe-space-04': type === 'onType', 'pe-space-01': type === 'onButton' }, className)}
                    aria-invalid={!!validationMessage}
                    data-testid="search-input"
                    startAdornment={type === 'onType' && <Search className="text-icon-default" />}
                    endAdornment={
                        <Stack gap={1} alignItems={'center'}>
                            {inputValue && (
                                <button type="button" className="text-text-default" onClick={handleClear}>
                                    <Close size={20} />
                                    <span className="sr-only">{strings.Shared.Clear}</span>
                                </button>
                            )}
                            {inputValue && type === 'onButton' && <span className="mx-space-01 block h-space-05 border" />}
                            {type === 'onButton' && (
                                <Button
                                    variant={'outline'}
                                    rounded={'full'}
                                    size={'icon-sm'}
                                    type="button"
                                    tooltip={strings.Shared.Search}
                                    className="h-auto rounded-full border !p-space-01"
                                    onClick={handleSearch}>
                                    <Search />
                                </Button>
                            )}
                        </Stack>
                    }
                    ref={ref}
                />
                {validationMessage && <p className="text-caption-01 text-error">{validationMessage}</p>}
            </div>
        )
    },
)

SearchInput.displayName = 'SearchInput'
export { SearchInput }
// export const SearchInput: React.FC<SearchInputProps> = ({
//     placeholder = 'Search...',
//     value = '',
//     type,
//     validationMessage,
//     onSearch,
//     disabled = false,
//     debounceTime = 600,
//     className = '',
//     rounded = true,
// }) => {
//     const [inputValue, setInputValue] = useState(value)

//     useEffect(() => {
//         setInputValue(value)
//     }, [value])

//     const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//         if (e.key === 'Enter') {
//             onSearch(inputValue.trim())
//         }
//     }

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const value = e.target.value
//         setInputValue(value)

//         if (type === 'onType') {
//             debounce(() => onSearch(value), debounceTime) // Trigger search immediately
//         }
//     }

//     const handleClear = () => setInputValue('')

//     const handleSearch = () => {
//         if (type === 'onButton') {
//             onSearch(inputValue) // Trigger search only when clicking the button
//         }
//     }

//     return (
//         <div className="space-y-space-01">
//             <Input
//                 type="text"
//                 variant={'outline'}
//                 placeholder={placeholder}
//                 value={inputValue}
//                 onKeyDown={handleKeyDown}
//                 onChange={handleInputChange}
//                 disabled={disabled}
//                 className={cn('w-auto pe-space-01 transition-all duration-200 focus-within:border-success hover:border-success', className)}
//                 aria-invalid={!!validationMessage}
//                 rounded={rounded ? 'full' : 'default'}
//                 data-testid="search-input"
//                 startAdornment={type === 'onType' && <Search className="text-foreground-tertiary" />}
//                 endAdornment={
//                     <Stack gap={1} alignItems={'center'}>
//                         {inputValue && (
//                             <button type="button" className="rounded-full bg-background !p-space-01 text-foreground-tertiary" onClick={handleClear}>
//                                 <Close />
//                             </button>
//                         )}
//                         {inputValue && type === 'onButton' && <span className="mx-space-01 block h-space-05 border" />}
//                         {type === 'onButton' && (
//                             <Button
//                                 variant={'outline'}
//                                 colors={'success'}
//                                 rounded={'full'}
//                                 type="button"
//                                 className="h-auto rounded-full border !p-space-01"
//                                 onClick={handleSearch}>
//                                 <Search />
//                             </Button>
//                         )}
//                     </Stack>
//                 }
//             />
//             {validationMessage && <p className="text-caption-01 text-error">{validationMessage}</p>}
//         </div>
//     )
// }
