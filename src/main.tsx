/* eslint-disable react-hooks/exhaustive-deps */
import { Check, Home, Person, WbSunny } from 'google-material-icons/outlined'
import React, { useCallback, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, NavLink } from 'react-router-dom'
import './Assets/css/Shared.css'
import vission from './Assets/images/logos/vision_neutral.svg'
import {
    ActionLoader,
    Badge,
    Breadcrumbs,
    ComboboxControl,
    FileInfo,
    FileUpload,
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
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
    NavigationMenuViewport,
    NavigationSearch,
    NavigationSwitchLanguage,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Sheet,
    SheetBody,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    Stack,
    Switch,
    toast,
} from './Components'
import { Button } from './Components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './Components/ui/tooltip'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Label, Pie, PieChart } from 'recharts'
import { useToggle } from 'usehooks-ts'
import { z } from 'zod'
import { FilterGroup, FilterSelect } from './Components/Filter'
import { Footer } from './Components/Footer'
import { SecondNavHeader, SecondNavHeaderAction, SecondNavHeaderContent } from './Components/SecondNavHeader'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './Components/ui/charts'
import {
    Bootstrap,
    ChartConfig,
    MultiSelect,
    navigationMenuTriggerStyle,
    NavigationMobileHeader,
    NavigationMobileLink,
    NavigationMobileSideBar,
    Step,
    StepDescription,
    Stepper,
    StepTitle,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from './package'

const FormSchema = z.object({
    email: z
        .string({
            required_error: 'Please select an email to display.',
        })
        .email(),
    language: z.string(),
})
interface Languages {
    label: string
    value: string
}
const acceptedFormats = {
    'image/png': ['.png'],
    'image/jpeg': ['.jpg', '.jpeg'],
    'application/pdf': ['.pdf'],
}

const languages: Languages[] = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'de' },
    { label: 'Spanish', value: 'es' },
    { label: 'Portuguese', value: 'pt' },
    { label: 'Russian', value: 'ru' },
    { label: 'Japanese', value: 'ja' },
    { label: 'Korean', value: 'ko' },
    { label: 'Chinese', value: 'zh' },
    { label: 'Arabic', value: 'ar' },
    { label: 'Ordo', value: 'or' },
]

const menuItems = [
    {
        title: 'Item 7',
        href: '#',
        items: [
            {
                title: 'Sub Item 1',
                href: '#',
                description: 'Description for sub item 1',
            },
            {
                title: 'Sub Item 2',
                href: '#',
                description: 'Description for sub item 2',
            },
        ],
    },
    {
        title: 'Item 6',
        href: 'item6',
        items: [],
    },
    {
        title: 'Item 5',
        href: 'item5',
        items: [],
    },
    {
        title: 'Item 4',
        href: 'item4',
        items: [],
    },
    {
        title: 'Item 3',
        href: 'item3',
        items: [],
    },
    {
        title: 'Item 2',
        href: 'item2',
        items: [],
    },
    {
        title: 'Item 1',
        href: 'item1',
        items: [],
    },
]

const mockData = Array.from({ length: 3000 }, (_, i) => ({
    value: i,
    label: `Item ${i} - ${Math.random().toString(36).substring(2, 8)}`,
}))

