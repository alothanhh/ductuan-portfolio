import { ReactNode } from 'react'
import { motion } from 'framer-motion'

const ScrollFadeUp = ({ children, repeat }: { children: ReactNode; repeat?: boolean }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateY: 30,
      }}
      whileInView={{
        opacity: 1,
        translateY: 0,
      }}
      viewport={{
        once: !repeat,
        margin: '150px',
      }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
      className='w-full'
    >
      {children}
    </motion.div>
  )
}

export default ScrollFadeUp
