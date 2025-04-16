import { HearingDisabled, Visibility, ZoomIn, ZoomOut } from 'google-material-icons/outlined'
import React, { ReactNode } from 'react'
import moe from '../Assets/images/logos/moe.svg'
import tetcoFull from '../Assets/images/logos/tetcoFull.svg'
import vision from '../Assets/images/logos/vision.svg'

import moeNeutral from '../Assets/images/logos/moe_netural.svg'
import tetcoNeutral from '../Assets/images/logos/tetco_neutral.svg'
import visionNeutral from '../Assets/images/logos/vision_neutral.svg'
import { accessibilityTools, Button, cn, Link, LinkProps, ShouldRender, strings } from '../package'

type Colors = 'default' | 'neutral'
interface FooterLink {
    label: string
    href?: string
    render?: ReactNode
}
interface GroupLink {
    title: string
    links: FooterLink[]
}
interface SocialLink {
    title?: string
    target: string
    icon: React.ReactNode
}
interface BottomSectionProps {
    basicLinks?: FooterLink[]
    extraLinks?: FooterLink[]
    bottomImages?: React.ReactNode[]
    colors?: Colors
    showBasicLinks?: boolean
}

interface FooterProps extends BottomSectionProps {
    showGroupLinks?: boolean
    groupLinks?: GroupLink[]
    socialMediaTitle: string
    socialMediaLinks: SocialLink[]
}

const Footer = ({ colors = 'default', ...props }: FooterProps) => {
    return (
        <footer
            className={cn(' px-space-06', {
                'bg-background-SA-Flag text-text-oncolor-primary': colors === 'default',
                'bg-background-neutral-100 text-text-default': colors === 'neutral',
            })}>
            <div className="flex flex-col items-start py-space-05">
                {/* link groups */}
                <ShouldRender shouldRender={props.showGroupLinks}>
                    <div className="mb-space-08 grid w-full grid-cols-12 items-stretch gap-space-05 pb-space-07 pt-space-04">
                        {props.groupLinks?.map(group => (
                            <FooterLinkGroup colors={colors} title={group.title} links={group.links} key={group.title} />
                        ))}
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
                            <div className="flex w-full flex-col items-start gap-space-06">
                                <FooterSocialMedia title={props.socialMediaTitle} colors={colors} links={props.socialMediaLinks} />
                                <FooterAccessibilityTools colors={colors} />
                            </div>
                        </div>
                    </div>
                </ShouldRender>
                {/* other links */}
                <FooterBottomSection
                    colors={colors}
                    basicLinks={props.basicLinks}
                    bottomImages={props.bottomImages}
                    extraLinks={props.extraLinks}
                    showBasicLinks={props.showBasicLinks}
                />
            </div>
        </footer>
    )
}

const FooterHeading = ({ title, colors }: { colors: Colors; title: string }) => {
    return (
        <label
            className={cn('w-full border-b pb-space-02 text-body-02 font-medium', {
                'border-border-neutral-primary': colors === 'neutral',
                'border-border-oncolor-transparent-30': colors === 'default',
            })}>
            {title}
        </label>
    )
}

