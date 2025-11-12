import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import Splash from './components/Splash'
import './index.css'

function Root() {
    const [showSplash, setShowSplash] = useState(true)

    useEffect(() => {
        // Fallback: hide splash after 8 seconds in case video fails to play
        const t = setTimeout(() => setShowSplash(false), 8000)
        return () => clearTimeout(t)
    }, [])

    if (showSplash) return <Splash onFinish={() => setShowSplash(false)} />

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
