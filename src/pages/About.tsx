const About = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4">Tentang <span className="text-primary">eseftwo</span></h1>
                <div className="divider max-w-xs mx-auto"></div>
                <p className="text-xl text-gray-600">PPLG 2 - Pengembangan Perangkat Lunak dan Gim</p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="card bg-light shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-primary">Visi Kami</h2>
                        <p className="text-lg text-dark">
                            Menjadi kelas yang menghasilkan developer dan game developer terbaik yang mampu
                            bersaing di era digital, dengan kemampuan teknis yang solid dan kreativitas yang tinggi.
                        </p>
                    </div>
                </div>

                <div className="card bg-light shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-secondary">Misi Kami</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Menguasai berbagai teknologi pengembangan software</li>
                            <li>Menciptakan aplikasi dan game yang inovatif</li>
                            <li>Membangun kolaborasi dan teamwork yang solid</li>
                            <li>Terus belajar dan berkembang mengikuti perkembangan teknologi</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Timeline */}
           <div className="mb-12">
    <h2 className="text-3xl font-bold text-center mb-8">Perjalanan Kami</h2>
    <ul className="timeline timeline-vertical">
        <li>
            {/* PERBAIKAN: Tambahkan kelas text-white di sini */}
            <div className="timeline-start timeline-box bg-dark text-dark">
                <div className="font-bold">Tahun Pertama</div>
                Mempelajari dasar-dasar pemrograman, algoritma, dan struktur data
            </div>
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-light">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
            </div>
            <hr className="bg-primary" />
        </li>
        <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-light">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
            </div>
            {/* PERBAIKAN: Tambahkan kelas text-white di sini */}
            <div className="timeline-end timeline-box bg-dark text-dark">
                <div className="font-bold">Tahun Kedua</div>
                Mengembangkan aplikasi web dan mobile, serta game sederhana
            </div>
            <hr className="bg-secondary" />
        </li>
        <li>
            <hr className="bg-secondary" />
            {/* PERBAIKAN: Tambahkan kelas text-white di sini */}
            <div className="timeline-start timeline-box bg-dark text-dark">
                <div className="font-bold">Tahun Ketiga</div>
                Membuat proyek besar dan siap memasuki dunia industri
            </div>
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-light">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
            </div>
        </li>
    </ul>
</div>

            {/* Values */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-8">Nilai-Nilai Kami</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="card bg-primary text-white shadow-xl">
                        <div className="card-body items-center text-center">
                            <h3 className="card-title">Kreativitas</h3>
                            <p>Berpikir out of the box dalam setiap proyek</p>
                        </div>
                    </div>

                    <div className="card bg-secondary text-white shadow-xl">
                        <div className="card-body items-center text-center">
                            <h3 className="card-title">Kolaborasi</h3>
                            <p>Bekerja sama untuk hasil terbaik</p>
                        </div>
                    </div>

                    <div className="card bg-accent text-white shadow-xl">
                        <div className="card-body items-center text-center">
                            <h3 className="card-title">Inovasi</h3>
                            <p>Selalu mencari solusi baru</p>
                        </div>
                    </div>

                    <div className="card bg-info text-white shadow-xl">
                        <div className="card-body items-center text-center">
                            <h3 className="card-title">Dedikasi</h3>
                            <p>Komitmen penuh dalam belajar</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tech Stack */}
            <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-3xl mb-6 justify-center">Tech Stack yang Kami Gunakan</h2>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <div className="badge badge-primary badge-lg">HTML/CSS</div>
                        <div className="badge badge-secondary badge-lg">JavaScript</div>
                        <div className="badge badge-accent badge-lg">TypeScript</div>
                        <div className="badge badge-info badge-lg">React</div>
                        <div className="badge badge-success badge-lg">Node.js</div>
                        <div className="badge badge-warning badge-lg">Python</div>
                        <div className="badge badge-error badge-lg">Java</div>
                        <div className="badge badge-primary badge-lg">Kotlin</div>
                        <div className="badge badge-secondary badge-lg">Flutter</div>
                        <div className="badge badge-accent badge-lg">Unity</div>
                        <div className="badge badge-info badge-lg">Unreal Engine</div>
                        <div className="badge badge-success badge-lg">MySQL</div>
                        <div className="badge badge-warning badge-lg">MongoDB</div>
                        <div className="badge badge-error badge-lg">Git</div>
                        <div className="badge badge-primary badge-lg">Figma</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
