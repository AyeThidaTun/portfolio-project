import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-neutral-900 text-white dark:text-gray-300 py-8 mt-12 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left side */}
        <p className="text-sm md:text-md lg:text-lg">
          © {new Date().getFullYear()} Aye Thida Tun. All rights reserved.
        </p>

        {/* Right side social icons */}
        <div className="flex gap-8">
          <Link
            href="https://www.linkedin.com/in/ayethidatun/"
            target="_blank"
            className="hover:text-amber-400 transition-colors"
          >
            <Icon icon="devicon:linkedin" width={30} height={30} />
          </Link>
          <Link
            href="mailto:ayethidatun.anna@gmail.com"
            target="_blank"
            className="hover:text-amber-400 transition-colors"
          >
            <Icon icon="logos:google-gmail" width={30} height={30} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
