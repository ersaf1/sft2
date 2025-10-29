import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const getInitialTheme = () => {
        try {
            const stored = localStorage.getItem('theme')
            if (stored) return stored
            // if user has no stored preference, use system preference
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                return 'eseftwo-light'
            }
            return 'minimalist'
        } catch {
            return 'minimalist'
        }
    }

    const [theme, setTheme] = useState(getInitialTheme)
    const location = useLocation()

    useEffect(() => {
        // apply stored theme on mount
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    const toggleTheme = () => {
        // two-state toggle: white (eseftwo-light) <-> dark (minimalist)
        const newTheme = theme === 'eseftwo-light' ? 'minimalist' : 'eseftwo-light'
        setTheme(newTheme)
        try {
            localStorage.setItem('theme', newTheme)
        } catch {}
        document.documentElement.setAttribute('data-theme', newTheme)
    }

    // small helper to show tooltip text including whether system prefers light/dark
    const systemPrefersLight = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
    const tooltipText = theme === 'eseftwo-light'
        ? `Mode: Terang${systemPrefersLight ? ' (dipilih oleh sistem)' : ''}`
        : `Mode: Gelap${!systemPrefersLight ? ' (dipilih oleh sistem)' : ''}`

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
                        <li><Link to="/gallery" className={isActive('/gallery') ? 'active' : ''}>Galeri</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost gap-2 items-center hover:scale-105 transition-transform">
                    <img src="/sft.svg" alt="SFT logo" className="h-14 md:h-16 w-auto" />
                    <div className="hidden sm:block">
                        <span className="gradient-text text-2xl font-black">ESEFTWO</span>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
                    <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>Tentang</Link></li>
                    <li><Link to="/members" className={isActive('/members') ? 'active' : ''}>Anggota</Link></li>
                    <li><Link to="/gallery" className={isActive('/gallery') ? 'active' : ''}>Galeri</Link></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <button
                    onClick={toggleTheme}
                    aria-label="Toggle light/dark theme"
                    title={tooltipText}
                    aria-pressed={theme === 'eseftwo-light'}
                    className="btn btn-ghost btn-circle simple-border hover:scale-105 transition-transform"
                >
                    {theme === 'eseftwo-light' ? (
                        // Sun icon for light mode
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zM1 13h3v-2H1v2zm10-9h2V1h-2v3zm7.03 1.05l1.79-1.79-1.79-1.79-1.79 1.79 1.79 1.79zM17 13h3v-2h-3v2zM12 6a6 6 0 100 12 6 6 0 000-12zm4.24 13.16l1.8 1.79 1.79-1.79-1.79-1.79-1.8 1.79zM12 23h2v-3h-2v3zM4.24 18.36l-1.8 1.79L4.43 21.94l1.8-1.79-1.99-1.79z" />
                        </svg>
                    ) : (
                        // Moon icon for dark mode
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    )
}

export default Navbar
