import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="hero min-h-screen hero-gradient relative">
                <div className="hero-content text-center relative z-10">
                    <div className="max-w-5xl">
                        <div className="animate-fade-in">
                            <div className="mb-6">
                                <span className="inline-block px-4 py-2 glass-effect rounded-full text-sm font-semibold mb-4">
                                    XI Kelas PPLG 2 - eseftwo
                                </span>
                            </div>

                            <h1 className="text-7xl md:text-8xl font-black mb-6 leading-tight">
                                <span className="gradient-text">Software & Game</span>
                                <br />
                                <span className="text-dark">Development</span>
                            </h1>

                            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-dark/70 leading-relaxed">
                                Kelas yang fokus pada pengembangan perangkat lunak dan game dengan
                                <span className="gradient-text font-semibold"> teknologi modern</span> dan
                                <span className="gradient-text font-semibold"> kreativitas tanpa batas</span>
                            </p>

                            {/* Tombol Navigasi - Jarak vertikal sudah diatur dalam Hero Section ini sendiri */}
                            <div className="flex gap-4 justify-center flex-wrap mb-10">
                                <Link to="/about" className="btn btn-primary btn-lg hover:scale-105 transition-transform">
                                    Tentang Kami
                                </Link>
                                <Link to="/members" className="btn btn-dark btn-lg hover:scale-105 transition-transform">
                                    Anggota Kelas
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section - PERBAIKAN: -mt-24 diubah menjadi -mt-10 untuk memberi ruang */}
            <div className="container mx-auto px-4 -mt-10 relative z-20 mb-20"> 
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

                    <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all simple-border">
                        <div className="text-center">
                            <div className="text-5xl mb-4">👥</div>
                            <div className="text-5xl font-black mb-2 gradient-text">34</div>
                            <h3 className="text-lg font-bold gradient-text mb-2">Anggota Kelas</h3>
                            <p className="text-dark/70">Developers</p>
                        </div>
                    </div>

                    <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all simple-border">
                        <div className="text-center">
                            <div className="text-5xl mb-4">🏆</div>
                            <div className="text-5xl font-black mb-2 gradient-text">10+</div>
                            <h3 className="text-lg font-bold gradient-text mb-2">Partisipasi</h3>
                            <p className="text-dark/70">Event</p>
                        </div>
                    </div>

                    <div className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all simple-border">
                        <div className="text-center">
                            <div className="text-5xl mb-4">⚡</div>
                            <div className="text-5xl font-black mb-2 gradient-text">5+</div>
                            <h3 className="text-lg font-bold gradient-text mb-2">Tech Stack</h3>
                            <p className="text-dark/70">Teknologi modern</p>
                        </div>
                    </div>
                </div>
            </div>

           {/* Features Section - Telah disesuaikan agar judul tidak terpotong di ponsel */}
<div className="container mx-auto px-4 py-20"> 
    <div className="text-center mb-12">
        {/* PERBAIKAN UTAMA DI SINI: Mengubah text-5xl menjadi text-4xl di layar kecil (default), dan kembali ke 5xl di layar menengah (md) ke atas */}
        <h2 className="text-4xl md:text-5xl font-black mb-4 gradient-text leading-normal md:leading-tight" style={{ WebkitFontSmoothing: 'antialiased' }}>
            Teknologi yang Kami Kuasai
        </h2>
    <p className="text-lg text-dark/70">Stack modern untuk project masa depan</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Card 1: Web Development */}
        <div className="card card-hover simple-border rounded-2xl">
            <div className="card-body items-center text-center">
                <div className="tech-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                </div>
                <h3 className="card-title gradient-text">Web Development</h3>
                <p className="text-dark/70">HTML, CSS, JavaScript, React, TypeScript</p>
            </div>
        </div>

        {/* Card 2: Mobile Development */}
        <div className="card card-hover simple-border rounded-2xl">
            <div className="card-body items-center text-center">
                <div className="tech-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                </div>
                <h3 className="card-title gradient-text">Mobile Development</h3>
                <p className="text-dark/70">Android, Flutter</p>
            </div>
        </div>

        {/* Card 3: Game Development */}
        <div className="card card-hover simple-border rounded-2xl">
            <div className="card-body items-center text-center">
                <div className="tech-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                </div>
                <h3 className="card-title gradient-text">Game Development</h3>
                <p className="text-dark/70">Unity</p>
            </div>
        </div>

        {/* Card 4: Database */}
        <div className="card card-hover simple-border rounded-2xl">
            <div className="card-body items-center text-center">
                <div className="tech-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                </div>
                <h3 className="card-title gradient-text">Database</h3>
                <p className="text-dark/70">MySQL</p>
            </div>
        </div>

        {/* Card 5: UI/UX Design */}
        <div className="card card-hover simple-border rounded-2xl">
            <div className="card-body items-center text-center">
                <div className="tech-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                </div>
                <h3 className="card-title gradient-text">UI/UX Design</h3>
                <p className="text-dark/70">Figma</p>
            </div>
        </div>

        {/* Card 6: Backend Development */}
        <div className="card card-hover simple-border rounded-2xl">
            <div className="card-body items-center text-center">
                <div className="tech-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <h3 className="card-title gradient-text">Backend Development</h3>
                <p className="text-dark/70">Node.js,Laravel</p>
            </div>
        </div>
    </div>
</div>

            {/* CTA Section - Dikembalikan lengkap */}
            <div className="relative overflow-hidden py-20">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="max-w-3xl mx-auto glass-effect p-10 rounded-3xl simple-border">
                        <h2 className="text-5xl font-black mb-6 gradient-text leading-normal md:leading-tight" style={{ WebkitFontSmoothing: 'antialiased' }}>
                            Bergabung dengan Kami
                        </h2>
                        <p className="text-xl mb-8 text-dark/70">
                            Mari belajar dan berkembang bersama di dunia software & game development
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <Link to="/members" className="btn btn-primary btn-lg hover:scale-105 transition-all">
                                👥 Lihat Anggota
                            </Link>
                            <Link to="/gallery" className="btn btn-dark btn-lg hover:scale-105 transition-all">
                                📸 Galeri Kami
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home