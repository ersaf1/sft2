import { useState } from 'react'

interface Member {
    id: number
    name: string
    instagram?: string
    role?: string
}

const Members = () => {
    const [searchTerm, setSearchTerm] = useState('')

    // Data anggota diperbarui: id, name, dan instagram (handle dibuat otomatis dari nama)
    // Data anggota diperbarui: id, name, instagram, dan role
    const members: Member[] = [
        { id: 1, name: "AISHA AMELIA SAKHIY", instagram: "aisha.amelia.sakhiy", role: "Bendahara" },
        { id: 2, name: "ANINDYA PUTRI", instagram: "anindya.putri", role: "Sekretaris" },
        { id: 3, name: "APRILIA NUR AINY", instagram: "aprilia.nur.ainy", role: "Anggota" },
        { id: 4, name: "ARNETA PUTRI HAMID", instagram: "arneta.putri.hamid", role: "Anggota" },
        { id: 5, name: "ARYA RIDHO SAPUTRA", instagram: "arya.ridho.saputra", role: "Anggota" },
        { id: 6, name: "ARYA SHAFA AKBAR", instagram: "arya.shafa.akbar", role: "Anggota" },
        { id: 7, name: "BEKTI RAHAYU", instagram: "bekti.rahayu", role: "Anggota" },
        { id: 8, name: "DAFFA SETYA HANDIKA", instagram: "daffa.setya.handika", role: "Anggota" },
        { id: 9, name: "DEBYSA NURUL USTAROH", instagram: "debysa.nurul.ustaroh", role: "Anggota" },
        { id: 10, name: "DIKA NURHIDAYAH", instagram: "dika.nurhidayah", role: "Anggota" },
        { id: 11, name: "ERSAF SYIRAZI ARIFIN", instagram: "ersaf.syirazi.arifin", role: "Anggota" },
        { id: 12, name: "FADLAN KAUTSAR ALBUKHARI", instagram: "fadlan.kautsar.albukhari", role: "Anggota" },
        { id: 13, name: "FATIKA NUR FAHRANI", instagram: "fatika.nur.fahrani", role: "Anggota" },
        { id: 14, name: "FIKO ANGGARA PUTRA", instagram: "fiko.anggara.putra", role: "Anggota" },
        { id: 15, name: "HAFIZHA RAISYA KAMILA", instagram: "hafizha.raisya.kamila", role: "Anggota" },
        { id: 16, name: "KHARISMA INKA PUTRI", instagram: "kharisma.inka.putri", role: "Anggota" },
        { id: 17, name: "KIDUNG MABUMI PURWANING DUMADI", instagram: "kidung.mabumi.purwaning.dumadi", role: "Anggota" },
        { id: 18, name: "LAILY ARIEKA NURASYIFA", instagram: "laily.arieka.nurasyifa", role: "Sekretaris" },
        { id: 19, name: "LILIS GAYUH SAPUTRI", instagram: "lilis.gayuh.saputri", role: "Bendahara" },
        { id: 20, name: "MUFILIH RAFILESEPPA", instagram: "mufilih.rafileseppa", role: "Anggota" },
        { id: 21, name: "MUHAMMAD 'IZZUDDIN ZAKI", instagram: "muhammad.izzuddin.zaki", role: "Anggota" },
        { id: 22, name: "MUHAMMAD ATSAL THARIQ RAMI", instagram: "muhammad.atsal.thariq.rami", role: "Anggota" },
        { id: 23, name: "MUHAMMAD UBAIDILLAH MAULANA L", instagram: "muhammad.ubaidillah.maulana.l", role: "Anggota" },
        { id: 24, name: "NABILA CAHYA NUGROHO", instagram: "nabila.cahya.nugroho", role: "Anggota" },
        { id: 25, name: "NABILA SAFINATUNNAJAH", instagram: "nabila.safinatunnajah", role: "Wakil Ketua Kelas" },
        { id: 26, name: "NADHIF AMYRTA FAHMA", instagram: "nadhif.amyrta.fahma", role: "Anggota" },
        { id: 27, name: "NAILA SETYANINGTYAS", instagram: "naila.setyaningtyas", role: "Anggota" },
        { id: 28, name: "NEYSA VASHTI RAMADANI", instagram: "neysa.vashti.ramadani", role: "Anggota" },
        { id: 29, name: "NINA EVELYN", instagram: "nina.evelyn", role: "Anggota" },
        { id: 30, name: "PRANANDA ARKAN RAMADHAN", instagram: "prananda.arkan.ramadhan", role: "Ketua Kelas" },
        { id: 31, name: "RINA AULIA HUSNA", instagram: "rina.aulia.husna", role: "Anggota" },
        { id: 32, name: "THOMAS ADHI PAMUNGKAS", instagram: "thomas.adhi.pamungkas", role: "Anggota" },
        { id: 33, name: "TSANIA HASNA HANIFA", instagram: "tsania.hasna.hanifa", role: "Anggota" },
        { id: 34, name: "UBAIDILLAH ATA AUFA", instagram: "ubaidillah.ata.aufa", role: "Anggota" },
    ]

    const filteredMembers = members.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (member.instagram || '').toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold mb-4">Anggota <span className="text-primary">eseftwo</span></h1>
                <div className="divider max-w-xs mx-auto"></div>
                <p className="text-xl text-gray-600">Para developer dan game developer berbakat</p>
            </div>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-12">
                <div className="form-control">
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Cari anggota eseftwo"
                            className="input input-bordered flex-1 h-12"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn btn-primary h-12 px-4 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats removed as requested */}

            {/* Members Grid: 1 col (default), 2 cols on small, 4 cols on md+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {filteredMembers.map((member) => (
                    <div key={member.id} className="card bg-base-100 shadow-xl card-hover">
                        <div className="card-body">
                            <div className="avatar placeholder mb-4">
                                <div className="bg-primary text-neutral-content rounded-full w-20">
                                    <span className="text-3xl">{member.name.charAt(0)}</span>
                                </div>
                            </div>

                            <h2 className="card-title text-lg flex items-center gap-3">
                                <span>{member.name}</span>
                                {member.instagram && (
                                    <a href={`https://instagram.com/${member.instagram}`} target="_blank" rel="noopener noreferrer" aria-label={`Instagram ${member.name}`} className="inline-flex items-center text-dark hover:text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                )}
                            </h2>

                            <div className="divider my-2"></div>

                            {/* Jabatan / role */}
                            <p className="text-sm text-muted">{member.role || 'Anggota'}</p>
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
