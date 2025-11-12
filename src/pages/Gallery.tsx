import { useEffect, useState } from 'react'
import MediaViewer, { MediaItem } from '../components/MediaViewer'
import GalleryIntro from '../components/GalleryIntro'
import AnimatedIn from '../components/AnimatedIn'

// Small video thumbnail that disables native PiP/remote overlays
const VideoThumb: React.FC<{ src: string }> = ({ src }) => {
    const ref = (el: HTMLVideoElement | null) => {
        if (!el) return
        try { el.setAttribute('playsinline', '') } catch {}
        try { el.setAttribute('webkit-playsinline', '') } catch {}
        try { el.setAttribute('x-webkit-airplay', 'deny') } catch {}
        try { (el as any).disablePictureInPicture = true } catch {}
        try { (el as any).disableRemotePlayback = true } catch {}
    }

    return <video ref={ref} src={src} className="w-full h-full object-cover" muted preload="metadata" playsInline controls={false} controlsList="nodownload noremoteplayback nofullscreen" />
}

const Gallery = () => {
    // activities removed - gallery is now read-only documentation with examples

    const [media, setMedia] = useState<MediaItem[]>([])
    const [viewerItem, setViewerItem] = useState<MediaItem | null>(null)
    const [view, setView] = useState<'photos' | 'videos'>('photos')
    const [showIntro, setShowIntro] = useState<boolean>(() => {
        try {
            if (typeof window === 'undefined') return true
            return !Boolean(sessionStorage.getItem('galleryIntroShown'))
        } catch {
            return true
        }
    })

    useEffect(() => {
        // Preload media files that are placed in public/gallery.
        // If you add more files to public/gallery, include them here.
        const galleryFiles = [
            'e1.jpg',
            'e2.jpg',
            'e3.jpg',
            'e4.jpg',
            'e5.jpg',
            'e6.mp4',
            'e7.jpg',
            'e8.jpg',
            'e9.jpg',
            'e10.mp4',
            'e11.mp4',
            'e12.mp4',
            'e13.jpg',
            'e14.jpg',
            'e15.jpg',
            'e16.jpg',
        ]

        const examples: MediaItem[] = galleryFiles.map((name, idx) => {
            const isVideo = /\.(mp4|webm|mov|mkv)$/i.test(name)
            return {
                id: `g${idx}-${name}`,
                type: isVideo ? 'video' : 'image',
                src: `/gallery/${name}`,
                title: name,
            }
        })

        // Replace media with examples to avoid duplicate entries on HMR/dev reloads
        setMedia(examples)
    }, [])

    const openViewer = (item: MediaItem) => setViewerItem(item)

    const closeViewer = () => setViewerItem(null)

    // read optional intro background mode from URL: ?introbg=transparent|black
    const getIntroBg = () => {
        try {
            if (typeof window === 'undefined') return undefined
            const params = new URLSearchParams(window.location.search)
            const v = params.get('introbg')
            if (v === 'transparent' || v === 'black') return v as 'transparent' | 'black'
        } catch {}
        return undefined
    }

    const introBg = getIntroBg()

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Intro animation shown before gallery content */}
            {showIntro && (
                <GalleryIntro bg={introBg} onFinish={() => { try { sessionStorage.setItem('galleryIntroShown','1') } catch {} ; setShowIntro(false) }} />
            )}
            {/* Header */}
            <AnimatedIn>
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4">Galeri <span className="gradient-text">eseftwo</span></h1>
                    <div className="divider max-w-xs mx-auto"></div>
                    <p className="text-xl text-gray-600">Dokumentasi kegiatan kelas PPLG 2 — foto dan video dari hackathon, workshop, project showcase, kunjungan industri, dan kegiatan kelas lainnya.</p>
                </div>
            </AnimatedIn>

            {/* Tabs: Foto / Video */}
            <AnimatedIn>
                <div className="flex justify-center mb-8">
                    <div className="btn-group">
                        <button className={`btn ${view === 'photos' ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setView('photos')}>Foto</button>
                        <button className={`btn ${view === 'videos' ? 'btn-primary' : 'btn-ghost'}`} onClick={() => setView('videos')}>Video</button>
                    </div>
                </div>
            </AnimatedIn>
            

            {/* Upload removed - gallery is read-only documentation */}

            {/* Photo Grid (user-uploaded + examples) */}
            {/* hide the grid while intro is active */}
            {!showIntro && view === 'photos' && (
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12">Dokumentasi Foto</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {media.filter((m) => m.type === 'image').map((m, i) => (
                            <AnimatedIn key={m.id} index={i}>
                                <div
                                    className="group relative rounded-2xl overflow-hidden card-hover cursor-pointer bg-base-100 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                                    onClick={() => openViewer(m)}
                                >
                                    <img loading="lazy" src={m.src} alt={'Photo'} className="w-full h-52 object-cover" />
                                </div>
                            </AnimatedIn>
                        ))}
                    </div>
                </div>
            )}

            {/* Video Section */}
            {!showIntro && view === 'videos' && (
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12">Video Dokumentasi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Show any video items from media first */}
                        {media.filter((m) => m.type === 'video').length > 0 ? (
                            media.filter((m) => m.type === 'video').map((m, i) => (
                                <AnimatedIn key={m.id} index={i}>
                                    <div className="group relative aspect-video rounded-2xl overflow-hidden card-hover cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl bg-black" onClick={() => openViewer(m)}>
                                        <VideoThumb src={m.src} />
                                        {/* Play overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="p-3 rounded-full bg-black/50 backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-110">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 text-white">
                                                    <path fill="currentColor" d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedIn>
                            ))
                        ) : (
                            [1, 2, 3, 4].map((index) => (
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
                            ))
                        )}
                    </div>
                </div>
            )}
            {viewerItem && (
                <MediaViewer item={viewerItem} onClose={closeViewer} />
            )}
        </div>
    )
}

export default Gallery
