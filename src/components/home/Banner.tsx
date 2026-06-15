"use client";

import "@/app/hero.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


export default function HeroSection() {
  return (
    <>
      <div className="flex justify-between mt-20 items-center flex-col lg:flex-row-reverse max-w-7xl mx-auto px-6 py-16 lg:py-20 xl:py-28 2xl:py-30">
        <div className="relative overflow-hidden">
          <div className="flex justify-center items-center w-full">

            <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px]">

              {/* Rotating Text */}
              <div className="absolute inset-0 spin-slow">

                <svg
                  viewBox="0 0 500 500"
                  className="w-full h-full"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 250,250 m -190,0 a 190,190 0 1,1 380,0 a 190,190 0 1,1 -380,0"
                    />
                  </defs>

                  <text
                    fill="white"
                    fontSize="32"
                    fontWeight="500"
                    letterSpacing="3"
                  >
                    <textPath href="#circlePath">
                      THE WEALTH MACHINE • THE WEALTH MACHINE • THE WEALTH MACHINE • THE WEALTH MACHINE •
                    </textPath>
                  </text>
                </svg>

              </div>

              {/* Logo */}
              <div className="absolute inset-[15%] rounded-full border border-[#1D4ED8] bg-black flex items-center justify-center">

                <Image
                  src="/images/dorsenforce/sheild.svg"
                  alt="Logo"
                  width={280}
                  height={280}
                  className="object-contain w-[70%] h-[70%]"
                />

              </div>

            </div>

          </div>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-white font-extrabold leading-[1.05] tracking-tight">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              A Structured <span className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-[linear-gradient(90deg,#00C2FF_0%,#7D13CA_100%)] bg-clip-text text-transparent">
                Network
              </span>
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-[linear-gradient(90deg,#00C2FF_0%,#7D13CA_100%)] bg-clip-text text-transparent">
                Model Designed
              </span>{" "}
              for Scalable
            </span>

            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Earnings
            </span>
          </h1>

          <p className="mt-5 text-gray-300 text-lg sm:text-xl md:text-2xl  max-w-2xl mx-auto lg:mx-0">
            Start with a one-time participation of{" "}
            <span className="font-bold text-white">$65</span> and access
            multiple performance-based income streams.
          </p>

          {/* Buttons */}
          <div className="cursor-pointer mt-5 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <Link href={"/dashboard"}>
              <button className="px-8 py-3 rounded-full border border-[#4DA9FF] text-[#00A1FF] font-bold text-lg hover:bg-[#081A33] transition-all duration-300">
                GET STARTED
              </button>
            </Link>

            <button
              className="
            cursor-pointer
                  relative overflow-hidden
                  px-10 py-3
                  rounded-full
                  text-white font-bold text-lg
                  bg-[linear-gradient(135deg,#66B6FF_0%,#5A49E6_35%,#8A0DDB_65%,#2B1B78_100%)]
                  shadow-[inset_0_8px_20px_rgba(255,255,255,0.35),0_10px_30px_rgba(0,0,0,0.45)]
                "
            >
              VIEW PLAN
            </button>
          </div>
        </div>
      </div>



      <div className="m-auto w-75 sm:w-120">

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 mt-12 justify-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="transition-all h-full duration-300 bg-[linear-gradient(135deg,#00A1FA,#5A49E6_35%,#8A0DDB_65%,#2B1B78_100%)] shadow-[inset_0_12px_25px_rgba(255,255,255,0.35),0_15px_40px_rgba(0,0,0,0.45)] before:absolute before:inset-0 before:rounded-full  before:pointer-events-none p-px rounded-[20px]"
          >
            <div className="bg-black px-5 py-15 h-full rounded-[20px]">
              <div className="text-center">

                <h2 className="text-white  text-xl font-semibold">
                  Multi-income system
                </h2>
              </div>
            </div>
          </motion.div>


          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="transition-all h-full duration-300 bg-[linear-gradient(135deg,#00A1FA,#5A49E6_35%,#8A0DDB_65%,#2B1B78_100%)] shadow-[inset_0_12px_25px_rgba(255,255,255,0.35),0_15px_40px_rgba(0,0,0,0.45)] before:absolute before:inset-0 before:rounded-full  before:pointer-events-none p-px rounded-[20px]"
          >
            <div className="bg-black px-5 py-15 h-full rounded-[20px]">
              <div className="text-center">

                <h2 className="text-white  text-xl font-semibold">
                  Leadership-based rewards
                </h2>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="transition-all h-full duration-300 bg-[linear-gradient(135deg,#00A1FA,#5A49E6_35%,#8A0DDB_65%,#2B1B78_100%)] shadow-[inset_0_12px_25px_rgba(255,255,255,0.35),0_15px_40px_rgba(0,0,0,0.45)] before:absolute before:inset-0 before:rounded-full  before:pointer-events-none p-px rounded-[20px]"
          >
            <div className="bg-black px-5 py-15 h-full rounded-[20px]">
              <div className="text-center">

                <h2 className="text-white  text-xl font-semibold">
                  Automated team structure
                </h2>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="transition-all h-full duration-300 bg-[linear-gradient(135deg,#00A1FA,#5A49E6_35%,#8A0DDB_65%,#2B1B78_100%)] shadow-[inset_0_12px_25px_rgba(255,255,255,0.35),0_15px_40px_rgba(0,0,0,0.45)] before:absolute before:inset-0 before:rounded-full  before:pointer-events-none p-px rounded-[20px]"
          >
            <div className="bg-black px-5 py-15 h-full rounded-[20px]">
              <div className="text-center">

                <h2 className="text-white  text-xl font-semibold">
                  Transparent
                  distribution
                </h2>
              </div>
            </div>
          </motion.div>



        </div>
      </div>
    </>
  );
}