/* eslint-disable react/prop-types */
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'
import { Close, KeyboardArrowDown, Language, Menu, MoreHoriz, Search } from 'google-material-icons/outlined'
import * as React from 'react'

import { cn } from '../../Lib/utils'
import { strings } from '../../Locales'
import { useLanguage } from '../../package'
import { Button } from './button'
import { Input } from './input'
import { Sheet, SheetBody, SheetClose, SheetContent, SheetTrigger } from './sheet'

const NavigationMenu = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Root ref={ref} className={cn('relative z-10 hidden flex-1 items-center sm:flex  ', className)} {...props}>
        {children}
        <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.List ref={ref} className={cn('group flex flex-1 list-none items-center justify-center', className)} {...props} />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
    `group relative inline-flex h-[72px] items-center justify-center gap-space-01 px-space-05 py-space-02 after:absolute  after:bottom-0  after:start-1/2  after:h-space-02  after:w-[calc(100%_-_16px)]  after:rounded-full
     hover:bg-button-background-neutral-hovered hover:after:bg-background-neutral-400 focus:bg-transparent
     focus:outline focus:outline-2 focus:outline-black active:bg-button-background-neutral-pressed active:after:bg-background-neutral-800
     ltr:after:-translate-x-1/2  rtl:after:translate-x-1/2
    data-[state=open]:bg-button-background-primary-hovered data-[state=open]:text-text-oncolor-primary data-[state=open]:after:bg-background-primary-400 data-[state=open]:active:bg-button-background-primary-pressed
    [&.active]:bg-button-background-primary-hovered [&.active]:text-text-oncolor-primary [&.active]:after:bg-background-primary-400 [&.active]:active:bg-button-background-primary-pressed`,
)

const NavigationMenuTrigger = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger ref={ref} className={cn(navigationMenuTriggerStyle(), 'group', className)} {...props}>
        {children}{' '}
        <KeyboardArrowDown
            size={20}
            className="relative top-[1px] ml-1 transition duration-200 group-data-[state=open]:rotate-180"
            aria-hidden="true"
        />
    </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Content
        ref={ref}
        className={cn(
            'data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft absolute left-0 top-0 w-full sm:w-auto',
            className,
        )}
        {...props}
    />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Link>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Link
        className={cn(
            'group relative inline-flex h-[72px] items-center justify-center gap-space-01 px-space-05 py-space-02 after:absolute  after:bottom-0  after:start-1/2  after:h-space-02  after:w-[calc(100%_-_16px)]  after:-translate-x-1/2  after:rounded-full hover:bg-button-background-neutral-hovered hover:after:bg-background-neutral-400 focus:bg-transparent focus:outline focus:outline-2 focus:outline-black active:bg-button-background-neutral-pressed active:after:bg-background-neutral-800    [&.active]:bg-button-background-primary-hovered [&.active]:text-text-oncolor-primary [&.active]:after:bg-background-primary-400 [&.active]:active:bg-button-background-primary-pressed',
            className,
        )}
        ref={ref}
        {...props}
    />
))
NavigationMenuLink.displayName = NavigationMenuPrimitive.Link.displayName

const NavigationMenuViewport = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
    <div className={cn('absolute left-0 top-full flex justify-center')}>
        <NavigationMenuPrimitive.Viewport
            className={cn(
                'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
                className,
            )}
            ref={ref}
            {...props}
        />
    </div>
))
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Indicator
        ref={ref}
        className={cn(
            'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
            className,
        )}
        {...props}>
        <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName

const NavigationHeader = React.forwardRef<HTMLHeadElement, React.HtmlHTMLAttributes<HTMLHeadElement> & { divider?: boolean }>(
    ({ className, divider = false, children, ...props }, ref) => (
        <header
            ref={ref}
            className={cn(
                'relative z-[100] flex h-[72px] min-h-[72px] w-full bg-background-menu',
                {
                    'after:absolute after:bottom-0 after:start-0 after:block after:h-[1px] after:w-full after:bg-background-neutral-100': divider,
                },
                className,
            )}
            {...props}>
            <div className="flex w-full items-center justify-between px-space-06">{children}</div>
        </header>
    ),
)