const Header = () => {
    const [open, toggle, setToggle] = useToggle()
    return (
        <>
            <SecondNavHeader>
                <SecondNavHeaderContent />
                <SecondNavHeaderAction />
            </SecondNavHeader>
            <NavigationHeader divider>
                <NavigationMain collapsed={open} onToggleCollapsed={toggle}>
                    <NavigationHeaderLogo logoSrc={vission} logoAlt="logo" />
                    <NavigationMenu className="">
                        <NavigationMenuList>
                            {[...menuItems].reverse().map(m => (
                                <NavigationMenuItem key={m.title}>
                                    {m.items.length > 0 ? (
                                        <>
                                            <NavigationMenuTrigger>{m.title}</NavigationMenuTrigger>
                                            <NavigationMenuContent className="">
                                                <ul className="one m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[800px] sm:grid-cols-[0.75fr_1fr]">
                                                    {m.items.map(subItem => (
                                                        <li key={subItem.title} className="row-span-3 grid">
                                                            <NavigationMenuLink asChild>
                                                                <Link to={subItem.href} className="flex select-none flex-col space-y-1 ">
                                                                    <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                        {subItem.description}
                                                                    </p>
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <NavigationMenuLink asChild>
                                            <NavLink to={m.href}>{m.title}</NavLink>
                                        </NavigationMenuLink>
                                    )}
                                </NavigationMenuItem>
                            ))}
                            <NavigationMenuIndicator />
                        </NavigationMenuList>

                        <NavigationMenuViewport />
                    </NavigationMenu>
                </NavigationMain>

                <NavigationActions>
                    <NavigationSwitchLanguage />
                    <NavigationSearch onSearch={v => console.log(v)}>
                        <h1>Suggestion</h1>
                    </NavigationSearch>
                    <NavLink to="login" className={navigationMenuTriggerStyle()}>
                        {' '}
                        <Person /> <span>login</span>{' '}
                    </NavLink>
                </NavigationActions>
            </NavigationHeader>
            <NavigationMobileSideBar open={open} onOpenChange={open => setToggle(open)}>
                <NavigationMobileHeader>
                    <NavigationHeaderLogo logoSrc={vission} logoAlt="logo" />
                </NavigationMobileHeader>

                <NavigationMobileLink asChild>
                    <NavLink to={'m.href'}>{'m.title'}</NavLink>
                </NavigationMobileLink>
            </NavigationMobileSideBar>
        </>
    )
}

const App = () => {
    const [selectedValues, setSelectedValues] = useState<number[]>([])
    const handleFileSelect = useCallback(
        (
            selectedFiles: FileInfo[],
            updateCallback: (id: string, progress: number, status: 'uploading' | 'success' | 'error', error?: string) => void,
        ) => {
            // Here you would typically handle the file upload process
            // For this example, we'll simulate the upload process
            selectedFiles.forEach(file => {
                let progress = 0
                const interval = setInterval(() => {
                    progress += 10
                    updateCallback(file.id, progress, 'uploading')
                    console.log(`Uploading ${file.file.name}: ${progress}%`)
                    if (progress >= 100) {
                        clearInterval(interval)
                        updateCallback(file.id, 100, 'success')
                        console.log(`${file.file.name} upload complete`)
                    }
                }, 500)

                // Simulate random error
                // if (Math.random() < 0.2) {
                //     // 20% chance of error
                //     setTimeout(() => {
                //         clearInterval(interval)
                //         updateCallback(fileId, progress, 'error', 'Upload failed')
                //         console.log(`${file.name} upload failed`)
                //     }, 2000)
                // }
            })
        },
        [],
    )

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: 'You submitted the following values:',
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <Bootstrap>
            <Header />

            <Stack direction={'col'} className="p-space-06">
            <Stepper activeStep={3} orientation={"horizontal"}  >
                <Step>
                    <StepTitle>first</StepTitle>
                    <StepDescription>first description first description first description</StepDescription>
                </Step>
                <Step>
                    <StepTitle>second</StepTitle>
                    <StepDescription>second description second description second description</StepDescription>
                </Step>
                <Step>
                    <StepTitle>third</StepTitle>
                    <StepDescription>third description third description third description</StepDescription>
                </Step>
                <Step>
                    <StepTitle>fourth</StepTitle>
                    <StepDescription>fourth description fourth description fourth description</StepDescription>
                </Step>
                <Step>
                    <StepTitle>sixth</StepTitle>
                    <StepDescription>sixth description sixth description sixth description</StepDescription>
                </Step>
                <Step>
                    <StepTitle>seventh</StepTitle>
                    <StepDescription>seventh description seventh description seventh description</StepDescription>
                </Step>
            </Stepper>
                <ComponentPie />
                <MultiSelect
                    options={mockData}
                    selectedValues={selectedValues}
                    onChange={(values: number[]) => {
                        setSelectedValues(prev => [...prev, ...values])
                    }}
                    placeholder={'select'}
                />

                {/* <ChartContainer config={chartConfig} className="min-h-[100px] w-full">
                    <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
    />
      <ChartTooltip content={<ChartTooltipContent />} />
      <ChartLegend content={<ChartLegendContent />} />
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                    </BarChart>
                </ChartContainer> */}

                <Button size={'icon-sm'} tooltip="change color" variant={'text'} colors={'primary'}>
                    <WbSunny />
                </Button>
                <FilterGroup onValueChange={v => console.log('main', v)} className="flex gap-space-03 ">
                    <FilterSelect
                        defaultOpen
                        name="test"
                        placeholder="select"
                        data={[
                            { value: '1', label: 'label1' },
                            { value: '2', label: 'label2' },
                            { value: '3', label: 'label3' },
                            { value: '4', label: 'label4' },
                        ]}
                    />
                    <FilterSelect
                        name="test2"
                        multi
                        placeholder="select"
                        data={[
                            { value: '1', label: 'multi1' },
                            { value: '2', label: 'multi2' },
                            { value: '3', label: 'multi3' },
                            { value: '4', label: 'multi4' },
                        ]}
                    />
                </FilterGroup>

                <ActionLoader />
                <h1 className="shadow-md">Tetco Design System</h1>
                <Stack className="flex-wrap p-space-03">
                    <Button variant={'text'} size={'sm'} colors={'primary'}>
                        <Check />
                        <span>Button</span>
                        <Check />
                    </Button>
                    <Button variant={'text'} size={'sm'} colors={'error'}>
                        <Check />
                        <span>Button</span>
                        <Check />
                    </Button>
                    <Button variant={'text'} size={'sm'} colors={'oncolor'}>
                        <Check />
                        <span>Button</span>
                        <Check />
                    </Button>
                    <Button variant={'text'} size={'sm'} colors={'neutral'}>
                        <Check />
                        <span>Button</span>
                        <Check />
                    </Button>
                </Stack>

                <Breadcrumbs
                    items={[
                        { path: 'dsdssfsd', title: 'sdfds1' },
                        { render: <p>dsdfdsfsdfs</p>, title: 'sdfds2' },
                        { render: <p>dsdfdsfsdfs</p>, title: 'sdfds3' },
                        { render: <p>dsdfdsfsdfs</p>, title: 'sdfds4' },
                        { render: <p>dsdfdsfsdfs</p>, title: 'sdfds5' },
                        { render: <p>dsdfdsfsdfs</p>, title: 'sdfds6' },
                    ]}
                />

                <Stack className="p-space-03">
                    <Badge variant={'ghost'} size={'xs'} colors={'gray'}>
                        <Check />
                        <span>Badge</span>
                        <Check />
                    </Badge>
                </Stack>
                <div>
                    <Switch id="airplane-mode" />

                    {/* <Label htmlFor="airplane-mode">Airplane Mode</Label> */}
                </div>

                <Tabs dir={'ltr'} defaultValue="tab1">
                    <TabsList variant={'underline'} underline>
                        <TabsTrigger value="tab1">
                            <Home />
                            tab1
                        </TabsTrigger>
                        <TabsTrigger value="tab2">
                            <Home />
                            tab2
                        </TabsTrigger>
                        <TabsTrigger value="tab3">
                            <Home />
                            tab3
                        </TabsTrigger>
                        <TabsTrigger value="tab4">
                            <Home />
                            tab4
                        </TabsTrigger>
                        <TabsTrigger value="tab5">
                            <Home />
                            tab5
                        </TabsTrigger>
                        <TabsTrigger value="tab6">
                            <Home />
                            tab6
                        </TabsTrigger>
                        <TabsTrigger value="tab7">
                            <Home />
                            tab7
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="tab1">...</TabsContent>
                    <TabsContent value="tab2">...</TabsContent>
                    <TabsContent value="tab3">...</TabsContent>
                    <TabsContent value="tab4">...</TabsContent>
                    <TabsContent value="tab5">...</TabsContent>
                    <TabsContent value="tab6">... tab6</TabsContent>
                    <TabsContent value="tab7">...</TabsContent>
                </Tabs>

                <div className="mt-space-05 p-space-06">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline">Hover</Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <span>Add to library</span>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <Sheet>
                        <SheetTrigger>Openn</SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Are you absolutely sure?</SheetTitle>
                            </SheetHeader>
                            <SheetBody>
                                <SheetDescription>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deleniti quibusdam sed voluptatibus obcaecati
                                    nesciunt animi qui, pariatur omnis amet non commodi perferendis voluptatem possimus eveniet autem voluptate
                                    explicabo soluta! Fugit nesciunt, cupiditate unde qui illo ullam totam voluptatum sed modi delectus enim eveniet
                                    possimus saepe quod quae eum a dolorum nesciunt soluta.
                                </SheetDescription>
                                <Sheet>
                                    <SheetTrigger>Open</SheetTrigger>
                                    <SheetContent hideOverlay>
                                        <SheetHeader>
                                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                                        </SheetHeader>
                                        <SheetBody>
                                            <SheetDescription>
                                                This action cannot be undone. This will permanently delete your account and remove your data from our
                                                servers.
                                            </SheetDescription>
                                        </SheetBody>
                                    </SheetContent>
                                </Sheet>
                            </SheetBody>
                        </SheetContent>
                    </Sheet>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a verified email to display" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="m@example.com">m@example.com</SelectItem>
                                            <SelectItem value="m@google.com">m@google.com</SelectItem>
                                            <SelectItem value="m@support.com">m@support.com</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>You can manage email addresses in your </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="language"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Language</FormLabel>

                                    <ComboboxControl
                                        options={languages}
                                        optionLabel="label"
                                        optionValue="value"
                                        placeholder="select"
                                        onChange={vale => field.onChange(vale)}
                                        value={field.value}
                                    />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
                <FileUpload acceptedFormats={acceptedFormats} onFileSelect={handleFileSelect} maxFiles={2} />
            </Stack>

            <Footer
                socialMediaTitle={' Social Media'}
                socialMediaLinks={[
                    {
                        title: 'facebook',
                        icon: (
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.943526 1.21547C1.05038 1.00649 1.2653 0.875 1.5 0.875H5.66667C5.86736 0.875 6.05584 0.971373 6.17334 1.13407L10.2867 6.82945L16.0581 1.05806C16.3021 0.813981 16.6979 0.813981 16.9419 1.05806C17.186 1.30214 17.186 1.69786 16.9419 1.94194L11.028 7.85589L17.0067 16.1341C17.1441 16.3243 17.1633 16.5756 17.0565 16.7845C16.9496 16.9935 16.7347 17.125 16.5 17.125H12.3333C12.1326 17.125 11.9442 17.0286 11.8267 16.8659L7.71333 11.1706L1.94194 16.9419C1.69787 17.186 1.30214 17.186 1.05806 16.9419C0.813983 16.6979 0.813983 16.3021 1.05806 16.0581L6.97201 10.1441L0.993328 1.86593C0.85591 1.67566 0.836676 1.42444 0.943526 1.21547ZM2.72235 2.125L12.6529 15.875H15.2777L5.3471 2.125H2.72235Z"
                                    fill="white"></path>
                            </svg>
                        ),
                        target: './facebook',
                    },
                    {
                        title: 'X',
                        icon: (
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.943526 1.21547C1.05038 1.00649 1.2653 0.875 1.5 0.875H5.66667C5.86736 0.875 6.05584 0.971373 6.17334 1.13407L10.2867 6.82945L16.0581 1.05806C16.3021 0.813981 16.6979 0.813981 16.9419 1.05806C17.186 1.30214 17.186 1.69786 16.9419 1.94194L11.028 7.85589L17.0067 16.1341C17.1441 16.3243 17.1633 16.5756 17.0565 16.7845C16.9496 16.9935 16.7347 17.125 16.5 17.125H12.3333C12.1326 17.125 11.9442 17.0286 11.8267 16.8659L7.71333 11.1706L1.94194 16.9419C1.69787 17.186 1.30214 17.186 1.05806 16.9419C0.813983 16.6979 0.813983 16.3021 1.05806 16.0581L6.97201 10.1441L0.993328 1.86593C0.85591 1.67566 0.836676 1.42444 0.943526 1.21547ZM2.72235 2.125L12.6529 15.875H15.2777L5.3471 2.125H2.72235Z"
                                    fill="white"></path>
                            </svg>
                        ),
                        target: './facebook',
                    },
                    {
                        title: 'linkedin',
                        icon: (
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.943526 1.21547C1.05038 1.00649 1.2653 0.875 1.5 0.875H5.66667C5.86736 0.875 6.05584 0.971373 6.17334 1.13407L10.2867 6.82945L16.0581 1.05806C16.3021 0.813981 16.6979 0.813981 16.9419 1.05806C17.186 1.30214 17.186 1.69786 16.9419 1.94194L11.028 7.85589L17.0067 16.1341C17.1441 16.3243 17.1633 16.5756 17.0565 16.7845C16.9496 16.9935 16.7347 17.125 16.5 17.125H12.3333C12.1326 17.125 11.9442 17.0286 11.8267 16.8659L7.71333 11.1706L1.94194 16.9419C1.69787 17.186 1.30214 17.186 1.05806 16.9419C0.813983 16.6979 0.813983 16.3021 1.05806 16.0581L6.97201 10.1441L0.993328 1.86593C0.85591 1.67566 0.836676 1.42444 0.943526 1.21547ZM2.72235 2.125L12.6529 15.875H15.2777L5.3471 2.125H2.72235Z"
                                    fill="white"></path>
                            </svg>
                        ),
                        target: './facebook',
                    },
                    {
                        title: 'instegram',
                        icon: (
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.943526 1.21547C1.05038 1.00649 1.2653 0.875 1.5 0.875H5.66667C5.86736 0.875 6.05584 0.971373 6.17334 1.13407L10.2867 6.82945L16.0581 1.05806C16.3021 0.813981 16.6979 0.813981 16.9419 1.05806C17.186 1.30214 17.186 1.69786 16.9419 1.94194L11.028 7.85589L17.0067 16.1341C17.1441 16.3243 17.1633 16.5756 17.0565 16.7845C16.9496 16.9935 16.7347 17.125 16.5 17.125H12.3333C12.1326 17.125 11.9442 17.0286 11.8267 16.8659L7.71333 11.1706L1.94194 16.9419C1.69787 17.186 1.30214 17.186 1.05806 16.9419C0.813983 16.6979 0.813983 16.3021 1.05806 16.0581L6.97201 10.1441L0.993328 1.86593C0.85591 1.67566 0.836676 1.42444 0.943526 1.21547ZM2.72235 2.125L12.6529 15.875H15.2777L5.3471 2.125H2.72235Z"
                                    fill="white"></path>
                            </svg>
                        ),
                        target: './facebook',
                    },
                ]}
                groupLinks={[
                    {
                        title: 'Overview',
                        links: [
                            { href: '', label: 'about' },
                            { href: '', label: 'Privacy and terms of use' },
                            { href: '', label: 'News and events' },
                        ],
                    },
                    {
                        title: 'Important links',
                        links: [
                            { href: '', label: 'National service portal' },
                            { href: '', label: 'Open government data' },
                            { href: '', label: 'National strategy for data & Artificial intelligence' },
                            { href: '', label: 'Open data portal' },
                        ],
                    },
                    {
                        title: 'Contact & support',
                        links: [
                            { href: '', label: 'Customer hub' },
                            { href: '', label: 'Contact us' },
                            { href: '', label: 'Engage with Us' },
                            { href: '', label: 'Report corruption' },
                            { href: '', label: 'Submit complaint' },
                        ],
                    },
                ]}
                basicLinks={[
                    { label: 'about', render: <Link to="./about">about</Link> },
                    { label: 'sitemap', render: <Link to="./about">about</Link> },
                    { label: 'sitemap2', render: <Link to="./about">about</Link> },
                    { label: 'sitemap3', render: <Link to="./about">about</Link> },
                    { label: 'sitemap4', render: <Link to="./about">about</Link> },
                    { label: 'Mobile App', href: '/app' },
                ]}
                extraLinks={[
                    { href: '', label: 'Terms and conditions' },
                    { href: '', label: 'Privacy Policy ' },
                ]}
                showGroupLinks
                colors="default"
                bottomImages={[
                    <div key={'dgacert'} className="w-space-12">
                        <a href="http://raqmi.dga.gov.sa/platforms/DigitalStamp/ShowCertificate/6122">
                            <img className="raqmi m-0" src="http://raqmi.dga.gov.sa/platforms/DigitalStamp/GetStampWFile/3523" alt="raqmi" />
                        </a>
                    </div>,
                ]}
            />
        </Bootstrap>
    )
}

let root: ReactDOM.Root | null = null

const container = document.getElementById('root')

if (container) {
    if (!root) {
        root = ReactDOM.createRoot(container)
    }

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>,
    )
}

function ComponentPie() {
    const chartData = [
        { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
        { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
        { browser: 'firefox', visitors: 287, fill: 'var(--color-firefox)' },
    ]

    const chartConfig = {
        visitors: {
            label: 'Visitors',
        },
        chrome: {
            label: 'Chrome',
            color: 'var(--primary)',
        },
        safari: {
            label: 'Safari',
            color: 'var(--secondary)',
        },
        firefox: {
            label: 'Firefox',
            color: 'var(--primary-light)',
        },
    } satisfies ChartConfig

    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
    }, [chartData])

    return (
        <ChartContainer config={chartConfig} className="mx-auto aspect-square h-[250px]">
            <PieChart>
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                {/* <ChartLegend content={<ChartLegendContent  />} /> */}
                <Pie data={chartData} dataKey="visitors" nameKey="browser" innerRadius={60} strokeWidth={5} outerRadius={80}>
                    <Label
                        content={({ viewBox }) => {
                            if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                                return (
                                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                                            {totalVisitors.toLocaleString()}
                                        </tspan>
                                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                                            Visitors
                                        </tspan>
                                    </text>
                                )
                            }
                            return null
                        }}
                    />
                </Pie>
            </PieChart>
        </ChartContainer>
    )
}
