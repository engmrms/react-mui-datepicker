/**
 * NumberInput component
 * typeof InputProps
 */

import { Input, InputProps } from './input'
import { Label } from './label'
import { cn } from '../../Lib/utils'
import { Button } from './button'
import * as Filled from 'google-material-icons/filled'
import ShouldRender from '../ShouldRender'
import { ReactNode } from 'react'

export const NumberInput = ({ label, value, className, ...props }: InputProps & { label?: string | ReactNode }) => {
    const increaseScore = (value: number) => {
        props.onChange?.({ target: { value: value + 1 } } as unknown as React.ChangeEvent<HTMLInputElement>)
    }
    const decreaseScore = (value: number) => {
        if (value < 1) return
        props.onChange?.({ target: { value: value - 1 } } as unknown as React.ChangeEvent<HTMLInputElement>)
    }
    return (
        <div className={cn('flex flex-col gap-space-02')}>
            <ShouldRender shouldRender={!!label}>
                <Label className="text-form-field-text-label" htmlFor={props.id}>
                    {label}
                </Label>
            </ShouldRender>
            <Input
                variant="outline"
                id={props.id}
                value={value}
                startAdornment={
                    <Button variant="ghost" colors={'gray'} rounded={'default'} onClick={() => increaseScore(Number(value))}>
                        <Filled.Add />
                    </Button>
                }
                endAdornment={
                    <Button variant="ghost" colors={'gray'} rounded={'default'} onClick={() => decreaseScore(Number(value))}>
                        <Filled.Minimize />
                    </Button>
                }
                className={cn('w-[185px] !px-space-00', className)}
                {...props}
            />
        </div>
    )
}
