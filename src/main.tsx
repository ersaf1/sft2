import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import Splash from './components/Splash'
import './index.css'

function Root() {
    const [showSplash, setShowSplash] = useState(true)

    useEffect(() => {
    // Minimum splash time; set to 5000ms (5 seconds)
    const t = setTimeout(() => setShowSplash(false), 5000)
        return () => clearTimeout(t)
    }, [])

    if (showSplash) return <Splash />

    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>,
)
