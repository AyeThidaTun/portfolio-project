"use client";
import { motion, easeInOut } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const images = [
  { src: "/pink.svg", alt: "pink", size: 60, top: "10vh", left: "20vw" },
  { src: "/blue.svg", alt: "blue", size: 60, top: "20vh", left: "50vw" },
  { src: "/pink.svg", alt: "pink", size: 60, top: "8vh", left: "80vw" },
  { src: "/blue.svg", alt: "blue", size: 60, top: "60vh", left: "70vw" },
  { src: "/pink.svg", alt: "pink", size: 60, top: "90vh", left: "10vw" },
  { src: "/blue.svg", alt: "draggable", size: 60, top: "25vh", left: "5vw" },
  { src: "/pink.svg", alt: "pink", size: 60, top: "80vh", left: "80vw" },
  { src: "/blue.svg", alt: "blue", size: 60, top: "70vh", left: "30vw" },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
      {images.map((image, index) => {
        const isDraggable = image.alt === "draggable";

        const motionProps = {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: [0, -10, 0] },
          transition: {
            opacity: { duration: 0.8, delay: 0.6 },
            duration: Math.random() * 1 + 1,
            repeat: Infinity,
            ease: easeInOut,
            delay: 0.8,
          },
          style: { top: image.top, left: image.left },
          className: "absolute",
        };

        if (isDraggable) {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute"
              style={{ top: image.top, left: image.left }}
            >
              <div>
                  <Image
                    src="/drag.png"
                    alt="drag-me"
                    width={100}
                    height={100}
                    className="mb-3"
                    draggable={false}
                  />
                </div>
              <motion.div
                drag
                dragElastic={0.5}
                dragConstraints={containerRef}
                dragTransition={{ bounceDamping: 10 }}
                className="cursor-grab ml-5"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: easeInOut,
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.size}
                    height={image.size}
                    priority
                    draggable={false}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          );
        }

        return (
          <motion.div key={index} {...motionProps}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.size}
              height={image.size}
              priority
            />
          </motion.div>
        );
      })}
    </div>
  );
}
