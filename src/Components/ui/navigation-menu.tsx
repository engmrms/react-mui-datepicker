/* eslint-disable react/prop-types */
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'
import { Close, KeyboardArrowDown, Language, Menu, Search } from 'google-material-icons/outlined'
import * as React from 'react'

import { Content } from '@radix-ui/react-dialog'
import { Slot } from '@radix-ui/react-slot'
import { useMediaQuery, useToggle } from 'usehooks-ts'
import { cn } from '../../Lib/utils'
import { strings } from '../../Locales'
import { SheetFooter, ShouldRender, Stack, Text, ToggleGroup, ToggleGroupItem, useLanguage } from '../../package'
import { Button } from './button'
import { Input } from './input'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './sheet'

const NavigationMenu = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => {
    const { dir } = useLanguage()
    return (
        <NavigationMenuPrimitive.Root dir={dir} ref={ref} className={cn('relative z-10 hidden flex-1 items-center lg:flex', className)} {...props}>
            {children}
            <NavigationMenuViewport />
        </NavigationMenuPrimitive.Root>
    )
})
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
    data-[state=open]:bg-button-background-primary-hovered hover:data-[state=open]:bg-button-background-primary-hovered data-[state=open]:text-text-oncolor-primary hover:data-[state=open]:after:bg-background-primary-400 data-[state=open]:after:bg-background-primary-400 data-[state=open]:active:bg-button-background-primary-pressed
    [&.active]:bg-button-background-primary-hovered [&.active]:text-text-oncolor-primary [&.active]:after:bg-background-primary-400 [&.active]:active:bg-button-background-primary-pressed`,
)

const NavigationMenuTrigger = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger ref={ref} className={cn(navigationMenuTriggerStyle(), '', className)} {...props}>
        {children}{' '}
        <KeyboardArrowDown
            size={20}
            className="relative top-[1px] me-1 transition duration-200 group-data-[state=open]:rotate-180"
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
            'data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft absolute start-0 top-0 w-full sm:w-auto',
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
            'group relative inline-flex h-[72px] items-center justify-center gap-space-01 px-space-05 py-space-02 after:absolute after:bottom-0 after:start-1/2 after:h-space-02 after:w-[calc(100%_-_16px)] after:rounded-full hover:bg-button-background-neutral-hovered hover:after:bg-background-neutral-400 focus:bg-transparent focus:outline focus:outline-2 focus:outline-black active:bg-button-background-neutral-pressed active:after:bg-background-neutral-800 ltr:after:-translate-x-1/2 rtl:after:translate-x-1/2 [&.active]:bg-button-background-primary-hovered [&.active]:text-text-oncolor-primary [&.active]:after:bg-background-primary-400 [&.active]:active:bg-button-background-primary-pressed',
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
    <div className={cn('absolute start-0 top-full flex justify-center')}>
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
                'relative z-50 flex h-[72px] min-h-[72px] w-full bg-background-menu',
                {
                    'after:absolute after:bottom-0 after:start-0 after:block after:h-[1px] after:w-full after:bg-background-neutral-100': divider,
                },
                className,
            )}
            {...props}>
            <div className="flex w-full items-center justify-between px-space-04 md:px-space-06">{children}</div>
        </header>
    ),
)

NavigationHeader.displayName = 'NavigationHeader'

const NavigationHeaderLogo = React.forwardRef<HTMLAnchorElement, React.HtmlHTMLAttributes<HTMLAnchorElement> & { logoSrc: string; logoAlt?: string }>(
    ({ className, logoAlt, logoSrc, ...props }, ref) => (
        <a ref={ref} className={cn('flex w-full shrink-0 md:justify-center lg:w-auto', className)} {...props}>
            <img src={logoSrc} alt={logoAlt || 'logo'} />
        </a>
    ),
)
NavigationHeaderLogo.displayName = 'NavigationHeaderLogo'

const NavigationMain = React.forwardRef<
    HTMLDivElement,
    React.HtmlHTMLAttributes<HTMLDivElement> & { collapsed?: boolean; onToggleCollapsed?: () => void }
>(({ className, collapsed, onToggleCollapsed, children, ...props }, ref) => (
    <div ref={ref} className={cn('flex w-full items-center gap-space-04', className)} {...props}>
        <Button variant={'text'} colors={'neutral'} size={'icon'} type="button" rounded={'default'} className="lg:hidden" onClick={onToggleCollapsed}>
            {collapsed ? <Close /> : <Menu />}
        </Button>
        {children}
    </div>
))

NavigationMain.displayName = 'NavigationMain'

const NavigationActions = React.forwardRef<HTMLDivElement, React.HtmlHTMLAttributes<HTMLDivElement>>(({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center', className)} {...props}>
        {/* <Button variant={'text'} colors={'neutral'} type="button" size={'icon'} rounded={'default'} className="sm:hidden">
            <MoreHoriz />{' '}
        </Button> */}
        {children}
    </div>
))

NavigationActions.displayName = 'NavigationActions'

const NavigationAction = React.forwardRef<HTMLButtonElement, React.HtmlHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }>(
    ({ className, children, asChild, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        const isSmartDevice = useMediaQuery('(max-width: 1023px)')

        return (
            <>
                <ShouldRender shouldRender={asChild && isSmartDevice}>
                    <Button asChild variant={'ghost'} size={'icon'} colors={'gray'}>
                        <Slot ref={ref} className={className} {...props}>
                            {children}
                        </Slot>
                    </Button>
                </ShouldRender>
                <ShouldRender shouldRender={!isSmartDevice}>
                    <Comp className={cn(navigationMenuTriggerStyle(), className)} ref={ref} {...props}>
                        {children}
                    </Comp>
                </ShouldRender>
            </>
        )
    },
)
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
    const isSmartDevice = useMediaQuery('(max-width: 1023px)')
    const [open, toggle, setToggle] = useToggle()

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
            open={open}
            onOpenChange={open => {
                setToggle(open)
                setTimeout(() => {
                    document.body.style.removeProperty('pointer-events')
                }, 1000)
            }}>
            <SheetTrigger asChild>
                <>
                    <ShouldRender shouldRender={!isSmartDevice}>
                        <button className={navigationMenuTriggerStyle()} onClick={toggle}>
                            <Search /> <span className="sr-only lg:not-sr-only">{strings.Shared.Search}</span>
                        </button>
                    </ShouldRender>
                    <ShouldRender shouldRender={isSmartDevice}>
                        <Button variant={'ghost'} colors={'gray'} size={'icon'} onClick={toggle}>
                            <Search />
                        </Button>
                    </ShouldRender>
                </>
            </SheetTrigger>
            <Content className="absolute inset-x-0 top-[72px] z-50 flex w-full flex-col overflow-y-auto rounded-b-3 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out sm:max-w-full">
                <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-w-2.5 scrollbar-h-2.5 h-full overflow-auto bg-background-menu p-space-05 scrollbar scrollbar-track-transparent scrollbar-thumb-border">
                    <div className="mx-auto flex max-w-screen-xl flex-col py-space-06">
                        <SheetClose asChild className="ms-auto">
                            <Button size={'icon-sm'} rounded={'default'} variant={'text'} colors={'neutral'} type="button">
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
                </div>
            </Content>
        </Sheet>
    )
}
const NavigationSwitchLanguage = ({ onValueChange }: { onValueChange?: () => void }) => {
    const { changeLang, lang } = useLanguage()
    const isSmartDevice = useMediaQuery('(max-width: 1023px)')
    const switchLang = () => {
        const newLang = lang === 'ar' ? 'en' : 'ar'
        changeLang(newLang)
        onValueChange?.()
    }

    return (
        <>
            <ShouldRender shouldRender={!isSmartDevice}>
                <button className={cn(navigationMenuTriggerStyle(), 'hidden md:flex')} onClick={switchLang} data-testid="localizationBtn">
                    <Language /> <span className="sr-only lg:not-sr-only">{strings.Shared.siteLanguageText}</span>
                </button>
            </ShouldRender>
            <ShouldRender shouldRender={isSmartDevice}>
                <Button variant={'ghost'} colors={'gray'} size={'icon'} onClick={switchLang}>
                    <Language />
                </Button>
            </ShouldRender>
        </>
    )
}

// Navigation Mobile

const NavigationMobileSideBar = ({
    open,
    onOpenChange,
    children,
}: React.PropsWithChildren<{ open?: boolean; onOpenChange?: (open: boolean) => void }>) => {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="right" className="flex h-svh w-10/12 flex-col overflow-x-hidden p-0 sm:max-w-lg md:max-w-xl">
                {children}
            </SheetContent>
        </Sheet>
    )
}

const NavigationMobileHeader = ({ children, className, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) => {
    return (
        <SheetHeader hideCenter className={cn('flex items-center justify-between bg-background-neutral-25 px-space-05', className)} {...props}>
            <SheetTitle>{children}</SheetTitle>
        </SheetHeader>
    )
}
const NavigationMobileFooter = ({
    children,
    className,
    hideSwitchLang,
    ...props
}: React.HtmlHTMLAttributes<HTMLDivElement> & { hideSwitchLang?: boolean }) => {
    return (
        <SheetFooter className={cn('flex !flex-col gap-y-space-04 bg-transparent', className)} {...props}>
            <ShouldRender shouldRender={!hideSwitchLang}>
                <NavigationMobileSwitchLanguage />
            </ShouldRender>
            {children}
        </SheetFooter>
    )
}

const NavigationMobileBody = ({ children, className, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn(
                'scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-w-2.5 scrollbar-h-2.5 h-full overflow-auto bg-card p-space-04 text-foreground scrollbar scrollbar-track-transparent scrollbar-thumb-border',
                className,
            )}
            {...props}>
            {children}
        </div>
    )
}

const NavigationMobileSwitchLanguage = () => {
    const { changeLang, lang } = useLanguage()

    return (
        <Stack justifyContent={'between'} alignItems={'center'}>
            <Text>{strings.Shared.Language}</Text>

            <ToggleGroup
                type="single"
                size={'sm'}
                data-testid="localizationBtn"
                value={lang}
                variant={'outline'}
                colors={'gray'}
                onValueChange={(v: 'ar' | 'en') => {
                    changeLang(v)
                }}>
                <ToggleGroupItem value="ar">العربية</ToggleGroupItem>
                <ToggleGroupItem value="en">English</ToggleGroupItem>
            </ToggleGroup>
        </Stack>
    )
}

const NavigationMobileLink = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement> & { asChild?: boolean }>(
    ({ className, target, asChild, ...props }, ref) => {
        const Comp = asChild ? Slot : 'a'
        const appendrel = target === '_blank' ? 'noopener noreferrer' : ''
        return (
            <SheetClose asChild>
                <Comp
                    className={cn(
                        'group relative inline-flex gap-space-01 rounded px-space-04 py-space-02 text-body-01 font-semibold text-text-default focus:outline focus:outline-2 focus:outline-black active:bg-button-background-neutral-pressed active:before:absolute active:before:start-0 active:before:top-1/2 active:before:h-space-05 active:before:w-[6px] active:before:-translate-y-1/2 active:before:rounded-full active:before:bg-background-neutral-800',
                        className,
                    )}
                    ref={ref}
                    rel={appendrel}
                    {...props}
                />
            </SheetClose>
        )
    },
)
NavigationMobileLink.displayName = NavigationMenuPrimitive.Link.displayName

export {
    NavigationAction,
    NavigationActions,
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
    NavigationMobileBody,
    NavigationMobileFooter,
    NavigationMobileHeader,
    NavigationMobileLink,
    NavigationMobileSideBar,
    NavigationMobileSwitchLanguage,
    NavigationSearch,
    NavigationSwitchLanguage,
}
