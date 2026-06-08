"use client";
import { motion } from "framer-motion";

const BalanceCard = ({
  title,
  token,
  usd,
}: {
  title: string;
  token: string;
  usd: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="bg-[linear-gradient(135deg,#66B6FF_0%,#5A49E6_35%,#8A0DDB_65%,#2B1B78_100%)] p-px rounded-[20px]"
    >
      <div className="bg-[linear-gradient(180deg,#000,#000,#000)] px-4 py-4 h-full rounded-[20px] text-center">
         
          <p className="text-lg inline-block bg-[linear-gradient(270deg,#fff,#fff)] bg-clip-text text-transparent">
            {title}
          </p>
         
        <h2 className="text-xl font-bold mt-2">{token}</h2>
         
      </div>
    </motion.div>
  );
};

export default BalanceCard;
