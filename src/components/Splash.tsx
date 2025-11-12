import React, { useEffect, useRef } from 'react'

interface Props {
    onFinish?: () => void
}

const Splash: React.FC<Props> = ({ onFinish }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null)

    useEffect(() => {
        // try to autoplay programmatically (muted) for better consistency
        const v = videoRef.current
        if (v) {
            // Prefer to disable native picture-in-picture / remote playback overlays
            try {
                // set attributes for iOS/Safari
                v.setAttribute('playsinline', '')
                v.setAttribute('webkit-playsinline', '')
                v.setAttribute('x-webkit-airplay', 'deny')
            } catch {}

            try {
                // these props may not exist on all browsers/types, set defensively
                ;(v as any).disablePictureInPicture = true
                ;(v as any).disableRemotePlayback = true
            } catch {}

            // Try to play unmuted first (some platforms permit autoplay with sound).
            try { v.muted = false } catch {}
            const p = v.play()
            if (p && typeof p.catch === 'function') p.catch(() => {
                // If autoplay with sound is blocked, fall back to muted playback and retry.
                try { v.muted = true } catch {}
                v.play().catch(() => {})
            })
        }
    }, [])

    return (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center splash-fullscreen-video">
            <video
                ref={videoRef}
                src="/sftA.mp4"
                preload="auto"
                autoPlay
                // NOTE: we try to play unmuted first; if browser blocks autoplay with sound
                // we fall back to muted playback (best-effort to enable audio where allowed)
                playsInline
                controls={false}
                controlsList="nodownload noremoteplayback nofullscreen"
                onEnded={() => { try { onFinish && onFinish() } catch {} }}
                className="splash-video-el w-screen h-screen object-contain md:object-cover block"
            />
        </div>
    )
}

export default Splash
