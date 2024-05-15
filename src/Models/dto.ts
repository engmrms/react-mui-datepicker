/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-namespace */

import { LucideIcon } from 'lucide-react'
import React, { ReactNode } from 'react'
import { UserTypes } from './enums'

export namespace Local_DTO {
    export type User = {
        ProfilePicture?: string
        Id: string
        roles?: number[]
        defaultRole?: UserTypes
        personIdentifier: string
        refIdentificationTypeCode: string
        refIdentificationTypeName: string
        birthdate: string
        firstName: string
        secondName: string
        thridName: string
        lastName: string
        refSexName: string
        refSexCode: string
        refNationalityCountryCode: string
        refNationalityCountryName: string
        email: string
    }
    export type AuthStore = {
        accessToken: string | undefined
        refreshToken: string | undefined
        isAuthenticated: boolean | undefined
        user: Partial<User>
        nationalId: string
        login: (nationalId: string) => void
        setUser: (user: Partial<User>) => void
        logout: () => void
        setDefaultRole: (defaultRole?: UserTypes) => void
    }

    export interface ServiceCategory {
        CategoryName: string
        Link: string
        Id: string
        Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element
        isActive: boolean
    }

    export interface MenuList {
        Category: string
        ClassName?: string | null
        ShortName?: string | null
        Id: string
        Services?: {
            Name: string
            Value: string
            Id: string
            Categories?: ServiceCategory[]
        }[]
    }

    export interface NavigationMenuProps {
        menuList: MenuList[]
    }
    export interface NavigationMenuMobileProps extends NavigationMenuProps {
        isOpen: boolean
        onMenuClose: () => void
        UserLinks: UserLink[]
        changeLang: (lang: 'ar' | 'en') => void
        logout: () => void
        isAuthenticated: boolean
        user: { Name: string; ProfilePicture?: string }
        isUP?: boolean
    }

    export interface LabelProps {
        isRequired?: boolean
    }

    export interface TopMenuProps {
        changeLang: (lang: 'ar' | 'en') => void
        isAuthenticated: boolean
        user: { Name: string; ProfilePicture?: string }
        logout: () => void
        navigateTo?: (pathname: string) => void
        currenLocation?: string
        isUP?: boolean
    }

    export type AccessibilityToolsStore = {
        isActive: boolean
        toggleColors: () => void
        fontSize: string
        isMax: boolean
        isMin: boolean
        isDesktop: boolean
        increaseSize: () => void
        decreaseSize: () => void
        defaultSize: () => void
    }

    export interface UserLink {
        Name: string
        Link?: string
        onClick?: () => void
        Id?: number
        Icon: ((props: React.SVGProps<SVGSVGElement>) => React.JSX.Element) | LucideIcon
    }

    export interface UserInfoProps {
        UserLinks: UserLink[]
        user: { Name: string; ProfilePicture?: string }
        changeLang: (lang: 'ar' | 'en') => void
        logout: () => void
        isUP?: boolean
    }

    export interface Crumb {
        crumb: (data: any) => ReactNode | string
    }

    export interface TextareaProps extends LabelProps {
        label: string
        control: any
        name: string
        placeholder?: string
        maxLength?: number
    }
    export interface DropdownProps extends TextareaProps {
        options: { label: string; value: string | number }[]
        disabled?: boolean
    }

    export interface InputProps extends TextareaProps {
        isNumber?: boolean
        watch?: any
    }

    export type useLanguageStore = {
        lang: string
        dir: 'rtl' | 'ltr'
        changeLang: (lang: 'ar' | 'en') => void
    }
}

export namespace API_DTO {}
