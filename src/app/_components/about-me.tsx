import { forwardRef } from "react";
import Image from "next/image";
import BlurText from "@/components/ui/blur-text";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const AboutMe = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="text-white py-30 pt-50">
      <div className=" flex-col md:flex-row items-center grid grid-cols-2 gap-x-10">
        <div className="text-xl col-span-1">
          <h1 className="text-8xl pb-20">About Me</h1>
          <BlurText
            text={`Hey there! I’m Anna — short for Aye Thida Tun. I’m in my final year at Singapore Polytechnic, studying Information Technology. I love building cool things with code, exploring new tech, and bringing ideas to life - whether it’s a fun side project or something that solves real problems. Feel free to scroll through my portfolio!`}
            delay={50}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="mb-8"
          />
        </div>
        <div className="col-span-1 justify-center flex">
          <div className="relative">
            <Image
              src="/linkedin.jpg"
              alt="linkedin"
              width={350}
              height={350}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
AboutMe.displayName = "AboutMe";
