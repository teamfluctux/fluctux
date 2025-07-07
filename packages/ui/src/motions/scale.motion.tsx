import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ScaleMotion = ({
  children,
  duration = 0.3,
  key: _,
}: {
  children: React.ReactNode;
  duration?: number;
  key?: string | number;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="scale-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration, ease: "easeOut" }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
