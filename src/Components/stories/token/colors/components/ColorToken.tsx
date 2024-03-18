// sb-unstyled
const ColorToken = () => {
    return (
        <div className=" flex flex-col items-start gap-0 space-y-space-08 overflow-hidden bg-white p-0">
            <div className="flex w-full flex-col items-start space-y-space-07 ">
                <h2 className="w-full">Background Colors</h2>
                <div className="flex  w-full flex-col items-start gap-0 p-0">
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="font-semibold">Token Name</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="font-semibold ">Primitive value</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="font-semibold ">Usage</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="font-semibold ">Sample</span>
                        </div>
                    </div>
                    <div className="row flex w-full flex-row   gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className=" ">Background </span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className=" ">Color/Gray/50</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className=" ">Default background color of body</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-border bg-background p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="">Background Secondary </span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className=" ">Color/Gray/50</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className=" ">Default background for switch, radio buttons, and chekc box...</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-background-secondary p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className=" ">Foreground Primary</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className=" ">Color/Gray/900</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className=" ">Primary color for icons, text.. on background</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-foreground p-0" />
                        </div>
                    </div>
                </div>
                <h2 className="w-full">Text &amp; Icons Colors</h2>
                <div className="flex  w-full flex-col items-start gap-0 p-0">
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="  font-semibold ">Token Name</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="  font-semibold ">Primitive value</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="  font-semibold ">Usage</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="  font-semibold ">Sample</span>
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className=" ">Foreground Secondary</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className=" ">Color/Gray/800</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className=" ">Secondary color for icons, text.. on background, and muted and card</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-foreground-secondary p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="foregroundTertiary ">Foreground Tertiary</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorGray700 ">Color/Gray/700</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="tertiaryColorForIconsTextOnBackgroundAndMutedAndCard ">
                                Tertiary color for icons, text.. on background, and muted and card
                            </span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-foreground-tertiary p-0" />
                        </div>
                    </div>
                </div>

                <h2 className="w-full">Card Colors</h2>
                <div className="flex w-full flex-col items-start gap-0 p-0">
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="tokenName  font-semibold ">Token Name</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="primitiveValue  font-semibold ">Primitive value</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="usage  font-semibold ">Usage</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="sample  font-semibold ">Sample</span>
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="card ">Card</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorGray10 ">Color/Gray/10</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="backgroundColorForCard ">Background color for Card</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-white p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="hover ">Hover</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorGray200 ">Color/Gray/200</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="hoverOverCardList ">Hover over card, list </span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-card-hover p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="foregroundPrimary ">Foreground Primary</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorGray900 ">Color/Gray/900</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="primaryColorForIconsTextOnCard ">Primary color for icons, text.. on card</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-foreground p-0" />
                        </div>
                    </div>
                </div>
                <h2 className="w-full">Inverted Colors</h2>
                <div className="flex w-full flex-col items-start gap-0 p-0">
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="tokenName  font-semibold ">Token Name</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="primitiveValue  font-semibold ">Primitive value</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="usage  font-semibold ">Usage</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="sample  font-semibold ">Sample</span>
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="invertedPrimary ">Inverted Primary</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorGray900 ">Color/Gray/900</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="backgroundColorForBlackCard ">Background color for Black Card</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-[#0f0f0f] p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="invertedSecondary ">Inverted Secondary</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorGray700 ">Color/Gray/700</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="backgroundColorForBlackCard ">Background color for Black Card</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-[rgba(53,59,58,0.6)] p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="foregroundInverted ">Foreground Inverted</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorGray10 ">Color/Gray/10</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="primaryInvertedColorForIconsTextOnInverted ">Primary Inverted color for icons, text.. on Inverted</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-white p-0" />
                        </div>
                    </div>
                </div>
                <h2 className="w-full">Popover</h2>
                <div className="flex w-full flex-col items-start gap-0 p-0">
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="tokenName  font-semibold ">Token Name</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="primitiveValue  font-semibold ">Primitive value</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="usage  font-semibold ">Usage</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="sample  font-semibold ">Sample</span>
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="popover ">Popover</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorGray10 ">Color/Gray/10</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="websitecardsBackground ">Website/cards Background</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-white p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="foreground ">Foreground</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorGray900 ">Color/Gray/900</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="websitecardsBackground ">Website/cards Background</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-popover-foreground p-0" />
                        </div>
                    </div>
                </div>
                <h2 className="w-full">Disabled Colors</h2>
                <div className="flex w-full flex-col items-start gap-0 p-0">
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="tokenName  font-semibold ">Token Name</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="primitiveValue  font-semibold ">Primitive value</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="usage  font-semibold ">Usage</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="sample  font-semibold ">Sample</span>
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="disabled ">Disabled</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorGray600 ">Color/Gray/600</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="disabledTextIconAndBackground ">Disabled text, icon and background</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-border p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="foreground ">Foreground</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorGray10 ">Color/Gray/10</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="onDisabledColor ">On disabled color</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-white p-0" />
                        </div>
                    </div>
                </div>
                <h2 className="w-full">Border Colors</h2>
                <div className="flex w-full flex-col items-start gap-0 p-0">
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="tokenName  font-semibold ">Token Name</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="primitiveValue  font-semibold ">Primitive value</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="usage  font-semibold ">Usage</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="sample  font-semibold ">Sample</span>
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="borderPrimary ">Border Primary</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorGray400 ">Color/Gray/400</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="">Default border color</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-border p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="borderSecondary ">Border Secondary</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorGray300 ">Color/Gray/300</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="">Default border color</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-border-secondary p-0" />
                        </div>
                    </div>
                </div>
                <h2 className="w-full">Divider</h2>
                <div className="flex w-full flex-col items-start gap-0 p-0">
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="tokenName  font-semibold ">Token Name</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="primitiveValue  font-semibold ">Primitive value</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="usage  font-semibold ">Usage</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="sample  font-semibold ">Sample</span>
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="divider ">Divider</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorGray500 ">Color/Gray/500</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="websitecardsBackground ">Website/cards Background</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-gray-500 p-0" />
                        </div>
                    </div>
                </div>
                <h2 className="w-full">Input</h2>
                <div className="flex w-full flex-col items-start gap-0 p-0">
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="tokenName  font-semibold ">Token Name</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="primitiveValue  font-semibold ">Primitive value</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="usage  font-semibold ">Usage</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="sample  font-semibold ">Sample</span>
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="input ">Input</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorGray500 ">Color/Gray/500</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="borderColorForInputsSuchAsInputSelectTextarea ">
                                Border color for inputs such as Input, Select, Textarea
                            </span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-gray-500 p-0" />
                        </div>
                    </div>
                </div>
                <h2 className="w-full">Muted</h2>
                <div className="flex w-full flex-col items-start gap-0 p-0">
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="tokenName  font-semibold ">Token Name</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="primitiveValue  font-semibold ">Primitive value</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="usage  font-semibold ">Usage</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="sample  font-semibold ">Sample</span>
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="muted ">Muted</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorGray100 ">Color/Gray/100</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="mutedBackgroundsSuchAsTabsListSkeletonAndSwitch ">
                                Muted backgrounds such as TabsList, Skeleton and Switch
                            </span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-muted p-0" />
                        </div>
                    </div>
                </div>
                <h2 className="w-full">Success Colors</h2>
                <div className="flex w-full flex-col items-start gap-0 p-0">
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="tokenName  font-semibold ">Token Name</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="primitiveValue  font-semibold ">Primitive value</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="usage  font-semibold ">Usage</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="sample  font-semibold ">Sample</span>
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="foreground ">Foreground</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorGreen10 ">Color/Green/10</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="onSuccessColor ">On success color</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-white p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="">Container</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorGreen50 ">Color/Green/50</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="toastChipsBackground ">Toast/Chips Background</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-success-container p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="light ">Light</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorGreen300 ">Color/Green/300</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="hoverOverColor ">Hover over container color</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-success-light p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="success ">Success</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorGreen500 ">Color/Green/500</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="theDefaultmainColor ">The default/main color </span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-success p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="">Dark</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="">Color/Green/700</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="">Hover over main of default color</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-success-dark p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="onContainer ">On Container</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorGreen900 ">Color/Green/900</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="textIconsOnBackground ">Text/Icons on Background</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-success-oncontainer p-0" />
                        </div>
                    </div>
                </div>
                <h2 className="w-full">Error Colors</h2>
                <div className="flex w-full flex-col items-start gap-0 p-0">
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="tokenName  font-semibold ">Token Name</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="primitiveValue  font-semibold ">Primitive value</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="usage  font-semibold ">Usage</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="sample  font-semibold ">Sample</span>
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="foreground ">Foreground</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorRed10 ">Color/Red/10</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="onReadError ">On read error</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-white p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="">Container</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorRed50 ">Color/Red/50</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="toastChipsBackground ">Toast/Chips Background</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-error-container p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="light ">Light</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorRed300 ">Color/Red/300</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="hoverOverColor ">Hover over container color</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-error-light p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="error ">Error</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorRed500 ">Color/Red/500</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="theDefaultmainColor ">The default/main color </span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-error p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="dark ">Dark</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorRed700 ">Color/Red/700</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="hoverOverMainOfDefaultColor ">Hover over main of default color</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-error-dark p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="onContainer ">On Container</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorRed900 ">Color/Red/900</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="textIconsOnBackground ">Text/Icons on Background</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-error-oncontainer p-0" />
                        </div>
                    </div>
                </div>
                <h2 className="w-full">Warning Colors</h2>
                <div className="flex w-full flex-col items-start gap-0 p-0">
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="tokenName  font-semibold ">Token Name</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="primitiveValue  font-semibold ">Primitive value</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="usage  font-semibold ">Usage</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="sample  font-semibold ">Sample</span>
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="foreground ">Foreground</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorMarigold10 ">Color/Marigold/10</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="onWarningColor ">On warning color</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-white p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="">Container</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorMarigold50 ">Color/Marigold/50</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="toastChipsBackground ">Toast/Chips Background</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-warning-container p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="light ">Light</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorMarigold300 ">Color/Marigold/300</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="hoverOverColor ">Hover over container color</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-warning-light p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="warning ">Warning</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorMarigold500 ">Color/Marigold/500</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="theDefaultmainColor ">The default/main color </span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-warning p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="dark ">Dark</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorMarigold700 ">Color/Marigold/700</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="hoverOverMainOfDefaultColor ">Hover over main of default color</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-warning-dark p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="onContainer ">On Container</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorMarigold900 ">Color/Marigold/900</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="textIconsOnBackground ">Text/Icons on Background</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-warning-oncontainer p-0" />
                        </div>
                    </div>
                </div>
                <h2 className="w-full">Info Colors</h2>
                <div className="frame14 flex w-full flex-col items-start gap-0 p-0">
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="tokenName  font-semibold ">Token Name</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="primitiveValue  font-semibold ">Primitive value</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="usage  font-semibold ">Usage</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="sample  font-semibold ">Sample</span>
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="foreground ">Foreground</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorBlue10 ">Color/Blue/10</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="onInfoColor ">On info color</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-white p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="">Container</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorBlue50 ">Color/Blue/50</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="toastChipsBackground ">Toast/Chips Background</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-info-container p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="light ">Light</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorBlue300 ">Color/Blue/300</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="hoverOverColor ">Hover over container color</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-info-light p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="info ">Info</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorBlue500 ">Color/Blue/500</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="theDefaultmainColor ">The default/main color </span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-info p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="dark ">Dark</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorBlue700 ">Color/Blue/700</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="hoverOverMainOfDefaultColor ">Hover over main of default color</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-info-dark p-0" />
                        </div>
                    </div>
                    <div className="row flex w-full flex-row  gap-0 p-0">
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="onContainer ">On Container</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="colorBlue900 ">Color/Blue/900</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <span className="textIconsOnBackground ">Text/Icons on Background</span>
                        </div>
                        <div className="w-1/4 border border-border p-space-04">
                            <div className=" relative h-16 w-16 overflow-hidden rounded-full border border-border bg-info-oncontainer p-0" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColorToken
