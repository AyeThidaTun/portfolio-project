import { motion } from "framer-motion";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link from "next/link";
import SplitText from "@/components/ui/split-text";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export default function Projects() {
  return (
    <section className="px-20">
      <SplitText
        text={`"Every project is a step forward—proof of how far I've come and a glimpse of where I'm going."`}
        className="text-white text-5xl text-center pt-40 pb-50 px-40 leading-20"
        delay={100}
        duration={2}
        ease="power3.out"
        splitType="lines"
        from={{ opacity: 0, y: 80 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />

      <div className="flex flex-col justify-center py-10 gap-y-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            ease: "easeOut",
            duration: 1,
          }}
        >
          <div className="flex items-center justify-start">
            <Link href="https://bed-ca2-atdt.onrender.com" target="_blank">
              <DirectionAwareHover mediaUrl="/trees.jpg" mediaType="image">
                <p className="text-3xl">Ecopets- Sustainability Task Tracker</p>
                <p className="text-md text-gray-300 pt-3">
                  A sustainability task tracker with points giving system.
                </p>
              </DirectionAwareHover>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            ease: "easeOut",
            duration: 1.5,
          }}
        >
          <div className="flex items-center justify-end">
            <Link
              href="https://grp1-gitgud-cicd-cebtafaaa3djfwhk.southeastasia-01.azurewebsites.net/"
              target="_blank"
            >
              <DirectionAwareHover
                mediaUrl="/students.jpg"
                mediaType="image"
                textAlign="end"
              >
                <p className="text-3xl text-right">
                  Study Group App for SP Students
                </p>
                <p className="text-md text-gray-200 pt-3 text-right">
                  A study group website which makes studying more fun and
                  engaging. (Group project)
                </p>
              </DirectionAwareHover>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{
            ease: "easeOut",
            duration: 2,
          }}
        >
          <div className="flex items-center justify-start">
            <Link
              href="https://mushroom-space.vercel.app/"
              target="_blank"
            >
              <DirectionAwareHover mediaUrl="/yellow.jpg" mediaType="image">
                <p className="text-3xl">
                  Mushroom Space - Typing Speed Game
                </p>
                <p className="text-md text-gray-200 pt-3">
                  A typing speed game built using React, TypeScript,
                  Tailwind CSS, and Framer Motion.
                </p>
              </DirectionAwareHover>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            ease: "easeOut",
            duration: 1.5,
          }}
        >
          <div className="flex items-center justify-end">
            <Link href="https://react-study-group-app.vercel.app/" target="_blank">
              <DirectionAwareHover
                mediaUrl="/flower.jpg"
                mediaType="image"
                textAlign="end"
              >
                <p className="text-3xl text-right">
                  Studybara - A React-Based Frontend Project
                </p>
                <p className="text-md text-gray-200 pt-3 text-right">
                  A refined take on my earlier study group site, built with
                  enhanced UI/UX in mind.
                  <br />
                  (In development phase)                
                </p>
              </DirectionAwareHover>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
