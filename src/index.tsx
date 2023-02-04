import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import Header from './components/Header'
import './index.css'
const container = document.getElementById('app-root')!
const root = createRoot(container)

root.render(
    <React.StrictMode>
        <Header />
        <App />
    </React.StrictMode>
)