'use client'
import { motion, AnimatePresence } from "framer-motion";

interface AirFlowTextProps {
  children: string | React.ReactNode;
  keyIndex?: string;
  className?: string;
  initialY?: number;
  animateY?: number;
  exitY?: number;
  duration?: number;
  delay?: number;
}

export const ScaleUpDown = ({
  children,
  keyIndex,
  className,
  initialY,
  animateY,
  exitY,
  duration,
  delay,
}: AirFlowTextProps) => {
  const dur = duration ?? 0.5;
  const del = delay ?? 0;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={keyIndex}
        initial={{
          opacity: 0,
          y: initialY ?? -20,
          filter: "blur(5px)",
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          y: animateY ?? 0,
          filter: "blur(0px)",
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: exitY ?? 10,
          filter: "blur(4px)",
          scale: 0.9,
        }}
        transition={{
          opacity: { duration: dur, ease: "easeOut", delay: del },
          y: { duration: dur, ease: "easeOut", delay: del },
          scale: { duration: dur, ease: "easeOut", delay: del },
        }}
        className="text-read_16 text-text-color_2 mt-1"
      >
        <span className={className}>{children}</span>
      </motion.div>
    </AnimatePresence>
  );
};
