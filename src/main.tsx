import React from 'react'
import ReactDOM from 'react-dom/client'
import './Assets/css/Shared.css'

import { Check } from 'google-material-icons/outlined'
import { Badge, Link, Stack, Switch } from './Components'
import { Button } from './Components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './Components/ui/tooltip'

const App = () => {
    return (
        <Stack direction={'col'}>
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
            <Switch  disabled/>
            <Link colors={"primary"} href='#' disabled  >link sample</Link>
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
