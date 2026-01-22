"use client";

import Image from "next/image";
import Link from "next/link";
import ShinyText from "@/components/ShinyText";
import dogPic from "@/dog.png";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 justify-center px-4 md:px-8 max-w-7xl mx-auto h-full w-full">
      <article className="w-full flex-none lg:flex-1 flex flex-col gap-4 lg:gap-6 text-center lg:text-left items-center lg:items-start justify-center">
        <div className="text-4xl sm:text-5xl lg:text-7xl text-white font-bold tracking-tight w-full">
          <ShinyText
            text="GARDEN FULL OF DOGS & DOGES"
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo
            pauseOnHover={false}
            disabled={false}
          />
        </div>

        <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-md lg:max-w-lg">
          One doge. Two doge. Three doge. Four doge. Five doge. Six seven doge.
          Eight doge. Nine doge. Ten doge.
        </p>

        {/* Styled Link */}
        <div className="text-amber-400 flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-2 text-sm sm:text-base">
          <span>Photos sourced from</span>
          <Link
            href="https://unsplash.com"
            target="_blank"
            className="group inline-flex items-center gap-1.5 bg-white text-black px-3 py-1 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 hover:bg-gray-200 hover:scale-105"
          >
            Unsplash
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </article>

      {/* Image Side 
         FIX: Added 'flex-none' on mobile to prevent stretching quirks.
      */}
      <div className="w-full flex-none lg:flex-1 flex justify-center max-h-[40vh] lg:max-h-full">
        <Image
          src={dogPic}
          alt="A dog"
          width={500}
          height={500}
          // Added 'object-contain' and explicit max-heights to ensure it doesn't overflow
          className="object-contain rounded-2xl w-auto h-full max-h-75 sm:max-h-150 lg:max-h-150"
          priority
        />
      </div>
    </section>
  );
}
