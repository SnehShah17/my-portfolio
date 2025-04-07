"use client"

import { motion } from "framer-motion"

export default function SplineLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="text-primary text-lg font-medium"
      >
        Loading 3D scene...
      </motion.div>
    </div>
  )
}

