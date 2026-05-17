"use client";
import { motion } from "framer-motion";

const stakingData = [
  { amount: "0.5 – 5,000 DC", roi: "8%" },
  { amount: "5,001 – 10,000 DC", roi: "7%" },
  { amount: "10,001 – 20,000 DC", roi: "6%" },
  { amount: "20,001 – 30,000 DC", roi: "5%" },
  { amount: "30,001 – 40,000 DC", roi: "4%" },
  { amount: "40,001 – 50,000 DC", roi: "3%" },
  { amount: "50,001 – 60,000 DC", roi: "2%" },
  { amount: "Above 60,000 DC", roi: "1%" },
];

export default function StakingReturns() {
  return (
    <section className="relative bg-black text-white py-20 px-6 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#111,black_60%)]" />

      <div className="relative max-w-[700px] mx-auto text-center">
        
        {/* Title */}
        <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="my-8"
            >
              <h1 className="text-white font-agdasima text-3xl md:text-5xl xl:text-6xl font-bold">
                Staking{" "}
                <span className="bg-[linear-gradient(270deg,#2DB9FF,#B254FA)] bg-clip-text text-transparent">
                  Returns
                </span>
              </h1>
            </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative transition-all h-full duration-300 bg-[linear-gradient(190deg,#311745,#000)] p-px rounded-[40px]"
        >
          <div className="bg-[linear-gradient(180deg,#000,#000,#161D23)] px-5 py-5 h-full rounded-[40px]">
            
            {/* Header Row */}
            <div className="flex justify-between text-lg md:text-2xl font-semibold mb-8">
              <h3>Staked Amount (DC)</h3>
              <h3 className="text-right">Monthly Yield</h3>
            </div>

            {/* ROI Rows */}
            <div className="space-y-5">
              {stakingData.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex justify-between text-sm md:text-lg text-gray-300"
                >
                  <span>{item.amount}</span>
                  <span className="font-semibold text-white">{item.roi}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 text-sm md:text-base text-gray-300 space-y-2"
        >
          <p>
            <span className="font-semibold text-white">Maximum staking limit:</span> 10 DC per cycle
          </p>
          <p>
            <span className="font-semibold text-white">Withdrawal fee:</span> 5%
          </p>
          <p>
            <span className="font-semibold text-white">After 60,000 DC:</span> Only self staking (1%) & level mining bonus remain active
          </p>
        </motion.div>
      </div>
    </section>
  );
}
