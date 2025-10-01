"use client";
import { motion, AnimatePresence } from "framer-motion";
import { easeOut } from "framer-motion";

interface AirFlowTextProps {
  children: string | React.ReactNode;
  keyIndex?: number;
  className?: string;
  initialY?: number;
  animateY?: number;
  exitY?: number;
  duration?: number;
  delay?: number;
}

export const AirFlowText = ({
  children,
  keyIndex,
  className,
  initialY,
  animateY,
  exitY,
  duration,
  delay,
}: AirFlowTextProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={keyIndex}
        initial={{
          opacity: 0,
          y: initialY ?? -20,
          filter: "blur(5px)",
          scale: 0.8,
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
          scale: 0.8,
        }}
        transition={{
          opacity: {
            duration: duration ?? 0.8,
            ease: "easeOut",
            delay: delay ?? 0,
          },
          y: { duration: duration ?? 0.8, ease: "easeOut", delay: delay ?? 0 },
          scale: {
            duration: duration ?? 0.8,
            ease: "easeOut",
            delay: delay ?? 0,
          },
        }}
        className="text-read_16 text-text-color_2 mt-1"
      >
        <span className={className}>{children}</span>
      </motion.div>
    </AnimatePresence>
  );
};
