/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './Assets/css/Shared.css'
import { App } from './app'

let root: ReactDOM.Root | null = null

const container = document.getElementById('root')

if (container) {
    if (!root) {
        root = ReactDOM.createRoot(container)
    }

    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    )
}
