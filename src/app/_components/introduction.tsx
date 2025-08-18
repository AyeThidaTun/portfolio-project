"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import "../globals.css";

type Props = {
  handleGetStarted: () => void;
}

export default function WelcomeHeader({handleGetStarted} : Props) {
  return (
    <section className="">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
        className="text-[2vw]"
      >
        <h1 className="flex justify-center text-white z-10 select-text">
          From curiosity to creation — here&apos;s my journey so far.
        </h1>
        <div className="flex justify-center py-3 z-10 relative">
          <Button
            variant="outline"
            size="lg"
            onClick={handleGetStarted}
            className="text-lg bg-gradient-to-tl from-blue-200 to-pink-200 cursor-pointer"
          >
            Get Started
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
