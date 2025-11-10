import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

interface Props {
  onFinish?: () => void
  duration?: number
}

const GalleryIntro: React.FC<Props> = ({ onFinish, duration = 2200 }) => {
  useEffect(() => {
    const t = setTimeout(() => onFinish && onFinish(), duration)
    return () => clearTimeout(t)
  }, [onFinish, duration])

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6">
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl text-center cursor-pointer"
        onClick={() => onFinish && onFinish()}
      >
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight gradient-text leading-tight">ESEFTWO</h2>
        <p className="mt-6 text-lg md:text-2xl lg:text-3xl font-semibold text-neutral-200">We Are Forever Family<br />Together We Grow Stronger</p>
      </motion.div>
    </div>
  )
}

export default GalleryIntro
