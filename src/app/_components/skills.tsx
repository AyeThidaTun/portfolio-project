import SplitText from "@/components/ui/split-text";
import Image from "next/image";
import { motion } from "framer-motion";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export default function Skills() {
  const allSkills = [
    {
      src: ["/javascript.svg"],
      title: "JavaScript",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam culpa sapiente voluptates tempora nemo fuga quas exercitationem voluptate, consequuntur ullam cupiditate blanditiis suscipit",
    },
    {
      src: ["/html.svg", "/css.svg"],
      title: "HTML & CSS",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam culpa sapiente voluptates tempora nemo fuga quas exercitationem voluptate, consequuntur ullam cupiditate blanditiis suscipit",
    },
    {
      src: ["/nodejs.svg", "/react.svg"],
      title: "NodeJS, React.JS",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam culpa sapiente voluptates tempora nemo fuga quas exercitationem voluptate, consequuntur ullam cupiditate blanditiis suscipit",
    },
    {
      src: ["/postgresql.svg", "/mysql.svg"],
      title: "PostgreSQL, MySQL",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam culpa sapiente voluptates tempora nemo fuga quas exercitationem voluptate, consequuntur ullam cupiditate blanditiis suscipit",
    },
    {
      src: ["/typescript.svg"],
      title: "TypeScript",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam culpa sapiente voluptates tempora nemo fuga quas exercitationem voluptate, consequuntur ullam cupiditate blanditiis suscipit",
    },
    {
      src: ["/github.svg"],
      title: "GitHub",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam culpa sapiente voluptates tempora nemo fuga quas exercitationem voluptate, consequuntur ullam cupiditate blanditiis suscipit",
    },
    {
      src: ["/java.svg"],
      title: "Java",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam culpa sapiente voluptates tempora nemo fuga quas exercitationem voluptate, consequuntur ullam cupiditate blanditiis suscipit",
    },
    {
      src: ["/vscode.svg"],
      title: "Visual Studio Code",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam culpa sapiente voluptates tempora nemo fuga quas exercitationem voluptate, consequuntur ullam cupiditate blanditiis suscipit",
    },
    {
      src: ["/figma.svg"],
      title: "Figma",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam culpa sapiente voluptates tempora nemo fuga quas exercitationem voluptate, consequuntur ullam cupiditate blanditiis suscipit",
    },
    {
      src: ["/adobe.svg"],
      title: "Adobe Illustrator",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam culpa sapiente voluptates tempora nemo fuga quas exercitationem voluptate, consequuntur ullam cupiditate blanditiis suscipit",
    },

    {
      src: ["/ubuntu.svg"],
      title: "Ubuntu",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam culpa sapiente voluptates tempora nemo fuga quas exercitationem voluptate, consequuntur ullam cupiditate blanditiis suscipit",
    },
  ];

  return (
    <section className="pt-20 pb-10">
      <SplitText
        text={`"Every tool I've picked up tells a story of a bug fixed, a feature built, or a challenge overcome."`}
        className="text-white text-2xl lg:text-5xl text-center pt-40 pb-50 px-10 md:px-30 lg:px-40 leading-10 lg:leading-20"
        delay={100}
        duration={1}
        ease="power3.out"
        splitType="words"
        from={{ opacity: 0, y: 50 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-20 py-30 gap-10 gap-y-20">
        {allSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              type: "spring",
              damping: 10,
              ease: "easeOut",
              duration: 1,
            }}
            className="col-span-1"
          >
            <div className="flex items-center gap-x-3 pb-5">
              {skill.src.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={skill.title}
                  width={50}
                  height={50}
                />
              ))}
            </div>
            <h2 className="text-white text-xl font-bold pb-3">{skill.title}</h2>
            <p className="text-white tracking-wide">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
