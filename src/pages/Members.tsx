import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedIn from '../components/AnimatedIn'

interface Member {
    id: number
    name: string
    instagram?: string
    role?: string
    photo?: string
}

const Members: React.FC = () => {
        const [searchTerm, setSearchTerm] = useState('')
    const svgRef = useRef<SVGSVGElement | null>(null)
    const buttonRef = useRef<HTMLButtonElement | null>(null)

    const members: Member[] = [
        { id: 1, name: "AISHA AMELIA SAKHIY", instagram: "aishameel", role: "Bendahara", photo: "/members/1.png" },
        { id: 2, name: "ANINDYA PUTRI", instagram: "arun4ru", role: "Sekretaris", photo: "/members/2.png" },
        { id: 3, name: "APRILIA NUR AINY", instagram: "aprlnrainisja", role: "Anggota", photo: "/members/3.png" },
        { id: 4, name: "ARNETA PUTRI HAMID", instagram: "_nnett4a", role: "Anggota", photo: "/members/4.png" },
        { id: 5, name: "ARYA RIDHO SAPUTRA", instagram: "alyakkk19_", role: "Anggota", photo: "/members/5.png" },
        { id: 6, name: "ARYA SHAFA AKBAR", instagram: "aryahags", role: "Anggota", photo: "/members/6.png" },
        { id: 7, name: "BEKTI RAHAYU", instagram: "v_ayu16", role: "Anggota", photo: "/members/7.png" },
        { id: 8, name: "DAFFA SETYA HANDIKA", instagram: "daffaastya", role: "Anggota", photo: "/members/8.png" },
        { id: 9, name: "DEBYSA NURUL USTAROH", instagram: "prettyiiesth_", role: "Anggota", photo: "/members/9.png" },
        { id: 10, name: "DIKA NURHIDAYAH", instagram: "_dknrhdyh", role: "Anggota", photo: "/members/10.png" },
        { id: 11, name: "ERSAF SYIRAZI ARIFIN", instagram: "3rsapp", role: "Anggota Ganteng", photo: "/members/11.png" },
        { id: 12, name: "FADLAN KAUTSAR ALBUKHARI", instagram: "fdlnktsrrr_", role: "Anggota", photo: "/members/12.png" },
        { id: 13, name: "FATIKA NUR FAHRANI", instagram: "tikaanff_", role: "Anggota", photo: "/members/13.png" },
        { id: 14, name: "FIKO ANGGARA PUTRA", instagram: "bro_fkk", role: "Anggota", photo: "/members/14.png" },
        { id: 15, name: "HAFIZHA RAISYA KAMILA", instagram: "overjoyedecak_", role: "Anggota", photo: "/members/15.png" },
        { id: 16, name: "KHARISMA INKA PUTRI", instagram: "iam.rsmaa_", role: "Anggota", photo: "/members/16.png" },
        { id: 17, name: "KIDUNG MABUMI PURWANING DUMADI", instagram: "bumisolar", role: "Anggota", photo: "/members/17.png" },
        { id: 18, name: "LAILY ARIEKA NURASYIFA", instagram: "onlylailyasf", role: "Sekretaris", photo: "/members/18.png" },
        { id: 19, name: "LILIS GAYUH SAPUTRI", instagram: "_gystt", role: "Bendahara", photo: "/members/19.png" },
        { id: 20, name: "MUFILIH RAFILESEPPA", instagram: "_muflih_rafileseppa", role: "Anggota", photo: "/members/20.png" },
        { id: 21, name: "MUHAMMAD 'IZZUDDIN ZAKI", instagram: "imjackkkkkkkkk", role: "Anggota", photo: "/members/21.png" },
        { id: 22, name: "MUHAMMAD ATSAL THARIQ RAMI", instagram: "atsalllthrqq_", role: "Anggota", photo: "/members/22.png" },
        { id: 23, name: "MUHAMMAD UBAIDILLAH MAULANA L", instagram: "ubaiimlzrd", role: "Anggota", photo: "/members/23.png" },
        { id: 24, name: "NABILA CAHYA NUGROHO", instagram: "bilch_", role: "Anggota", photo: "/members/24.png" },
        { id: 25, name: "NABILA SAFINATUNNAJAH", instagram: "bil_sfnx", role: "Wakil Ketua Kelas", photo: "/members/25.png" },
        { id: 26, name: "NADHIF AMYRTA FAHMA", instagram: "nadhif.amyrta.fahma", role: "Anggota", photo: "/members/26.png" },
        { id: 27, name: "NAILA SETYANINGTYAS", instagram: "nylazaaa", role: "Anggota", photo: "/members/27.png" },
        { id: 28, name: "NEYSA VASHTI RAMADANI", instagram: "neiyvst", role: "Anggota", photo: "/members/28.png" },
        { id: 29, name: "NINA EVELYN", instagram: "orlle0.pie", role: "Anggota", photo: "/members/29.png" },
        { id: 30, name: "PRANANDA ARKAN RAMADHAN", instagram: "arkanr_rr", role: "Ketua Kelas", photo: "/members/30.png" },
        { id: 31, name: "RINA AULIA HUSNA", instagram: "rrinaauliaa", role: "Anggota", photo: "/members/31.png" },
        { id: 32, name: "THOMAS ADHI PAMUNGKAS", instagram: "tthomaaasss", role: "Anggota", photo: "/members/32.png" },
        { id: 33, name: "TSANIA HASNA HANIFA", instagram: "hsnhanifa__", role: "Anggota", photo: "/members/33.png" },
        { id: 34, name: "UBAIDILLAH ATA AUFA", instagram: "atalaginih19_", role: "Anggota", photo: "/members/34.png" },
    ]

    const filteredMembers = members.filter((m) => {
        const q = searchTerm.trim().toLowerCase()
        if (!q) return true
        return (
            m.name.toLowerCase().includes(q) ||
            (m.instagram || '').toLowerCase().includes(q) ||
            (m.role || '').toLowerCase().includes(q)
        )
    })

        // showing all members on one page — no pagination

    useEffect(() => {
        const check = () => {
            const el = svgRef.current
            const btn = buttonRef.current
            let missing = false
            if (!el) missing = true
            else {
                const rect = el.getBoundingClientRect()
                const cs = getComputedStyle(el)
                if (rect.width === 0 && rect.height === 0) missing = true
                if (cs.display === 'none' || cs.visibility === 'hidden' || cs.opacity === '0') missing = true
            }
            if (btn) {
                if (missing) btn.classList.add('svg-missing')
                else btn.classList.remove('svg-missing')
            }
        }
        const id = requestAnimationFrame(check)
        window.addEventListener('load', check)
        window.addEventListener('resize', check)
        return () => {
            cancelAnimationFrame(id)
            window.removeEventListener('load', check)
            window.removeEventListener('resize', check)
        }
    }, [])

    return (
        <div className="container mx-auto px-4 py-12 relative z-10">
            <AnimatedIn>
                <div className="text-center mb-12 relative z-10">
                    <h1 className="text-5xl font-bold mb-4">Anggota <span className="gradient-text">eseftwo</span></h1>
                    <div className="divider max-w-xs mx-auto"></div>
                    <p className="text-xl text-gray-600">Para developer dan game developer berbakat</p>
                </div>
            </AnimatedIn>

            <AnimatedIn>
                <div className="max-w-md mx-auto mb-12">
                    <div className="form-control">
                        <div className="join w-full rounded-lg overflow-hidden shadow-sm">
                            <input
                                type="text"
                                placeholder="Cari anggota, role, atau skill..."
                                className="search-input input w-full input-md join-item rounded-l-lg px-4 py-3 transition-all duration-300"
                                value={searchTerm}
                                onChange={(e) => { setSearchTerm(e.target.value) }}
                            />
                            <button ref={buttonRef} aria-label="Search" title="Cari anggota" className="search-button btn btn-square btn-md join-item rounded-r-lg flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white transition-all duration-300">
                                <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#ffffff" style={{ stroke: '#ffffff', color: '#ffffff', display: 'block' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <span aria-hidden className="fallback-emoji text-base">🔍</span>
                            </button>
                        </div>
                    </div>
                </div>
            </AnimatedIn>

            <AnimatedIn>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch relative z-10">
                    {filteredMembers.map((member, idx) => (
                        <AnimatedIn key={member.id} index={Math.min(idx, 8)} stagger={0.04}>
                            <motion.article whileHover={{ scale: 1.03, y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }} className="card card-animated-bg text-white shadow-xl transform-gpu hover:shadow-2xl transition-all duration-300 ease-out group h-full flex flex-col">
                                <div className="card-body p-6 flex flex-col justify-between flex-1">
                                    <div className="flex justify-center mb-5">
                                        <div className="avatar">
                                            <div className="w-24 h-24 rounded-full ring-2 ring-white/15 ring-offset-2 ring-offset-transparent group-hover:ring-white/30 transition-all duration-300 overflow-hidden">
                                                {member.photo ? (
                                                    <img loading="lazy" src={member.photo} alt={member.name} className="w-full h-full object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
                                                ) : (
                                                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm text-white rounded-full w-24 h-24 flex items-center justify-center">
                                                        <span className="text-3xl font-bold">{member.name.charAt(0)}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center space-y-2">
                                        <h2 className="text-base font-bold leading-tight group-hover:text-white/95 transition-colors text-center min-h-[3.2rem]" title={member.name} style={{ display: '-webkit-box' as any, WebkitLineClamp: 2 as any, WebkitBoxOrient: 'vertical' as any, overflow: 'hidden' }}>
                                            {member.name}
                                        </h2>

                                        {member.instagram && (
                                            <a href={`https://instagram.com/${member.instagram}`} target="_blank" rel="noopener noreferrer" aria-label={`Instagram ${member.name}`} className="inline-flex items-center justify-center text-white/70 hover:text-white hover:scale-110 transition-all duration-200">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                </svg>
                                            </a>
                                        )}

                                        <div className="mt-4 pt-3 border-t border-white/15 text-center">
                                            <p className="text-sm text-white/85 font-medium tracking-wide">{member.role || 'Anggota'}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        </AnimatedIn>
                    ))}
                </div>
            </AnimatedIn>

                    {/* pagination removed: all members are shown on one page */}

            {filteredMembers.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-xl text-gray-500">Tidak ada anggota yang ditemukan</p>
                </div>
            )}
        </div>
    )
}

export default Members