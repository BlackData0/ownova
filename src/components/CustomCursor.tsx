'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const outlineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const outline = outlineRef.current

    if (!dot || !outline) return

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event

      // Smooth animation using CSS transforms
      dot.style.transform = `translate(${clientX - 4}px, ${clientY - 4}px)`
      outline.style.transform = `translate(${clientX - 16}px, ${clientY - 16}px)`
    }

    const onMouseDown = () => {
      dot.style.transform = 'scale(0.9) translate(-50%, -50%)'
      outline.style.transform = 'scale(1.2) translate(-50%, -50%)'
    }

    const onMouseUp = () => {
      dot.style.transform = 'scale(1) translate(-50%, -50%)'
      outline.style.transform = 'scale(1) translate(-50%, -50%)'
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  return (
    <>
      <motion.div
        ref={dotRef}
        className="cursor-dot"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        ref={outlineRef}
        className="cursor-outline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </>
  )
}