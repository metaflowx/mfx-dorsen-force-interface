"use client";
import { motion } from "framer-motion";

const roadmapData = [
  {
    phase: "Phase 1",
    title: "2025",
    points: [
      "Dkart E-commerce",
      "Dorsen Blockchain foundation",
    ],
  },
  {
    phase: "Phase 2",
    title: "Q1 2026",
    points: [
      "DC Coin launch",
      "On-chain staking",
      "Coin Gecko + 1 CEX listing",
      "Community building",
      "DEX/Swap"
    ],
  },
  {
    phase: "Phase 3",
    title: "Q3 2026",
    points: [
      "Partnership",
      "CEX listings",
      
    ],
  },
  {
    phase: "Phase 4",
    title: "Q4 2026",
    points: [
      "Crypto Exchange platform CEX)",
      "Web3 Wallet",
    ],
  },
  {
    phase: "Phase 5",
    title: "2027",
    points: [
      "Fractional property ownership (NFT)",
      "Blockchain expansion",
      "Dorsen Arbitrage",
    ],
  },
  {
    phase: "Phase 6",
    title: "2030",
    points: [
      "Stablecoin",
      
    ],
  },
];

export default function Roadmap() {
  return (
    <section className="relative bg-black text-white py-20 px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute " />

      <div className="relative max-w-6xl mx-auto">
        
        {/* Title */}
        <h1 className="text-white text-left sm:text-center mb-5 font-agdasima text-3xl md:text-5xl xl:text-6xl font-bold"><span className="bg-[linear-gradient(270deg,#2DB9FF,#B254FA)] bg-clip-text text-transparent">Roadmap</span></h1>

        <div className="relative">
          
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-linear-to-b from-purple-500 via-blue-500 to-purple-500 transform -translate-x-1/2" />

          {roadmapData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative mb-16 flex flex-col md:flex-row items-center ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Content Box */}
                <div
                  className={`w-full md:w-1/2 px-6 ${
                    isLeft ? "md:text-right md:pr-16" : "md:text-left md:pl-16"
                  }`}
                >
                  <p className="bg-[linear-gradient(270deg,#2DB9FF,#B254FA)] bg-clip-text text-transparent inline-block mb-1">{item.phase}</p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    {item.title}
                  </h3>
                  <ul className="space-y-1 text-gray-300 text-sm md:text-base">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Circle Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 rounded-full border-2 border-[#a45efa] bg-black shadow-[0_0_15px_#3b82f6]" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
