import React from 'react'
import ReactDOM from 'react-dom/client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from './Components/ui/tabs'

export function TabsDemo() {
    return (
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <div>Tab 1 </div>
            </TabsContent>
            <TabsContent value="password">
                <div>Tab 2</div>
            </TabsContent>
        </Tabs>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div>
            <TabsDemo />
        </div>
    </React.StrictMode>,
)
