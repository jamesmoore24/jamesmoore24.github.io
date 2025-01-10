import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = [
  " senior at MIT.",
  " machine learning researcher.",
  " software engineer.",
  "n AI enthusiast.",
  " baseball player.",
  " piano improviser.",
  " thai food lover.",
  " leadership training institute lead mentor.",
  " golf enthusiast.",
  " sushi lover.",
];

export function TypewriterEffect() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (text.length < roles[currentRole].length) {
            setText(roles[currentRole].slice(0, text.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (text.length === 0) {
            setIsDeleting(false);
            setCurrentRole((current) => (current + 1) % roles.length);
          } else {
            setText(text.slice(0, -1));
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentRole]);

  return (
    <div className="h-8 flex items-center justify-center text-purple-400 font-bold text-2xl whitespace-pre-wrap">
      I am a
      <motion.div
        key={currentRole}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        {text}
        <span className="animate-blink">|</span>
      </motion.div>
    </div>
  );
}
