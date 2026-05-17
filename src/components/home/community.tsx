"use client"
import Link from "next/link";
import Button from "../Button";
import { motion } from "framer-motion";

const BnrCardItem = [
  { id: 1, title: "On-Chain Staking & Mining" },
  { id: 2, title: "Fully Decentralized Smart Contracts" },
  { id: 3, title: "Self Custody – No MD, No CMD, No Owner" },
  { id: 4, title: "Sustainable Long-Term Rewards" }
];

const Community = () => {

  // Framer Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const cardHover = {
    whileHover: { y: -5, scale: 1.02, transition: { duration: 0.3 } }
  };

  return (
    <section className="relative overflow-hidden  py-4 px-4">

  {/* Background Glow */}
  <div className="absolute ]" />

  <div className="max-w-7xl mx-auto relative z-10">

    {/* CTA BOX */}
    <div
      className="
        relative overflow-hidden
        rounded-[45px]
         py-10
        bg-[linear-gradient(135deg,#0EA5FF_0%,#4F63E7_50%,#9B11E0_100%)]
        shadow-[0_0_80px_rgba(59,130,246,0.18)]
      "
    >

      {/* Top Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_35%)]" />

      {/* Content */}
      <div className="relative z-10 text-center">

        {/* Heading */}
        <h2
          className="
            text-white
            font-agdasima
            font-bold
            leading-none
            text-2xl
            sm:text-3xl
            md:text-3xl
            lg:text-5xl
          "
        >
          Start Your Journey Today
        </h2>

        {/* Subtitle */}
        <p
          className="
            mt-2
            text-white/90
            font-agdasima
            text-3xl
             
          "
        >
          Join Dorsen Force and explore a structured earning system.
        </p>

        {/* Button */}
        <div className="mt-5">

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
              Join Now for $65
            </button>

        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Community;
