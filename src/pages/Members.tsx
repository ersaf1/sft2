import { useState } from 'react'

interface Member {
    id: number
    name: string
    role: string
    expertise: string[]
    github?: string
    instagram?: string
}

const Members = () => {
    const [searchTerm, setSearchTerm] = useState('')

    // Data anggota contoh - bisa disesuaikan dengan data kelas sebenarnya
    const members: Member[] = [
        {
            id: 1,
            name: "Ahmad Rizki",
            role: "Full Stack Developer",
            expertise: ["React", "Node.js", "MongoDB"],
            github: "ahmadrizki",
            instagram: "rizki.dev"
        },
        {
            id: 2,
            name: "Siti Nurhaliza",
            role: "Game Developer",
            expertise: ["Unity", "C#", "Blender"],
            github: "sitinur",
            instagram: "siti.gamedev"
        },
        {
            id: 3,
            name: "Budi Santoso",
            role: "Mobile Developer",
            expertise: ["Flutter", "Kotlin", "Firebase"],
            github: "budisan",
            instagram: "budi.mobile"
        },
        {
            id: 4,
            name: "Dewi Lestari",
            role: "UI/UX Designer",
            expertise: ["Figma", "Adobe XD", "Photoshop"],
            instagram: "dewi.design"
        },
        {
            id: 5,
            name: "Eko Prasetyo",
            role: "Backend Developer",
            expertise: ["Laravel", "MySQL", "Docker"],
            github: "ekopras",
            instagram: "eko.backend"
        },
        {
            id: 6,
            name: "Fitri Handayani",
            role: "Frontend Developer",
            expertise: ["Vue.js", "TailwindCSS", "TypeScript"],
            github: "fitrihan",
            instagram: "fitri.frontend"
        },
        {
            id: 7,
            name: "Gani Saputra",
            role: "Game Developer",
            expertise: ["Unreal Engine", "C++", "3D Modeling"],
            github: "ganisap",
            instagram: "gani.games"
        },
        {
            id: 8,
            name: "Hana Wijaya",
            role: "Data Analyst",
            expertise: ["Python", "Pandas", "Tableau"],
            github: "hanawij",
            instagram: "hana.data"
        },
    ]

    const filteredMembers = members.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    )

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4">Anggota <span className="text-primary">eseftwo</span></h1>
                <div className="divider max-w-xs mx-auto"></div>
                <p className="text-xl text-gray-600">Para developer dan game developer berbakat</p>
            </div>

            {/* Search Bar (input + button side-by-side) */}
            <div className="max-w-2xl mx-auto mb-12">
                <div className="flex items-center gap-3">
                    <input
                        type="text"
                        placeholder="Cari anggota, role, atau skill..."
                        className="input input-bordered flex-1"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={() => { /* intentionally trigger search: input already filters live */ }}
                        className="btn btn-primary px-5 py-2"
                        aria-label="Cari anggota"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        Cari
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="stats shadow mb-12 w-full">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Total Anggota</div>
                    <div className="stat-value text-primary">{members.length}</div>
                    <div className="stat-desc">Developer & Designer</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Skills Terkumpul</div>
                    <div className="stat-value text-secondary">30+</div>
                    <div className="stat-desc">Berbagai teknologi</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Spesialisasi</div>
                    <div className="stat-value text-accent">8+</div>
                    <div className="stat-desc">Bidang keahlian</div>
                </div>
            </div>

            {/* Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMembers.map((member) => (
                    <div key={member.id} className="card bg-base-100 shadow-xl card-hover">
                        <div className="card-body">
                            <div className="avatar placeholder mb-4">
                                <div className="bg-primary text-neutral-content rounded-full w-20">
                                    <span className="text-3xl">{member.name.charAt(0)}</span>
                                </div>
                            </div>

                            <h2 className="card-title text-lg">{member.name}</h2>
                            <p className="text-sm text-secondary font-semibold">{member.role}</p>

                            <div className="divider my-2"></div>

                            <div className="space-y-2">
                                <p className="text-xs font-semibold">Keahlian:</p>
                                <div className="flex flex-wrap gap-1">
                                    {member.expertise.map((skill, index) => (
                                        <span key={index} className="badge badge-sm badge-outline">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="card-actions justify-end mt-4">
                                {member.github && (
                                    <button className="btn btn-ghost btn-xs">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </button>
                                )}
                                {member.instagram && (
                                    <button className="btn btn-ghost btn-xs">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredMembers.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-xl text-gray-500">Tidak ada anggota yang ditemukan</p>
                </div>
            )}
        </div>
    )
}

export default Members
