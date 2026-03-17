"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
  footer?: ReactNode;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({ text, className, footer }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    // Start revealing earlier and finish sooner while scrolling this section.
    offset: ["start 0.5", "end 0.9"],
  });
  const progress = useTransform(scrollYProgress, [0, 0.75], [0, 1], { clamp: true });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[160vh]", className)}>
      <div className="sticky top-0 mx-auto flex h-full max-w-4xl flex-col items-center justify-center bg-transparent px-[1rem] py-8 md:py-10">
        <p className="flex flex-wrap justify-center p-3 text-center text-2xl font-bold text-black/20 dark:text-white/20 md:p-4 md:text-3xl lg:p-6 lg:text-4xl xl:text-5xl">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={`${word}-${i}`} progress={progress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
        {footer ? <div className="mt-8 w-full flex justify-center">{footer}</div> : null}
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity }} className="text-black dark:text-white">
        {children}
      </motion.span>
    </span>
  );
};

export { TextRevealByWord };

