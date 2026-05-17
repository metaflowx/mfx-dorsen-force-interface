"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Whydorsen = () => {
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
          Why Choose {" "}
          <span className="bg-[linear-gradient(90deg,#00C2FF_0%,#7D13CA_100%)] bg-clip-text text-transparent">
            Dorsen Force
          </span>
        </motion.h1>

        {/* PARAGRAPH 1 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-white mt-4 max-w-3xl text-lg sm:text-xl md:text-2xl m-auto font-bold"
        >
          Built for Growth, Designed for Participation
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-white mt-2 max-w-3xl text-lg sm:text-xl md:text-2xl m-auto"
        >
          Dorsen Force combines structured rewards, automated systems, and leadership incentives into a single ecosystem designed for long-term scalability.
        </motion.p>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-white mt-4 max-w-3xl text-lg sm:text-xl md:text-2xl m-auto font-bold"
        >
          Our platform focuses on:
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-white mt-2 max-w-3xl text-lg sm:text-xl md:text-2xl m-auto"
        >
          Transparent distribution structure
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-white mt-2 max-w-3xl text-lg sm:text-xl md:text-2xl m-auto"
        >
          Automated earning mechanisms
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-white mt-2 max-w-3xl text-lg sm:text-xl md:text-2xl m-auto"
        >
          Community-driven growth
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-white mt-2 max-w-3xl text-lg sm:text-xl md:text-2xl m-auto"
        >
          Performance-based rewards
        </motion.p>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-white mt-2 max-w-3xl text-lg sm:text-xl md:text-2xl m-auto"
        >
          Scalable network opportunities
        </motion.p>




      </motion.div>









    </div>

  );
};

export default Whydorsen;
