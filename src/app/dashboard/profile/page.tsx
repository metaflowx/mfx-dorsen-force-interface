"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BalanceCard from "@/components/dashboard/balanceCard";
import { Copy, LogOut } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ProfilePage() {
  const walletAddress = "0x39deb3.....e2ac64rd";

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
  };

  return (
    <div className="py-5">
      <main className="space-y-8">
        {/* Top Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"
        >
          <BalanceCard
            title="Your Referrals"
            token="0"
            usd=""
          />

          <BalanceCard
            title="Your Referral Earning"
            token="0.00 DF"
            usd=""
          />

          <BalanceCard
            title="Your Referral Claimed"
            token="0.00 DF"
            usd=""
          />

          <BalanceCard
            title="Your Referral By"
            token="--"
            usd=""
          />
        </motion.div>

        {/* Profile Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="rounded-[28px] bg-transparent"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-10">
            Profile
          </h1>

          <div className="flex flex-col gap-8">
            {/* User Info */}
            <div className="flex items-center gap-6">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                  alt="Profile"
                   
                  className="object-cover"
                />
              </div>

              <div className="flex items-center gap-3">
                <p className="text-2xl md:text-3xl">
                  {walletAddress}
                </p>

                <button
                  onClick={copyAddress}
                  className="transition hover:text-cyan-400"
                >
                  <Copy size={24} />
                </button>
              </div>
            </div>

            {/* Logout Button */}
            <div>
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-purple-700 text-white text-xl font-medium shadow-lg hover:scale-105 transition flex items-center gap-3">
                <LogOut size={22} />
                Logout
              </button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}