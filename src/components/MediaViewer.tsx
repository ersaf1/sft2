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
}

const MediaViewer: React.FC<Props> = ({ item, onClose }) => {
  if (!item) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={onClose}>
      <div className="max-w-[90%] max-h-[90%] p-4" onClick={(e) => e.stopPropagation()}>
        <div className="bg-base-100 rounded-lg overflow-hidden shadow-xl">
          <div className="p-3 flex justify-between items-center border-b border-base-200">
            {/* intentionally hide filename/title */}
            <div />
            <button className="btn btn-ghost" onClick={onClose} aria-label="Tutup">✕</button>
          </div>
          <div className="p-4 flex items-center justify-center">
            {item.type === 'image' ? (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img loading="lazy" src={item.src} alt={item.title || 'Image'} className="max-w-full max-h-[70vh] object-contain" />
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
