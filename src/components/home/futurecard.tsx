"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Futurecard = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-15 lg:py-20 xl:py-30 2xl:py-30">



      {/* OUTER SHAPE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="
           text-center
            
          "
      >

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-white font-agdasima text-3xl md:text-5xl xl:text-6xl font-bold mt-5"
        >
          Feature {" "}
          <span className="bg-[linear-gradient(90deg,#00C2FF_0%,#7D13CA_100%)] bg-clip-text text-transparent">
            Card
          </span>
        </motion.h1>
      </motion.div>







      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-12 justify-center">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          className="transition-all h-full duration-300 bg-[linear-gradient(135deg,#00A1FA,#5A49E6_35%,#8A0DDB_65%,#2B1B78_100%)] shadow-[inset_0_12px_25px_rgba(255,255,255,0.35),0_15px_40px_rgba(0,0,0,0.45)] before:absolute before:inset-0 before:rounded-full  before:pointer-events-none p-px rounded-3xl"
        >
          <div className="bg-black px-5 py-10 h-full rounded-3xl">
            <div className="text-center">

              <h1 className="text-white  text-3xl font-semibold">
                Smart Distribution
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-white mt-2 max-w-3xl text-lg sm:text-xl md:text-2xl m-auto"
              >
                Balanced reward structure across multiple income streams.
              </motion.p>
            </div>
          </div>
        </motion.div>


        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          className="transition-all h-full duration-300 bg-[linear-gradient(135deg,#00A1FA,#5A49E6_35%,#8A0DDB_65%,#2B1B78_100%)] shadow-[inset_0_12px_25px_rgba(255,255,255,0.35),0_15px_40px_rgba(0,0,0,0.45)] before:absolute before:inset-0 before:rounded-full  before:pointer-events-none p-px rounded-3xl"
        >
          <div className="bg-black px-5 py-10 h-full rounded-3xl">
            <div className="text-center">

              <h1 className="text-white  text-3xl font-semibold">
                Secure Transactions
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-white mt-2 max-w-3xl text-lg sm:text-xl md:text-2xl m-auto"
              >
                Income and withdrawals processed through USDT-based systems.
              </motion.p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          className="transition-all h-full duration-300 bg-[linear-gradient(135deg,#00A1FA,#5A49E6_35%,#8A0DDB_65%,#2B1B78_100%)] shadow-[inset_0_12px_25px_rgba(255,255,255,0.35),0_15px_40px_rgba(0,0,0,0.45)] before:absolute before:inset-0 before:rounded-full  before:pointer-events-none p-px rounded-3xl"
        >
          <div className="bg-black px-5 py-10 h-full rounded-3xl">
            <div className="text-center">

              <h1 className="text-white  text-3xl font-semibold">
              Growth System
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-white mt-2 max-w-3xl text-lg sm:text-xl md:text-2xl m-auto"
              >
              Designed to reward active participation and leadership development.
              </motion.p>
            </div>
          </div>
        </motion.div>





      </div>

    </div>

  );
};

export default Futurecard;
