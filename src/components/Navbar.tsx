import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [theme, setTheme] = useState('minimalist')
    const location = useLocation()

    const toggleTheme = () => {
        const themes = ['minimalist', 'dracula', 'cyberpunk', 'night']
        const currentIndex = themes.indexOf(theme)
        const newTheme = themes[(currentIndex + 1) % themes.length]
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
    }

    const isActive = (path: string) => location.pathname === path

    return (
        <div className="navbar glass-effect sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
                        <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>Tentang</Link></li>
                        <li><Link to="/members" className={isActive('/members') ? 'active' : ''}>Anggota</Link></li>
                        <li><Link to="/projects" className={isActive('/projects') ? 'active' : ''}>Proyek</Link></li>
                        <li><Link to="/gallery" className={isActive('/gallery') ? 'active' : ''}>Galeri</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost gap-2 items-center hover:scale-105 transition-transform">
                    <img src="/sft.svg" alt="SFT logo" className="h-14 md:h-16 w-auto" />
                    <div className="hidden sm:block">
                        <span className="gradient-text text-2xl font-black">eseftwo</span>
                        <span className="text-accent ml-2 font-bold text-sm block">PPLG 2</span>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
                    <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>Tentang</Link></li>
                    <li><Link to="/members" className={isActive('/members') ? 'active' : ''}>Anggota</Link></li>
                    <li><Link to="/projects" className={isActive('/projects') ? 'active' : ''}>Proyek</Link></li>
                    <li><Link to="/gallery" className={isActive('/gallery') ? 'active' : ''}>Galeri</Link></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <button onClick={toggleTheme} className="btn btn-ghost btn-circle simple-border hover:scale-105 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Navbar
