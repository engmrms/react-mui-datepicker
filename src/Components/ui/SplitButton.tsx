import { KeyboardArrowDown } from 'google-material-icons/outlined'
import { Button, ButtonProps, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../'
import { cn } from '../../Lib/utils'

type SplitButtonVariant = 'default' | 'outline' | 'ghost' | 'text'
type SplitButtonSize = 'default' | 'sm' | 'xs'

interface SplitButtonProps<T> extends Omit<ButtonProps, 'asChild' | 'variant' | 'size'> {
    variant?: SplitButtonVariant
    size?: SplitButtonSize
    renderMenuItems: (item: T) => React.ReactNode
    menuItems: T[]
}

export function SplitButton<T>(props: SplitButtonProps<T>) {
    const { renderMenuItems, menuItems, className, ...rest } = props
    const trigger = (
        <Button
            variant={rest.variant}
            rounded={rest.rounded}
            size={rest.size}
            colors={rest.colors}
            disabled={rest.disabled}
            className={cn('peer -ml-0.5  w-[40px] rounded-s-none ', {
                'border-s border-s-white': rest.variant === 'default',
            })}>
            <KeyboardArrowDown className="shrink-0 " />
        </Button>
    )

    return (
        <div className={cn('group/buttons relative  flex ', className)}>
            <Button className={cn('rounded-e-none ')} {...rest}>
                {props.children}
            </Button>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="shadow-none">
                    {menuItems.map((item, index) => (
                        <DropdownMenuItem key={index} asChild>
                            {renderMenuItems(item)}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