NavigationHeader.displayName = 'NavigationHeader'

const NavigationHeaderLogo = React.forwardRef<HTMLAnchorElement, React.HtmlHTMLAttributes<HTMLAnchorElement> & { logoSrc: string; logoAlt?: string }>(
    ({ className, logoAlt, logoSrc, ...props }, ref) => (
        <a ref={ref} className={cn('shrink-0', className)} {...props}>
            <img src={logoSrc} alt={logoAlt || 'logo'} />
        </a>
    ),
)
NavigationHeaderLogo.displayName = 'NavigationHeaderLogo'

const NavigationMain = React.forwardRef<HTMLDivElement, React.HtmlHTMLAttributes<HTMLDivElement>>(({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('flex w-full items-center gap-space-04', className)} {...props}>
        <Button variant={'text'} colors={'neutral'} size={'icon'} rounded={'default'} className="sm:hidden">
            <Menu />{' '}
        </Button>
        {children}
    </div>
))

NavigationMain.displayName = 'NavigationMain'

const NavigationAction = React.forwardRef<HTMLDivElement, React.HtmlHTMLAttributes<HTMLDivElement>>(({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center ', className)} {...props}>
        <Button variant={'text'} colors={'neutral'} size={'icon'} rounded={'default'} className="sm:hidden">
            <MoreHoriz />{' '}
        </Button>
        {children}
    </div>
))

NavigationAction.displayName = 'NavigationAction'

const NavigationSearch = ({
    onSearch,
    onValueChange,
    children,
}: {
    onSearch: (value: string) => void
    onValueChange?: (value: string) => void
    children?: React.ReactNode
}) => {
    const [inputValue, setInputValue] = React.useState('')

    // methods
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch(inputValue.trim())
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInputValue(value)
        onValueChange?.(value)
    }

    const handleClear = () => {
        setInputValue('')
        onSearch('')
    }

    const handleSearch = () => {
        onSearch(inputValue)
    }

    return (
        <Sheet
            onOpenChange={() => {
                setTimeout(() => {
                    document.body.style.removeProperty('pointer-events')
                }, 1000)
            }}>
            <SheetTrigger className={navigationMenuTriggerStyle()}>
                <Search /> Search
            </SheetTrigger>
            <SheetContent side={'top'} className="top-[72px] w-full sm:max-w-full">
                <SheetBody>
                    <div className="mx-auto flex max-w-screen-xl flex-col py-space-06">
                        <SheetClose asChild className="ms-auto">
                            <Button size={'icon-sm'} rounded={'default'} variant={'text'} colors={'neutral'}>
                                <Close />
                            </Button>
                        </SheetClose>
                        <div className="flex gap-space-04 py-space-07">
                            <Input
                                rounded={'default'}
                                value={inputValue}
                                placeholder={strings.Shared.Search}
                                startAdornment={<Search />}
                                onKeyDown={handleKeyDown}
                                onChange={handleInputChange}
                                endAdornment={
                                    inputValue && (
                                        <button type="button" className="text-text-default" onClick={handleClear}>
                                            <Close size={20} />
                                        </button>
                                    )
                                }
                            />
                            <SheetClose asChild>
                                <Button colors={'primary'} rounded={'default'} onClick={handleSearch}>
                                    {strings.Shared.Search}
                                </Button>
                            </SheetClose>
                        </div>
                        {children}
                    </div>
                </SheetBody>
            </SheetContent>
        </Sheet>
    )
}
const NavigationSwitchLanguage = ({ onValueChange }: { onValueChange?: () => void }) => {
    const { changeLang, lang } = useLanguage()

    return (
        <button
            className={navigationMenuTriggerStyle()}
            onClick={() => {
                const newLang = lang === 'ar' ? 'en' : 'ar'
                changeLang(newLang)
                onValueChange?.()
            }}
            data-testid="localizationBtn">
            <span>{strings.Shared.siteLanguageText}</span> <Language />
        </button>
    )
}

export {
    NavigationAction,
    NavigationHeader,
    NavigationHeaderLogo,
    NavigationMain,
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
    NavigationSearch,
    NavigationSwitchLanguage,
}
