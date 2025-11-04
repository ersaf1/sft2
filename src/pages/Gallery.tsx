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
        </div>
    )
}

export default Gallery
