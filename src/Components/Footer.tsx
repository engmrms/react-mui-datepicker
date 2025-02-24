import React, { ReactNode } from 'react'
import moe from '../Assets/images/logos/moe.svg'
import tetcoFull from '../Assets/images/logos/tetcoFull.svg'
import vision from '../Assets/images/logos/vision.svg'
import { Button, Link } from '../package'

interface FooterLink {
    label: string
    href?: string
    render?: ReactNode
}

interface FooterProps {
    NavLinks?: boolean
    mainTitle?: string
    mainDescription?: string
    mainLinkTilte?: string
    mainLink?: string
    mainImage?: string
    groupLinks?: {
        title: string
        links: FooterLink[]
    }[]
    socialMediaTitle: string
    socialMediaLinks: {
        title?: string
        target: string
        icon: React.ReactNode
    }[]
    // accessibilityTitle?: string;
    // accessibilityLinks?: {
    //     title?: string;
    //     target: string;
    //     icon: React.ReactNode;
    // }[];
    basicLinks?: FooterLink[]
    extraLinks?: FooterLink[]
    copyright?: string
    powerdby?: string
    bottomImages?: React.ReactNode[]
}
// export interface FooterNavLinksType {
//     links: {
//         name: string
//         target: string
//     }[]
// background?: string
//}

const Footer = (props: FooterProps) => {
    return (
        <footer className="bg-background-SA-Flag px-space-06">
            <div className="flex flex-col items-start py-space-05">
                {/* link groups */}
                <div className="mb-space-08 grid w-full grid-cols-12 items-stretch gap-space-05 pb-space-07 pt-space-04">
                    {props.groupLinks?.map(group => (
                        <div key={group.title} className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
                            <div className="flex flex-col items-start gap-space-02">
                                <h3 className="border-b border-x-border-oncolor-transparent-30 pb-space-02 text-body-02 font-medium text-text-oncolor-primary">
                                    {group.title}
                                </h3>
                                <ul className="flex flex-col gap-space-02">
                                    {group.links?.map(link => (
                                        <li key={link.label}>
                                            <FooterLink key={link.label} {...link} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                    <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
                        <div className="flex flex-col items-start gap-space-06">
                            <div className="flex flex-col items-start gap-space-02">
                                <h3 className="border-b border-x-border-oncolor-transparent-30 pb-space-02 text-body-02 font-medium text-text-oncolor-primary">
                                    {props.socialMediaTitle}
                                </h3>
                                <div className="flex flex-wrap items-center gap-space-02">
                                    {props.socialMediaLinks?.map(slink => (
                                        <Button
                                            key={slink.title}
                                            variant={'outline'}
                                            tooltip={slink.title}
                                            colors={'oncolor'}
                                            size={'icon-sm'}
                                            rounded={'default'}>
                                            <a href={slink.target} target="_blank" rel="noopener noreferrer" title={slink.title}>
                                                {slink.icon}
                                            </a>
                                        </Button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-space-02">
                                <h3 className="border-b border-x-border-oncolor-transparent-30 pb-space-02 text-body-02 font-medium text-text-oncolor-primary">
                                    Accessibility Tools
                                </h3>
                                <div className="flex flex-wrap items-center gap-space-02">
                                    <div className="flex aspect-square w-fit cursor-pointer items-center  justify-center rounded-0 border border-border-white-40 px-space-03 ">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0.943526 1.21547C1.05038 1.00649 1.2653 0.875 1.5 0.875H5.66667C5.86736 0.875 6.05584 0.971373 6.17334 1.13407L10.2867 6.82945L16.0581 1.05806C16.3021 0.813981 16.6979 0.813981 16.9419 1.05806C17.186 1.30214 17.186 1.69786 16.9419 1.94194L11.028 7.85589L17.0067 16.1341C17.1441 16.3243 17.1633 16.5756 17.0565 16.7845C16.9496 16.9935 16.7347 17.125 16.5 17.125H12.3333C12.1326 17.125 11.9442 17.0286 11.8267 16.8659L7.71333 11.1706L1.94194 16.9419C1.69787 17.186 1.30214 17.186 1.05806 16.9419C0.813983 16.6979 0.813983 16.3021 1.05806 16.0581L6.97201 10.1441L0.993328 1.86593C0.85591 1.67566 0.836676 1.42444 0.943526 1.21547ZM2.72235 2.125L12.6529 15.875H15.2777L5.3471 2.125H2.72235Z"
                                                fill="white"></path>
                                        </svg>
                                    </div>
                                    <div className="flex aspect-square w-fit cursor-pointer items-center  justify-center rounded-0 border border-border-white-40 px-space-03 ">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0.943526 1.21547C1.05038 1.00649 1.2653 0.875 1.5 0.875H5.66667C5.86736 0.875 6.05584 0.971373 6.17334 1.13407L10.2867 6.82945L16.0581 1.05806C16.3021 0.813981 16.6979 0.813981 16.9419 1.05806C17.186 1.30214 17.186 1.69786 16.9419 1.94194L11.028 7.85589L17.0067 16.1341C17.1441 16.3243 17.1633 16.5756 17.0565 16.7845C16.9496 16.9935 16.7347 17.125 16.5 17.125H12.3333C12.1326 17.125 11.9442 17.0286 11.8267 16.8659L7.71333 11.1706L1.94194 16.9419C1.69787 17.186 1.30214 17.186 1.05806 16.9419C0.813983 16.6979 0.813983 16.3021 1.05806 16.0581L6.97201 10.1441L0.993328 1.86593C0.85591 1.67566 0.836676 1.42444 0.943526 1.21547ZM2.72235 2.125L12.6529 15.875H15.2777L5.3471 2.125H2.72235Z"
                                                fill="white"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* other links */}
                <div className="grid w-full grid-cols-12 gap-space-05 py-space-04">
                    <div className="col-span-12 space-y-space-02 md:col-span-8">
                        <div className="mb-spacing-05 flex items-center gap-space-04 ">
                            {props.basicLinks?.map(link => <FooterLink key={link.label} {...link} underline="always" />)}
                        </div>
                        <p className="text-body-01 font-semibold text-text-oncolor-primary">
                            {props.copyright} © {new Date().getFullYear()}
                        </p>
                        <p className="text-body-01 text-text-oncolor-primary">{props.powerdby}</p>
                        <div className="flex items-center gap-space-04 ">
                            {props.extraLinks?.map(link => <FooterLink key={link.label} {...link} />)}
                        </div>
                    </div>
                    <div className="col-span-12 ms-auto flex flex-wrap items-center gap-space-04 md:col-span-4">
                        <img src={moe} alt="moe" />
                        <img src={tetcoFull} alt="tetco" />
                        <img src={vision} alt="vision 2030" />
                        {props.bottomImages}
                    </div>
                </div>
            </div>
        </footer>
    )
}

interface FooterLinkProps extends FooterLink {
    underline?: 'always' | 'hover'
}

function FooterLink({ label, href, render, underline }: FooterLinkProps) {
    if (render) {
        return (
            <Link underline={underline} size={'sm'} colors={'oncolor'} asChild>
                {render}
            </Link>
        )
    }

    return (
        <Link underline={underline} size={'sm'} colors={'oncolor'} target="_blank" href={href}>
            {label}
        </Link>
    )
}

export { Footer, type FooterProps }
