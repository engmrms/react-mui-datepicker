import { Close, Search } from 'google-material-icons/outlined'
import React, { useState } from 'react'
import { debounce } from '../../Lib/utils'
import { Input } from './input'
import { Stack } from './Layout'
import { Button } from './button'

interface SearchInputProps {
    placeholder?: string
    type: 'onType' | 'onButton' // Determines the search behavior
    validationMessage?: string
    onSearch: (value: string) => void
    disabled?: boolean
    debounceTime?: number
}

export const SearchInput: React.FC<SearchInputProps> = ({
    placeholder = 'Search...',
    type,
    validationMessage,
    onSearch,
    disabled = false,
    debounceTime = 600,
}) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInputValue(value)

        if (type === 'onType') {
            debounce(() => onSearch(value), debounceTime) // Trigger search immediately
        }
    }

    const handleClear = () => setInputValue('')

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
                onChange={handleInputChange}
                disabled={disabled}
                className="transition-all focus-within:border-success hover:border-success"
                aria-invalid={!!validationMessage}
                startAdornment={type === 'onType' && <Search className="text-foreground-tertiary" />}
                endAdornment={
                    <Stack gap={1} alignItems={'center'}>
                        {inputValue && (
                            <button type="button" className="rounded-full bg-background !p-space-01 text-foreground-tertiary" onClick={handleClear}>
                                <Close />
                            </button>
                        )}
                        {inputValue && type === 'onButton' && <span className="mx-space-01 block h-space-05 border" />}
                        {type === 'onButton' && (
                            <Button
                                variant={'outline'}
                                colors={'success'}
                                rounded={'full'}
                                type="button"
                                className="h-auto rounded-full border !p-space-01"
                                onClick={handleSearch}>
                                <Search />
                            </Button>
                        )}
                    </Stack>
                }
            />
            {validationMessage && <p className="text-caption-01 text-error">{validationMessage}</p>}
        </div>
    )
}
