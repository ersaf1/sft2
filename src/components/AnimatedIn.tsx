import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
  children: ReactNode
  className?: string
  index?: number
  stagger?: number
}

const AnimatedIn: React.FC<Props> = ({ children, className, index = 0, stagger = 0.06 }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18, scale: 0.995 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ delay: index * stagger, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedIn
