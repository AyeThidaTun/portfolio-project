import { forwardRef } from "react";
import Image from "next/image";
import BlurText from "@/components/ui/blur-text";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const AboutMe = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="text-white py-30 pt-50">
      <div className=" flex-col lg:flex-row items-center grid md:grid-cols-2 lg:grid-cols-2 md:gap-x-5 lg:gap-x-10">
        <div className="text-lg md:text-xl col-span-1">
          <h1 className="text-5xl lg:text-8xl pb-20">About Me</h1>
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
              className="rounded-full w-60 h-60 sm:w-56 sm:h-56 md:w-72 md:h-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
AboutMe.displayName = "AboutMe";
