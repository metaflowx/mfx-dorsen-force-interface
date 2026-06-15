"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BalanceCard from "@/components/dashboard/balanceCard";
import { Copy, LogOut } from "lucide-react";
import { useConnection, useReadContracts } from "wagmi";
import { Address, formatEther, zeroAddress } from "viem";
import { toast } from "sonner";
import { stringTrimMiddle } from "@/libs/stringTrimMiddle";
import { useAppKitNetwork } from "@reown/appkit/react";
import { dorsenConfig } from "@/app/constants/contract";
import { convertToAbbreviated } from "@/libs/convertToAbbreviated";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ProfilePage() {
  const { chainId } = useAppKitNetwork()
  const { address } = useConnection()
  const result = useReadContracts({
    contracts: [
      {
        ...dorsenConfig,
        functionName: "getUserInfo",
        args: [address as Address],
        chainId: Number(chainId) ?? 99110,
      },
      {
        ...dorsenConfig,
        functionName: "getUserTotalEarnings",
        args: [address as Address],
        chainId: Number(chainId) ?? 99110,
      }
    ],

  });


  const copyAddress = () => {
    navigator.clipboard.writeText(address as Address);
    toast.success("Copy Address Successfully")
  };

  return (
    <div className="py-5">
      <main className="space-y-8">
        {/* Top Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
        >
          <BalanceCard
            title="Your Referrals"
            token={result?.data?.[0]?.result?.[7] ? result?.data?.[0]?.result?.[7].toString() : "0"}
            usd=""
          />

          <BalanceCard
            title="Your Referral Earning"
            token={
              `
              $${convertToAbbreviated(
                Number(formatEther(BigInt(result?.data?.[1]?.result?.[4] ?? 0))) +
                Number(formatEther(BigInt(result?.data?.[1]?.result?.[5] ?? 0)))
              )}
              `
            }
            usd=""
          />
          <BalanceCard
            title="Your Referral By"
            token={stringTrimMiddle(
              result?.data?.[0]?.result?.[1] ? result?.data?.[0]?.result?.[1].toString() : zeroAddress
            )}
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
                  {stringTrimMiddle(address as Address ?? zeroAddress)}
                </p>

                <button
                  onClick={copyAddress}
                  className="transition hover:text-cyan-400"
                >
                  <Copy size={24} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}