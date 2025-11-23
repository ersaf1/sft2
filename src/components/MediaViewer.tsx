import React, { useEffect, useRef } from 'react'

type MediaItem = {
  id: string
  type: 'image' | 'video'
  src: string
  title?: string
}

interface Props {
  item: MediaItem | null
  onClose: () => void
  onNext?: () => void
  onPrev?: () => void
  hasNext?: boolean
  hasPrev?: boolean
}

const MediaViewer: React.FC<Props> = ({ item, onClose, onNext, onPrev, hasNext, hasPrev }) => {
  if (!item) return null

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && onNext) onNext()
      if (e.key === 'ArrowLeft' && onPrev) onPrev()
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onNext, onPrev, onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={onClose}>
      
      {/* Navigation Buttons */}
      {hasPrev && (
        <button 
          className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost text-white hover:bg-white/20 z-[60]"
          onClick={(e) => { e.stopPropagation(); onPrev?.() }}
        >
          ❮
        </button>
      )}
      
      {hasNext && (
        <button 
          className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost text-white hover:bg-white/20 z-[60]"
          onClick={(e) => { e.stopPropagation(); onNext?.() }}
        >
          ❯
        </button>
      )}

      <div className="max-w-[90%] max-h-[90%] p-4 relative w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <div className="bg-base-100 rounded-lg overflow-hidden shadow-xl w-full max-w-5xl">
          <div className="p-3 flex justify-between items-center border-b border-base-200 bg-base-100">
            {/* intentionally hide filename/title */}
            <div />
            <button className="btn btn-ghost btn-sm btn-circle" onClick={onClose} aria-label="Tutup">✕</button>
          </div>
          <div className="p-4 flex items-center justify-center bg-black/5 min-h-[300px]">
            {item.type === 'image' ? (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img loading="lazy" src={item.src} alt={item.title || 'Image'} className="max-w-full max-h-[70vh] object-contain shadow-lg" />
            ) : (
              <VideoPlayer src={item.src} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


const VideoPlayer: React.FC<{ src: string }> = ({ src }) => {
  const ref = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    try {
      v.setAttribute('playsinline', '')
      v.setAttribute('webkit-playsinline', '')
      v.setAttribute('x-webkit-airplay', 'deny')
    } catch {}
    try { (v as any).disablePictureInPicture = true } catch {}
    try { (v as any).disableRemotePlayback = true } catch {}
  }, [])

  return (
    <video
      ref={ref}
      src={src}
      controls
      className="max-w-full max-h-[70vh]"
      playsInline
      controlsList="nodownload noremoteplayback nofullscreen"
    />
  )
}

export type { MediaItem }
export default MediaViewer
