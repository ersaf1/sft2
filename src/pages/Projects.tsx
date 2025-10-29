import { useState } from 'react'

interface Project {
    id: number
    title: string
    description: string
    tech: string[]
    status: 'completed' | 'ongoing' | 'planned'
}

const Projects = () => {
    const [filter, setFilter] = useState<'all' | 'completed' | 'ongoing' | 'planned'>('all')

    const projects: Project[] = [
        { id: 1, title: 'Website Sekolah', description: 'Portal informasi dan manajemen tugas', tech: ['React', 'TypeScript', 'Tailwind'], status: 'completed' },
        { id: 2, title: 'Game 2D Platformer', description: 'Game platformer sederhana dengan level editor', tech: ['Unity', 'C#'], status: 'ongoing' },
        { id: 3, title: 'Aplikasi Catatan', description: 'Aplikasi mobile untuk mencatat tugas sekolah', tech: ['Flutter', 'Firebase'], status: 'planned' },
    ]

    const filtered = projects.filter(p => filter === 'all' ? true : p.status === filter)

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-black mb-2">Proyek <span className="text-primary">eseftwo</span></h1>
                <p className="text-base-content/70">Kumpulan proyek buatan siswa — coba jelajahi dan kontribusi</p>
            </div>

            <div className="flex gap-2 justify-center mb-8">
                <button onClick={() => setFilter('all')} className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-ghost'}`}>Semua</button>
                <button onClick={() => setFilter('completed')} className={`btn ${filter === 'completed' ? 'btn-primary' : 'btn-ghost'}`}>Selesai</button>
                <button onClick={() => setFilter('ongoing')} className={`btn ${filter === 'ongoing' ? 'btn-primary' : 'btn-ghost'}`}>Sedang Berjalan</button>
                <button onClick={() => setFilter('planned')} className={`btn ${filter === 'planned' ? 'btn-primary' : 'btn-ghost'}`}>Direncanakan</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map(p => (
                    <div key={p.id} className="card card-hover simple-border bg-base-100">
                        <div className="card-body">
                            <h3 className="card-title">{p.title}</h3>
                            <p className="text-sm text-base-content/70">{p.description}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {p.tech.map((t, i) => <span key={i} className="badge badge-outline">{t}</span>)}
                            </div>
                            <div className="card-actions justify-end mt-4">
                                <span className={`badge ${p.status === 'completed' ? 'badge-primary' : p.status === 'ongoing' ? 'badge-secondary' : 'badge-accent'}`}>{p.status}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
