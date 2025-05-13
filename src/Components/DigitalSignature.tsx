import { KeyboardArrowDown, Link as LinkIcon, Lock } from 'google-material-icons/outlined'
import { HtmlHTMLAttributes, PropsWithChildren } from 'react'
import DGALogo from '../Assets/images/logos/DGA-logo-icon.svg'
import IconSaudi from '../Assets/images/logos/icon_saudi.svg'
import { Collapsible, CollapsibleContent, CollapsibleTrigger, Link, LinkProps, Stack, strings } from '../package'

type extensions = '.gov.sa' | '.edu.sa' | '.org.sa' | '.sch.sa' | '.sa'
interface DigitalSignatureProps extends HtmlHTMLAttributes<HTMLDivElement> {
    extension?: extensions
    linkProps?: LinkProps
}

const DigitalSignature = ({ extension = '.gov.sa', linkProps, children, ...props }: DigitalSignatureProps) => {
    const extContent: Record<extensions, { title: string | (string | JSX.Element)[]; desc: string }> = {
        '.gov.sa': {
            title: strings.formatString(strings.DigitalSignatureContent.govSaTitle, <span className="text-primary">{extension}</span>),
            desc: strings.DigitalSignatureContent.govSaDesc,
        },
        '.edu.sa': {
            title: strings.formatString(strings.DigitalSignatureContent.eduSaTitle, <span className="text-primary">{extension}</span>),
            desc: strings.DigitalSignatureContent.eduSaDesc,
        },
        '.org.sa': {
            title: strings.formatString(strings.DigitalSignatureContent.orgSaTitle, <span className="text-primary">{extension}</span>),
            desc: strings.DigitalSignatureContent.orgSaDesc,
        },
        '.sch.sa': {
            title: strings.formatString(strings.DigitalSignatureContent.schSaTitle, <span className="text-primary">{extension}</span>),
            desc: strings.DigitalSignatureContent.schSaDesc,
        },
        '.sa': {
            title: strings.formatString(strings.DigitalSignatureContent.saTitle, <span className="text-primary">{extension}</span>),
            desc: strings.DigitalSignatureContent.saDesc,
        },
    }
    return (
        <div {...props} className="bg-background-neutral-100 px-space-04 py-space-02 md:px-space-06">
            <Collapsible className="mx-auto max-w-container">
                <Stack gap={2} alignItems={'center'} className="flex-col text-body-01 font-medium md:flex-row">
                    <Stack gap={2}>
                        <img src={IconSaudi} alt="Saudi flag" width={20} height={14} />
                        <span>{strings.DigitalSignatureContent.officialSite}</span>
                    </Stack>
                    <CollapsibleTrigger className="flex items-center text-link-primary focus:border-none focus:bg-transparent active:bg-transparent">
                        {strings.DigitalSignatureContent.howCheck}{' '}
                        <KeyboardArrowDown className="transition-transform group-data-[state=open]:rotate-180 " />
                    </CollapsibleTrigger>
                    <div className="ms-auto">{children}</div>
                </Stack>
                <CollapsibleContent className="mb-space-05 mt-space-07">
                    <Stack direction={'col'} gap={7}>
                        <Stack gap={4} className="flex-col md:flex-row">
                            <Stack gap={4}>
                                <FeaturedIcon>
                                    <LinkIcon className="text-icon-primary" />
                                </FeaturedIcon>
                                <DigitalSignatureContent title={extContent[extension].title} desc={extContent[extension].desc} />
                            </Stack>
                            <Stack gap={4}>
                                <FeaturedIcon>
                                    <Lock className="text-icon-primary" />
                                </FeaturedIcon>
                                <DigitalSignatureContent
                                    title={strings.formatString(
                                        strings.DigitalSignatureContent.secureTitle,
                                        <span className="text-primary">HTTPS</span>,
                                    )}
                                    desc={strings.DigitalSignatureContent.secureDesc}
                                />
                            </Stack>
                        </Stack>
                        <Stack gap={3} className="flex-col bg-white px-space-05 py-space-02 md:flex-row" alignItems={'center'}>
                            <Stack gap={3} alignItems={'center'}>
                                <img src={DGALogo} alt="DGA logo" />
                                {strings.DigitalSignatureContent.registered}
                            </Stack>
                            <Link {...linkProps} />
                        </Stack>
                    </Stack>
                </CollapsibleContent>
            </Collapsible>
        </div>
    )
}

const FeaturedIcon = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex size-space-08 items-center justify-center rounded-full border border-border-success p-space-03 shadow-xs">
            {children}
        </div>
    )
}
const DigitalSignatureContent = ({ title, desc }: { title: string | (string | JSX.Element)[]; desc: string }) => {
    return (
        <div>
            <h2 className="text-subtitle-01 font-semibold text-text-default">{title}</h2>
            <p className="text-text-paragraph-primary">{desc}</p>
        </div>
    )
}

export { DigitalSignature }
