"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Qualification = () => {
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
      <div className="text-center ">
      <Image
          src="/images/dorsenforce/qualifications.svg"
          alt="Logo"
          width={280}
          height={280}
          className=" m-auto w-[100%] h-[100%]  sm:w-[50%] sm:h-[50%]"
        />
      </div>
        






      </motion.div>





 

    </div>
  );
};

export default Qualification;
