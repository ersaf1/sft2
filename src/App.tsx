import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home.tsx'
import About from './pages/About'
import Members from './pages/Members'
import Gallery from './pages/Gallery'

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/members" element={<Members />} />
                    <Route path="/gallery" element={<Gallery />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
