import { useState, useEffect } from 'react';
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

const Navbar = () => {
    // State untuk tema saat ini
    const [theme, setTheme] = useState(getInitialTheme);
    // State untuk memicu animasi ikon saat toggle
    const [animating, setAnimating] = useState(false);
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
        // Mulai animasi
        setAnimating(true);
        // Hentikan animasi setelah 500ms
        window.setTimeout(() => setAnimating(false), 500);
        
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
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link></li>
                        <li><Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>Tentang</Link></li>
                        <li><Link to="/members" className={`nav-link ${isActive('/members') ? 'active' : ''}`}>Anggota</Link></li>
                        <li><Link to="/gallery" className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}>Galeri</Link></li>
                        <li><Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Kontak</Link></li>

                    </ul>
                </div>
                <div className="flex gap-3 items-center pl-2">
                    {/* Gantilah '/sft.png' dengan path logo Anda yang sebenarnya */}
                    <img loading="lazy" src="/sft.png" alt="SFT logo" className="h-24 md:h-30 lg:h-34 w-auto" />
                    <span className="gradient-text text-xl md:text-2xl font-black leading-none tracking-tight">ESEFTWO</span>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <li><Link to="/" className={`nav-link text-base ${isActive('/') ? 'active' : ''}`}>Home</Link></li>
                    <li><Link to="/about" className={`nav-link text-base ${isActive('/about') ? 'active' : ''}`}>Tentang</Link></li>
                    <li><Link to="/members" className={`nav-link text-base ${isActive('/members') ? 'active' : ''}`}>Anggota</Link></li>
                    <li><Link to="/gallery" onClick={() => { try { sessionStorage.removeItem('galleryIntroShown') } catch {} }} className={`nav-link text-base ${isActive('/gallery') ? 'active' : ''}`}>Galeri</Link></li>
                    <li><Link to="/contact" className={`nav-link text-base ${isActive('/contact') ? 'active' : ''}`}>Kontak</Link></li>
                </ul>
            </div>

            {/* ************************************ */}
            {/* * 5. PERBAIKAN UTAMA: Tombol Theme * */}
            {/* ************************************ */}
            <div className="navbar-end lg:gap-2 flex items-center">
                {/* Hapus container fixed yang membuat tombol melayang di luar navbar */}
                <button
                    onClick={toggleTheme}
                    aria-label="Toggle light/dark theme"
                    title={tooltipText}
                    aria-pressed={theme === 'eseftwo-light'}
                    // Menggunakan 'btn-ghost' dan 'btn-square' untuk mendapatkan tampilan kotak yang sesuai dengan screenshot.
                    className="btn btn-ghost flex items-center justify-center gap-1 p-2 text-base-content shadow-none transition-all"
                >
                    {theme === 'eseftwo-light' ? (
                        // Ikon Matahari (Sun icon for light mode)
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{ color: 'var(--text-main, #fff)', fill: 'var(--text-main, #fff)', stroke: 'var(--text-main, #fff)' }} className={`h-6 w-6 ${animating ? 'animate-toggle' : ''}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path style={{ fill: 'var(--text-main, #fff)' }} d="M12 17.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0-9a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"/>
                            <path style={{ fill: 'var(--text-main, #fff)' }} d="M13 1h-2v3h2V1zm0 19h-2v3h2v-3zM4 11H1v2h3v-2zm19 0h-3v2h3v-2zM5.99 4.58L4.58 5.99l1.41 1.41 1.42-1.41-1.42-1.41zm12.02 12.02l-1.41 1.41 1.41 1.42 1.42-1.42-1.42-1.41zM18.01 4.58l1.42 1.41 1.41-1.41-1.41-1.42-1.42 1.42zM5.99 18.01l1.41-1.41-1.41-1.42-1.42 1.42 1.42 1.41z"/>
                        </svg>
                    ) : (
                        // Ikon Bulan (Moon icon for dark mode)
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{ color: 'var(--text-main, #fff)', fill: 'var(--text-main, #fff)', stroke: 'var(--text-main, #fff)' }} className={`h-6 w-6 ${animating ? 'animate-toggle' : ''}`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path style={{ fill: 'var(--text-main, #fff)' }} d="M21.64 13a1 1 0 00-1.05-.14 8.05 8.05 0 01-3.37.73 8.15 8.15 0 01-8.14-8.1 8.59 8.59 0 01.25-2A1 1 0 008 2.36a10.14 10.14 0 1014 11.69 1 1 0 00-.36-1.05zm-9.5 6.69A8.14 8.14 0 017.08 5.22v.27a10.15 10.15 0 0010.14 10.14 9.79 9.79 0 002.1-.22 8.11 8.11 0 01-7.18 4.32z"/>
                        </svg>
                    )}
                    {/* Fallback emoji to guarantee a visible indicator if SVG styling fails */}
                    
                </button>
            </div>
        </div>
    )
}

export default Navbar;