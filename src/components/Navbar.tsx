import { useState, useEffect } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

// ************************************
// * 1. Definisi Komponen & Hooks
// ************************************

const getInitialTheme = () => {
    try {
        const stored = localStorage.getItem('theme');
        if (stored) return stored;
        
        // Cek preferensi sistem, default ke 'eseftwo-light' (mode terang) jika sistem memilih terang
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return 'eseftwo-light';
        }
        
        // Default mode gelap (minimalist)
        return 'minimalist';
    } catch {
        return 'minimalist';
    }
}

// Original letter-by-letter framer-motion brand (simple staggered jump)
const IntroBrand: React.FC = () => {
    const TITLE = 'ESEFTWO';
    const shouldReduce = useReducedMotion();

    if (shouldReduce) {
        return <span className="gradient-text text-2xl md:text-3xl lg:text-4xl font-black leading-none tracking-tight font-iceland">{TITLE}</span>;
    }

    const container = {
        initial: {},
        animate: { transition: { staggerChildren: 0.06 } },
    } as const;

    const letter: any = {
        initial: { y: 0 },
        animate: {
            y: [0, -8, 0],
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <motion.span
            className="gradient-text brand-title text-2xl md:text-4xl lg:text-5xl font-black leading-none tracking-tight font-iceland"
            aria-label="E S F T W O"
            initial="initial"
            animate="animate"
            variants={container}
            style={{ display: 'inline-block' }}
        >
            {TITLE.split('').map((ch, i) => (
                <motion.span
                    key={i}
                    variants={letter}
                    className="inline-block"
                    style={{ display: 'inline-block' }}
                    aria-hidden
                >
                    {ch}
                </motion.span>
            ))}
        </motion.span>
    );
};

const Navbar = () => {
    // State untuk tema saat ini
    const [theme, setTheme] = useState(getInitialTheme);
    const location = useLocation();

    // ************************************
    // * 2. Efek Samping (Side Effects)
    // ************************************

    useEffect(() => {
        // Terapkan tema yang tersimpan/default ke elemen <html> pada saat mount
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    // ************************************
    // * 3. Fungsi Toggle Tema
    // ************************************

    const toggleTheme = () => {
        // Logika untuk berganti tema
        const newTheme = theme === 'eseftwo-light' ? 'minimalist' : 'eseftwo-light';
        setTheme(newTheme);
        
        try {
            localStorage.setItem('theme', newTheme);
        } catch {}
        
        document.documentElement.setAttribute('data-theme', newTheme);
    }

    // Helper untuk teks tooltip
    const systemPrefersLight = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    const tooltipText = theme === 'eseftwo-light'
        ? `Mode: Terang${systemPrefersLight ? ' (dipilih oleh sistem)' : ''}`
        : `Mode: Gelap${!systemPrefersLight ? ' (dipilih oleh sistem)' : ''}`;

    // Helper untuk menentukan item navigasi yang aktif
    const isActive = (path: string) => location.pathname === path;

    // ************************************
    // * 4. Struktur JSX (Tampilan Navbar)
    // ************************************
    
    return (
        <div className="navbar glass-effect sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-lg btn-square lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link></li>
                        <li><Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>Tentang</Link></li>
                        <li><Link to="/members" className={`nav-link ${isActive('/members') ? 'active' : ''}`}>Anggota</Link></li>
                        <li><Link to="/schedule" className={`nav-link ${isActive('/schedule') ? 'active' : ''}`}>Jadwal</Link></li>
                        <li><Link to="/gallery" className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}>Galeri</Link></li>

                    </ul>
                </div>
                <div className="flex gap-3 items-center pl-2">
                    {/* Gantilah '/sft.png' dengan path logo Anda yang sebenarnya */}
                    <img loading="lazy" src="/sft.webp" alt="SFT logo" className="h-16 md:h-20 lg:h-24 w-auto" />
                    {/* Animated brand title: letter-by-letter motion (respects prefers-reduced-motion) */}
                    {/**
                     * Implementation notes:
                     * - We split the brand into individual letters and animate each with a small 'jump' using framer-motion.
                     * - If the user prefers reduced motion, we fall back to a static span.
                     */}
                    <IntroBrand />
                </div>
            </div>

            {/* ************************************ */}
            {/* * 5. PERBAIKAN UTAMA: Tombol Theme * */}
            {/* ************************************ */}
            <div className="navbar-end lg:gap-2 flex items-center">
                {/* Large-screen menu moved to the right side (before the toggle) */}
                <div className="hidden lg:flex lg:items-center lg:mr-3">
                    <ul className="menu menu-horizontal px-1 gap-1">
                        <li><Link to="/" className={`nav-link text-base ${isActive('/') ? 'active' : ''}`}>Home</Link></li>
                        <li><Link to="/about" className={`nav-link text-base ${isActive('/about') ? 'active' : ''}`}>Tentang</Link></li>
                        <li><Link to="/members" className={`nav-link text-base ${isActive('/members') ? 'active' : ''}`}>Anggota</Link></li>
                        <li><Link to="/schedule" className={`nav-link text-base ${isActive('/schedule') ? 'active' : ''}`}>Jadwal</Link></li>
                        <li><Link to="/gallery" onClick={() => { try { sessionStorage.removeItem('galleryIntroShown') } catch {} }} className={`nav-link text-base ${isActive('/gallery') ? 'active' : ''}`}>Galeri</Link></li>
                    </ul>
                </div>
                {/* Hapus container fixed yang membuat tombol melayang di luar navbar */}
                <button
                    onClick={toggleTheme}
                    aria-label="Toggle light/dark theme"
                    title={tooltipText}
                    aria-pressed={theme === 'eseftwo-light'}
                    className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-base-content/5 hover:bg-base-content/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ml-2 overflow-hidden"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={theme}
                            initial={{ y: -20, opacity: 0, rotate: -90 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            exit={{ y: 20, opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.3, ease: "backOut" }}
                            className="absolute"
                        >
                            {theme === 'eseftwo-light' ? (
                                // Ikon Matahari (Sun icon for light mode) - Kuning Cerah
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-yellow-500 fill-yellow-500/20">
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <line x1="12" y1="1" x2="12" y2="3"></line>
                                    <line x1="12" y1="21" x2="12" y2="23"></line>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                    <line x1="1" y1="12" x2="3" y2="12"></line>
                                    <line x1="21" y1="12" x2="23" y2="12"></line>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                </svg>
                            ) : (
                                // Ikon Bulan (Moon icon for dark mode) - Putih/Biru Muda
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-300 fill-blue-300/20">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </button>
            </div>
        </div>
    )
}

export default Navbar;