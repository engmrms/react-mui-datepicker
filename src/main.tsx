import React from 'react'
import ReactDOM from 'react-dom/client'
import './Assets/css/Shared.css'

import { Stack, Switch } from './Components'
import { Button } from './Components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './Components/ui/tooltip'

const App = () => {
    return (
        <Stack direction={'col'}>
            <h1 className="shadow-md">Tetco Design System</h1>
            <Switch/>
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

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>)
