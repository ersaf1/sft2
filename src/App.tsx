import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedPage from './components/AnimatedPage'
import Home from './pages/Home.tsx'
import About from './pages/About'
import Members from './pages/Members'
import Gallery from './pages/Gallery'

function App() {
    const location = useLocation()

    return (
        <div className="min-h-screen flex flex-col">
            {/* Subtle moving accent behind app (matches splash video colors) */}
            <div className="video-accent" aria-hidden="true" />
            {/* Background particles global untuk mode terang */}
            <div className="global-bg-particles">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
                <div className="particle particle-4"></div>
            </div>
            
            <Navbar />
            <main className="flex-grow">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
                        <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
                        <Route path="/members" element={<AnimatedPage><Members /></AnimatedPage>} />
                        <Route path="/gallery" element={<AnimatedPage><Gallery /></AnimatedPage>} />
                    </Routes>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    )
}

export default App
