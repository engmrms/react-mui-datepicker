/* eslint-disable react/no-unescaped-entities */
import { GoogleMaterialIcon } from 'google-material-icons'
import { AccessibilityNew, Hub, ViewCarousel, Visibility } from 'google-material-icons/filled'

const introInfo = [
    {
        title: 'Clarity',
        desc: 'Strive for clear and intuitive interfaces that guide users effortlessly.',
        icon: Visibility,
    },
    {
        title: 'Consistency',
        desc: 'Maintain visual and functional consistency across all touch-points to build trust and familiarity.',
        icon: ViewCarousel,
    },
    {
        title: 'Accessibility',
        desc: 'Ensure that our products are inclusive and accessible to users of all.',
        icon: AccessibilityNew,
    },
    {
        title: 'Usability',
        desc: 'Prioritize usability to create seamless and enjoyable user experiences.',
        icon: Hub,
    },
]

const Intro = () => {
    return (
        <section className="sb-unstyled space-y-space-08">
            <div className="space-y-space-03">
                <h1 className="title-03 text-[#3546A3]">Introduction to Mada Design System</h1>
                <p className="subtitle-02">
                    Welcome to Mada Design System! Our design system is a comprehensive collection of reusable components, guidelines, and resources
                    designed to empower our teams to create consistent and delightful user experiences across all our platforms.
                </p>
            </div>
            <div>
                <img src="./coverDS.png" alt="" />
            </div>
            <div>
                <h3 className="title-01 mb-space-02">Our principles</h3>
                <p className="subtitle-02 mb-space-04">Our design system is guided by the following principles:</p>
                <div className="grid grid-cols-4 gap-space-05">
                    {introInfo.map(inf => (
                        <IntroCard key={inf.title} title={inf.title} desc={inf.desc} Icon={inf.icon} />
                    ))}
                </div>
            </div>

            <div>
                <h3 className="title-01 mb-space-02">Getting Started 🚀</h3>
                <p className="subtitle-02">
                    Here, you'll find detailed guidelines, code snippets, design assets, and information on how to contribute to the evolution of our
                    design system.
                </p>
            </div>
        </section>
    )
}

const IntroCard = ({ Icon, title, desc }: { Icon: GoogleMaterialIcon; title: string; desc: string }) => {
    return (
        <div className=" space-y-space-03">
            <div className="flex items-center justify-center bg-background p-space-05 text-primary-dark">
                <Icon width={88} height={88} />
            </div>
            <div className="space-y-space-02">
                <h4 className="text-xl font-bold">{title}</h4>
                <p className="text-body-01 text-foreground-secondary">{desc}</p>
            </div>
        </div>
    )
}

export default Intro
