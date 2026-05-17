"use client";
import { motion } from "framer-motion";

const Aboutdorsen = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 xl:py-28 2xl:py-30">

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
            className="text-white font-agdasima text-3xl md:text-5xl xl:text-6xl font-bold "
          >
            What is {" "}
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
            className="text-white mt-4 max-w-3xl text-lg sm:text-xl md:text-2xl  max-w-2xl sm:text-base m-auto"
          >
            Dorsen Force is a structured network-based participation platform that enables users to earn through <b>referrals, automated pooling systems, and leadership incentives</b>.
          </motion.p>

          {/* PARAGRAPH 2 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-white mt-3 max-w-3xl text-lg sm:text-xl md:text-2xl  max-w-2xl sm:text-base m-auto"
          >
            The model is designed to reward <b>consistent participation, network growth, and long-term engagement</b>.
          </motion.p>





        </motion.div>

      </div>
    </div>
  );
};

export default Aboutdorsen;
