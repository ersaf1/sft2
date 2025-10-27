import { useState } from 'react'

interface Project {
    id: number
    title: string
    description: string
    category: 'web' | 'mobile' | 'game' | 'desktop'
    tech: string[]
    image?: string
    status: 'completed' | 'ongoing' | 'planned'
    team: string[]
}

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all')

    const projects: Project[] = [
        {
            id: 1,
            title: "E-Learning Platform",
            description: "Platform pembelajaran online interaktif dengan fitur video, quiz, dan forum diskusi",
            category: "web",
            tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
            status: "completed",
            team: ["Ahmad", "Fitri", "Eko"]
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Aplikasi mobile untuk manajemen tugas dan produktivitas dengan integrasi kalender",
            category: "mobile",
            tech: ["Flutter", "Firebase", "GetX"],
            status: "completed",
            team: ["Budi", "Dewi"]
        },
        {
            id: 3,
            title: "Adventure RPG Game",
            description: "Game petualangan RPG 3D dengan sistem combat dan quest yang menarik",
            category: "game",
            tech: ["Unity", "C#", "Blender"],
            status: "ongoing",
            team: ["Siti", "Gani"]
        },
        {
            id: 4,
            title: "Inventory System",
            description: "Sistem manajemen inventory untuk toko dengan laporan lengkap",
            category: "desktop",
            tech: ["Java", "MySQL", "JavaFX"],
            status: "completed",
            team: ["Ahmad", "Hana"]
        },
        {
            id: 5,
            title: "Social Media Dashboard",
            description: "Dashboard analitik untuk mengelola multiple social media accounts",
            category: "web",
            tech: ["Vue.js", "Laravel", "Chart.js"],
            status: "ongoing",
            team: ["Fitri", "Eko", "Hana"]
        },
        {
            id: 6,
            title: "Fitness Tracker",
            description: "Aplikasi tracking aktivitas fitness dengan AI recommendation",
            category: "mobile",
            tech: ["Kotlin", "Room", "TensorFlow Lite"],
            status: "planned",
            team: ["Budi", "Ahmad"]
        },
        {
            id: 7,
            title: "Puzzle Platformer",
            description: "Game puzzle platformer 2D dengan mekanik unik dan level design menarik",
            category: "game",
            tech: ["Godot", "GDScript"],
            status: "completed",
            team: ["Siti", "Dewi"]
        },
        {
            id: 8,
            title: "Restaurant POS",
            description: "Point of Sale system untuk restoran dengan fitur reservasi dan order online",
            category: "web",
            tech: ["React", "Express", "PostgreSQL", "Socket.io"],
            status: "ongoing",
            team: ["Eko", "Fitri", "Budi"]
        },
    ]

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(project => project.category === selectedCategory)

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'web': return 'badge-primary'
            case 'mobile': return 'badge-secondary'
            case 'game': return 'badge-accent'
            case 'desktop': return 'badge-info'
            default: return 'badge-ghost'
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed': return 'badge-success'
            case 'ongoing': return 'badge-warning'
            case 'planned': return 'badge-error'
            default: return 'badge-ghost'
        }
    }

    const getStatusText = (status: string) => {
        switch (status) {
            case 'completed': return 'Selesai'
            case 'ongoing': return 'Berlangsung'
            case 'planned': return 'Direncanakan'
            default: return status
        }
    }

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4">Proyek <span className="text-primary">eseftwo</span></h1>
                <div className="divider max-w-xs mx-auto"></div>
                <p className="text-xl text-gray-600">Karya dan inovasi dari kelas PPLG 2</p>
            </div>

            {/* Stats */}
            <div className="stats shadow mb-8 w-full">
                <div className="stat">
                    <div className="stat-title">Total Proyek</div>
                    <div className="stat-value text-primary">{projects.length}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Selesai</div>
                    <div className="stat-value text-success">{projects.filter(p => p.status === 'completed').length}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Berlangsung</div>
                    <div className="stat-value text-warning">{projects.filter(p => p.status === 'ongoing').length}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Direncanakan</div>
                    <div className="stat-value text-error">{projects.filter(p => p.status === 'planned').length}</div>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="tabs tabs-boxed justify-center mb-8">
                <button
                    className={`tab ${selectedCategory === 'all' ? 'tab-active' : ''}`}
                    onClick={() => setSelectedCategory('all')}
                >
                    Semua
                </button>
                <button
                    className={`tab ${selectedCategory === 'web' ? 'tab-active' : ''}`}
                    onClick={() => setSelectedCategory('web')}
                >
                    Web
                </button>
                <button
                    className={`tab ${selectedCategory === 'mobile' ? 'tab-active' : ''}`}
                    onClick={() => setSelectedCategory('mobile')}
                >
                    Mobile
                </button>
                <button
                    className={`tab ${selectedCategory === 'game' ? 'tab-active' : ''}`}
                    onClick={() => setSelectedCategory('game')}
                >
                    Game
                </button>
                <button
                    className={`tab ${selectedCategory === 'desktop' ? 'tab-active' : ''}`}
                    onClick={() => setSelectedCategory('desktop')}
                >
                    Desktop
                </button>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="card bg-base-100 shadow-xl card-hover">
                        <div className="card-body">
                            <div className="flex justify-between items-start mb-2">
                                <span className={`badge ${getCategoryColor(project.category)}`}>
                                    {project.category.toUpperCase()}
                                </span>
                                <span className={`badge ${getStatusColor(project.status)}`}>
                                    {getStatusText(project.status)}
                                </span>
                            </div>

                            <h2 className="card-title">{project.title}</h2>
                            <p className="text-sm text-gray-600">{project.description}</p>

                            <div className="divider my-2"></div>

                            <div className="space-y-2">
                                <p className="text-xs font-semibold">Tech Stack:</p>
                                <div className="flex flex-wrap gap-1">
                                    {project.tech.map((tech, index) => (
                                        <span key={index} className="badge badge-sm badge-outline">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2 mt-2">
                                <p className="text-xs font-semibold">Tim:</p>
                                <div className="flex flex-wrap gap-1">
                                    {project.team.map((member, index) => (
                                        <span key={index} className="badge badge-sm badge-ghost">
                                            {member}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="card-actions justify-end mt-4">
                                <button className="btn btn-primary btn-sm">Detail</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-xl text-gray-500">Tidak ada proyek dalam kategori ini</p>
                </div>
            )}
        </div>
    )
}

export default Projects