const FooterLinkGroup = ({ title, links, colors }: GroupLink & { colors: Colors }) => {
    return (
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
            <div className="flex flex-col items-start gap-space-02">
                <FooterHeading title={title} colors={colors} />
                <ul className="flex flex-col gap-space-02">
                    {links.map(link => (
                        <li key={link.label}>
                            <FooterLink {...link} colors={colors === 'neutral' ? 'neutral' : 'oncolor'} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const FooterSocialMedia = ({ title, links, colors }: { links: SocialLink[]; title: string; colors: Colors }) => {
    return (
        <div className="flex w-full flex-col items-start gap-space-02">
            <FooterHeading title={title} colors={colors} />
            <div className="flex flex-wrap items-center gap-space-02">
                {links.map(slink => (
                    <Button
                        key={slink.title}
                        variant={'outline'}
                        tooltip={slink.title}
                        colors={colors === 'neutral' ? 'neutral' : 'oncolor'}
                        size={'icon-sm'}
                        onClick={() => window.open(slink.target, '_blank', 'noopener,noreferrer')}
                        rounded={'default'}>
                        {slink.icon}
                    </Button>
                ))}
            </div>
        </div>
    )
}

const FooterAccessibilityTools = ({ colors }: { colors: Colors }) => {
    const { toggleColors, increaseSize, decreaseSize } = accessibilityTools(state => state)

    return (
        <div className="flex w-full flex-col items-start gap-space-02">
            <FooterHeading title={strings.Shared.accessibilityTools} colors={colors} />

            <div className="flex flex-wrap items-center gap-space-02">
                <Button
                    variant={'outline'}
                    tooltip={strings.Accessibility.ColorContrast}
                    colors={colors === 'neutral' ? 'neutral' : 'oncolor'}
                    size={'icon-sm'}
                    rounded={'default'}
                    onClick={toggleColors}>
                    <Visibility />
                </Button>
                <Button
                    variant={'outline'}
                    tooltip={strings.Accessibility.DecreaseFontSize}
                    colors={colors === 'neutral' ? 'neutral' : 'oncolor'}
                    size={'icon-sm'}
                    rounded={'default'}
                    onClick={decreaseSize}>
                    <ZoomOut />
                </Button>
                <Button
                    variant={'outline'}
                    tooltip={strings.Accessibility.IncreaseFontSize}
                    colors={colors === 'neutral' ? 'neutral' : 'oncolor'}
                    size={'icon-sm'}
                    rounded={'default'}
                    onClick={increaseSize}>
                    <ZoomIn />
                </Button>
                <Button
                    variant={'outline'}
                    tooltip={strings.Accessibility.VoiceCommands}
                    colors={colors === 'neutral' ? 'neutral' : 'oncolor'}
                    size={'icon-sm'}
                    rounded={'default'}
                    onClick={() => {
                        window.open('https://deaf.dga.gov.sa', '_blank', 'noopener,noreferrer')
                    }}>
                    <HearingDisabled size={20} />
                </Button>
            </div>
        </div>
    )
}

const FooterBottomSection = ({ basicLinks, extraLinks, bottomImages, showBasicLinks, colors }: BottomSectionProps) => {
    return (
        <div className="grid w-full grid-cols-12 gap-space-05 py-space-04">
            <div className="col-span-12 space-y-space-02 md:col-span-8">
                <ShouldRender shouldRender={showBasicLinks}>
                    <div className="mb-spacing-05 flex items-center gap-space-04 ">
                        {basicLinks?.map(link => (
                            <FooterLink key={link.label} {...link} underline="always" colors={colors === 'neutral' ? 'neutral' : 'oncolor'} />
                        ))}
                    </div>
                </ShouldRender>
                <p className="text-body-01 font-semibold ">{strings.formatString(strings.Footer.Rights, new Date().getFullYear())}</p>
                <p className="text-body-01 ">{strings.Footer.DevelopedByTetco}</p>
                <div className="flex items-center gap-space-04 ">
                    {extraLinks?.map(link => <FooterLink key={link.label} {...link} colors={colors === 'neutral' ? 'neutral' : 'oncolor'} />)}
                </div>
            </div>
            <div className="col-span-12 flex flex-wrap items-center gap-space-04 md:col-span-4 md:ms-auto">
                <a href="https://moe.gov.sa/ar/Pages/default.aspx" rel="noopener noreferrer" target="_blank">
                    <img src={colors === 'default' ? moe : moeNeutral} alt="moe" />
                </a>
                <a href="https://tetco.sa/" rel="noopener noreferrer" target="_blank">
                    <img src={colors === 'default' ? tetcoFull : tetcoNeutral} alt="tetco" />
                </a>
                <a href="https://www.vision2030.gov.sa/" rel="noopener noreferrer" target="_blank">
                    <img src={colors === 'default' ? vision : visionNeutral} alt="vision 2030" />
                </a>
                {bottomImages}
            </div>
        </div>
    )
}

interface FooterLinkProps extends FooterLink, LinkProps {}

function FooterLink({ label, href, render, ...props }: FooterLinkProps) {
    if (render) {
        return (
            <Link size={'sm'} {...props} asChild>
                {render}
            </Link>
        )
    }

    return (
        <Link size={'sm'} {...props} target="_blank" href={href}>
            {label}
        </Link>
    )
}

export { Footer, type FooterProps }
