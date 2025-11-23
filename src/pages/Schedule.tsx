import React, { useState } from 'react'
import AnimatedIn from '../components/AnimatedIn'

const Schedule: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'lessons' | 'picket'>('lessons')

    const lessonSchedule = [
        {
            day: 'Senin',
            subjects: [
                { time: '07.00 - 07.40', name: 'Upacara Bendera' },
                { time: '07.40 - 08.20', name: 'Pendidikan Agama Islam' },
                { time: '08.20 - 09.00', name: 'Pendidikan Agama Islam' },
                { time: '09.00 - 09.40', name: 'Pendidikan Agama Islam' },
                { time: '09.40 - 09.55', name: 'Istirahat' },
                { time: '09.55 - 10.35', name: 'Bahasa Indonesia' },
                { time: '10.35 - 11.15', name: 'Bahasa Indonesia' },
                { time: '11.15 - 11.55', name: 'Bahasa Indonesia' },
                { time: '11.55 - 12.35', name: 'Istirahat' },
                { time: '12.35 - 13.15', name: 'Mapel Pilihan' },
                { time: '13.15 - 13.55', name: 'Mapel Pilihan' },
                { time: '13.55 - 14.35', name: 'Mapel Pilihan' },
                { time: '14.35 - 15.15', name: 'Mapel Pilihan' },
            ]
        },
        {
            day: 'Selasa',
            subjects: [
                { time: '07.00 - 07.45', name: 'Konsentrasi Kejuruan PPLG' },
                { time: '07.45 - 08.30', name: 'Konsentrasi Kejuruan PPLG' },
                { time: '08.30 - 09.15', name: 'Konsentrasi Kejuruan PPLG' },
                { time: '09.15 - 10.00', name: 'Konsentrasi Kejuruan PPLG' },
                { time: '10.00 - 10.15', name: 'Istirahat' },
                { time: '10.15 - 11.00', name: 'Bahasa Inggris' },
                { time: '11.00 - 11.45', name: 'Bahasa Inggris' },
                { time: '11.45 - 12.30', name: 'Konsentrasi Kejuruan PPLG' },
                { time: '12.30 - 13.00', name: 'Istirahat' },
                { time: '13.00 - 13.45', name: 'Konsentrasi Kejuruan PPLG' },
                { time: '13.45 - 14.30', name: 'Konsentrasi Kejuruan PPLG' },
                { time: '14.30 - 15.15', name: 'Konsentrasi Kejuruan PPLG' },
            ]
        },
        {
            day: 'Rabu',
            subjects: [
                { time: '07.00 - 07.45', name: 'PKWU' },
                { time: '07.45 - 08.30', name: 'PKWU' },
                { time: '08.30 - 09.15', name: 'PKWU' },
                { time: '09.15 - 10.00', name: 'PKWU' },
                { time: '10.00 - 10.15', name: 'Istirahat' },
                { time: '10.15 - 11.00', name: 'PKWU' },
                { time: '11.00 - 11.45', name: 'BK' },
                { time: '11.45 - 12.30', name: 'Bahasa Inggris' },
                { time: '12.30 - 13.00', name: 'Istirahat' },
                { time: '13.00 - 13.45', name: 'Bahasa Inggris' },
                { time: '13.45 - 14.30', name: 'Sejarah' },
                { time: '14.30 - 15.15', name: 'Sejarah' },
            ]
        },
        {
            day: 'Kamis',
            subjects: [
                { time: '07.00 - 07.45', name: 'PPKN' },
                { time: '07.45 - 08.30', name: 'PPKN' },
                { time: '08.30 - 09.15', name: 'Olahraga' },
                { time: '09.15 - 10.00', name: 'Olahraga' },
                { time: '10.00 - 10.15', name: 'Istirahat' },
                { time: '10.15 - 11.00', name: 'Konsentrasi Keahlian PPLG' },
                { time: '11.00 - 11.45', name: 'Konsentrasi Keahlian PPLG' },
                { time: '11.45 - 12.30', name: 'Konsentrasi Keahlian PPLG' },
                { time: '12.30 - 13.00', name: 'Istirahat' },
                { time: '13.00 - 13.45', name: 'Matematika' },
                { time: '13.45 - 14.30', name: 'Matematika' },
                { time: '14.30 - 15.15', name: 'Matematika' },
            ]
        },
        {
            day: 'Jumat',
            subjects: [
                { time: '07.00 - 07.45', name: 'Kegiatan Jumat' },
                { time: '07.45 - 08.15', name: 'Bahasa Jawa' },
                { time: '08.15 - 08.45', name: 'Bahasa Jawa' },
                { time: '08.45 - 09.15', name: 'Konsentrasi Keahlian PPLG' },
                { time: '09.15 - 09.45', name: 'Konsentrasi Keahlian PPLG' },
                { time: '09.45 - 10.00', name: 'Istirahat' },
                { time: '10.00 - 10.30', name: 'Konsentrasi Keahlian PPLG' },
                { time: '10.30 - 11.00', name: 'Konsentrasi Keahlian PPLG' },
                { time: '11.00 - 11.30', name: 'Konsentrasi Keahlian PPLG' },
                { time: '11.30 - 12.00', name: 'Konsentrasi Keahlian PPLG' },
            ]
        },
    ]

    const picketSchedule = [
        {
            day: 'Senin',
            members: [
                'Aisha Amelia Sakhiy',
                'Arneta Putri Hamid',
                'Bekti Rahayu',
                'Dika Nurhidayah',
                'Fatika Nur Fahrani',
                'Muhammad Atsal Thariq Rami',
                'Nadhif Amyrta Fahma'
            ]
        },
        {
            day: 'Selasa',
            members: [
                'Anindya Putri',
                'Arya Ridho Saputra',
                'Daffa Setya Handika',
                'Ersaf Syirazi Arifin',
                'Fiko Anggara Putra',
                'Muhammad Ubaidillah Maulana L',
                'Naila Setyaningtyas'
            ]
        },
        {
            day: 'Rabu',
            members: [
                'Aprilia Nur Ainy',
                'Arya Shafa Akbar',
                'Debysa Nurul Ustaroh',
                'Fadlan Kautsar Albukhari',
                'Hafizha Raisya Kamila',
                'Nabila Cahya Nugroho',
                'Neysa Vashti Ramadani'
            ]
        },
        {
            day: 'Kamis',
            members: [
                'Kharisma Inka Putri',
                'Laily Arieka Nurasyifa',
                'Lilis Gayuh Saputri',
                'Muflih Rafileseppa',
                "Muhammad 'Izzuddin Zaki",
                'Nabila Safinatunnajah',
                'Prananda Arkan Ramadhan'
            ]
        },
        {
            day: 'Jumat',
            members: [
                'Kidung Mabumi Purwaning Dumadi',
                'Nina Evelyn',
                'Rahmat Aditya Lutfi',
                'Rina Aulia Husna',
                'Thomas Adhi Pamungkas',
                'Tsania Hasna Hanifa',
                'Ubaidillah Ata Aufa'
            ]
        },
    ]

    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
    const currentDay = days[new Date().getDay()]

    return (
        <div className="container mx-auto px-4 py-12 min-h-screen">
            <AnimatedIn>
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4">Jadwal <span className="gradient-text">ESEFTWO</span></h1>
                    <div className="divider max-w-xs mx-auto"></div>
                    <p className="text-xl text-gray-600">Informasi jadwal pelajaran dan petugas piket harian</p>
                </div>
            </AnimatedIn>

            <AnimatedIn>
                <div className="flex justify-center mb-12">
                    <div className="join bg-base-200 p-1 rounded-full">
                        <button 
                            className={`join-item btn btn-lg rounded-full px-8 ${activeTab === 'lessons' ? 'btn-primary' : 'btn-ghost'}`}
                            onClick={() => setActiveTab('lessons')}
                        >
                            Jadwal Pelajaran
                        </button>
                        <button 
                            className={`join-item btn btn-lg rounded-full px-8 ${activeTab === 'picket' ? 'btn-primary' : 'btn-ghost'}`}
                            onClick={() => setActiveTab('picket')}
                        >
                            Jadwal Piket
                        </button>
                    </div>
                </div>
            </AnimatedIn>

            <div className="max-w-6xl mx-auto">
                {activeTab === 'lessons' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {lessonSchedule.map((schedule, idx) => {
                            const isToday = schedule.day === currentDay
                            return (
                                <AnimatedIn key={schedule.day} index={idx}>
                                    <div className={`card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border h-full ${isToday ? 'border-primary ring-2 ring-primary ring-offset-2' : 'border-base-200'}`}>
                                        <div className="card-body p-0">
                                            <div className={`p-4 text-center rounded-t-2xl border-b border-base-200 relative ${isToday ? 'bg-primary text-primary-content' : 'bg-primary/10 text-primary'}`}>
                                                {isToday && (
                                                    <div className="absolute top-2 right-2 badge badge-secondary badge-sm">Hari Ini</div>
                                                )}
                                                <h2 className={`card-title justify-center text-2xl ${isToday ? 'text-primary-content' : 'text-primary'}`}>{schedule.day}</h2>
                                            </div>
                                            <div className="p-6">
                                                <ul className="space-y-4">
                                                    {schedule.subjects.map((subject, subIdx) => (
                                                        <li key={subIdx} className="flex items-start gap-3 group">
                                                            <div className={`badge font-mono text-xs mt-0.5 shrink-0 transition-colors ${isToday ? 'badge-secondary' : 'badge-ghost group-hover:badge-primary'}`}>
                                                                {subject.time}
                                                            </div>
                                                            <span className={`font-medium transition-colors ${isToday ? 'text-base-content' : 'text-base-content/80 group-hover:text-primary'}`}>
                                                                {subject.name}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedIn>
                            )
                        })}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {picketSchedule.map((schedule, idx) => {
                            const isToday = schedule.day === currentDay
                            return (
                                <AnimatedIn key={schedule.day} index={idx}>
                                    <div className={`card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border h-full ${isToday ? 'border-secondary ring-2 ring-secondary ring-offset-2' : 'border-base-200'}`}>
                                        <div className="card-body p-0">
                                            <div className={`p-4 text-center rounded-t-2xl border-b border-base-200 relative ${isToday ? 'bg-secondary text-secondary-content' : 'bg-secondary/10 text-secondary'}`}>
                                                {isToday && (
                                                    <div className="absolute top-2 right-2 badge badge-primary badge-sm">Hari Ini</div>
                                                )}
                                                <h2 className={`card-title justify-center text-2xl ${isToday ? 'text-secondary-content' : 'text-secondary'}`}>{schedule.day}</h2>
                                            </div>
                                            <div className="p-6">
                                                <ul className="space-y-3">
                                                    {schedule.members.map((member, memIdx) => (
                                                        <li key={memIdx} className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${isToday ? 'bg-base-200/50' : 'hover:bg-base-200'}`}>
                                                            <span className="font-medium">{member}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedIn>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Schedule
