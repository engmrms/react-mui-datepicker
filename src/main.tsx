import React from 'react'
import ReactDOM from 'react-dom/client'
import './Assets/css/Shared.css'

import { Check, Home } from 'google-material-icons/outlined'
import { ActionLoader, Badge, Link, Stack, Switch, Tabs, TabsContent, TabsList, TabsTrigger } from './Components'
import { Button } from './Components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './Components/ui/tooltip'

const App = () => {
    return (
        <Stack direction={'col'} className='p-space-06'>
            <ActionLoader/>
            <h1 className="shadow-md">Tetco Design System</h1>
            <Stack className="p-space-03">
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


            <Stack className="p-space-03">
                <Badge variant={'ghost'} size={'sm'} colors={'gray'}>
                    <Check />
                    <span>Badge</span>
                    <Check />
                </Badge>
            </Stack>
            <Switch disabled />

            <Tabs dir={'ltr'} defaultValue="tab1" className="w-[400px]">
                <TabsList variant={'underline'} breakpoints={{ 768: 3, 1024: 4 }}>
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
            <Link colors={'primary'} href="#" disabled>
                link sample
            </Link>
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
            </div>
        </Stack>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
