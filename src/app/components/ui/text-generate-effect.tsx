"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate(); // 'scope' refers to the parent container for animating elements
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      scope.current.querySelectorAll("span"), // Pass direct reference to the spans
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration || 1,
        delay: stagger(0.2), // Apply staggered animation for each span
      }
    );
  }, [animate, filter, duration, words, scope]);

  const renderWords = () => {
    return wordsArray.map((word, idx) => (
      <motion.span
        key={word + idx}
        className="dark:text-white text-black opacity-0"
        style={{
          filter: filter ? "blur(10px)" : "none",
        }}
      >
        {word}{" "}
      </motion.span>
    ));
  };

  return (
    <div className={cn("font-bold", className ?? "")} ref={scope}> {/* Attach ref to the container */}
      <div className="mt-4">
        <div className={cn("dark:text-white text-black leading-snug tracking-wide", className)}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
