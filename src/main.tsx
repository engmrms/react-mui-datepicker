/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './Assets/css/Shared.css'

let root: ReactDOM.Root | null = null

const container = document.getElementById('root')

if (container) {
    if (!root) {
        root = ReactDOM.createRoot(container)
    }

    root.render(
        <React.StrictMode>
            <h1 className="text-black">Hello</h1>
        </React.StrictMode>,
    )
}
