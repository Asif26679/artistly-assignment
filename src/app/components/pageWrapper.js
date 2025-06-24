"use client";

import { motion } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}       // on mount
      animate={{ opacity: 1, y: 0 }}        // animate in
      exit={{ opacity: 0, y: -20 }}         // on leave (optional)
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
