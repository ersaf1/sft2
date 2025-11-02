const Gallery = () => {
    const activities = [
        {
            id: 1,
            title: "Hackathon 2024",
            description: "Tim eseftwo berhasil meraih juara 2 dalam kompetisi hackathon tingkat sekolah",
            date: "15 Maret 2024",
            category: "Kompetisi"
        },
        {
            id: 2,
            title: "Workshop Unity Game Development",
            description: "Pelatihan intensif pengembangan game menggunakan Unity Engine",
            date: "22 Februari 2024",
            category: "Workshop"
        },
        {
            id: 3,
            title: "Project Showcase",
            description: "Presentasi proyek-proyek terbaik kelas PPLG 2 kepada stakeholder industri",
            date: "10 April 2024",
            category: "Event"
        },
        {
            id: 4,
            title: "Kunjungan Industri",
            description: "Kunjungan ke perusahaan startup teknologi untuk mempelajari workflow industri",
            date: "5 Mei 2024",
            category: "Kunjungan"
        },
        {
            id: 5,
            title: "Coding Bootcamp",
            description: "Bootcamp intensive selama 3 hari untuk meningkatkan skill programming",
            date: "18 Januari 2024",
            category: "Workshop"
        },
        {
            id: 6,
            title: "Game Jam Competition",
            description: "Kompetisi membuat game dalam waktu 48 jam dengan tema 'Future'",
            date: "28 Maret 2024",
            category: "Kompetisi"
        },
    ]

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4">Galeri <span className="gradient-text">eseftwo</span></h1>
                <div className="divider max-w-xs mx-auto"></div>
                <p className="text-xl text-gray-600">Dokumentasi kegiatan dan pencapaian kelas PPLG 2</p>
            </div>

           

            {/* Activities Timeline */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8">Aktivitas & Event</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activities.map((activity) => (
                        <div key={activity.id} className="card bg-base-100 shadow-xl card-hover">
                            <div className="card-body">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="badge badge-primary">{activity.category}</span>
                                    <span className="text-xs text-gray-500">{activity.date}</span>
                                </div>
                                <h3 className="card-title text-lg">{activity.title}</h3>
                                <p className="text-sm">{activity.description}</p>
                                <div className="card-actions justify-end mt-4">
                                    <button className="btn btn-ghost btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        Lihat Foto
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Photo Placeholder Grid */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-12">Dokumentasi Foto</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(9)].map((_, index) => (
                        <div
                            key={index}
                            className="group relative aspect-[4/3] bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 rounded-2xl overflow-hidden card-hover cursor-pointer"
                        >
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                                <div className="mb-4 p-4 rounded-full bg-base-100/50 backdrop-blur-sm">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-16 w-16 text-dark/40 group-hover:text-primary transition-colors"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <p className="text-sm font-semibold text-base-content/70 group-hover:text-base-content transition-colors">
                                    Photo {index + 1}
                                </p>
                                <p className="text-xs text-base-content/50 mt-1">Klik untuk melihat</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-base-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-12">Video Dokumentasi</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2, 3, 4].map((index) => (
                        <div
                            key={index}
                            className="group relative aspect-video bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 rounded-2xl overflow-hidden card-hover cursor-pointer"
                        >
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                                <div className="mb-4 p-4 rounded-full bg-base-100/50 backdrop-blur-sm group-hover:scale-110 transition-transform">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-20 w-20 text-dark/40 group-hover:text-primary transition-colors"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <p className="text-sm font-semibold text-base-content/70 group-hover:text-base-content transition-colors">
                                    Video Dokumentasi {index}
                                </p>
                                <p className="text-xs text-base-content/50 mt-1">Klik untuk memutar</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-base-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Social Media CTA */}
            <div className="card bg-gradient-to-r from-primary to-primary text-white shadow-2xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl mb-4">Ikuti Kami di Social Media!</h2>
                    <p className="mb-6">
                        Dapatkan update terbaru tentang kegiatan, proyek, dan pencapaian eseftwo
                    </p>
                    <div className="flex gap-4">
                        <button className="btn btn-outline btn-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            Instagram
                        </button>
                        <button className="btn btn-outline btn-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                            YouTube
                        </button>
                        <button className="btn btn-outline btn-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
