"use client";

import { dorsenConfig } from "@/app/constants/contract";
import BalanceCard from "@/components/dashboard/balanceCard";
import { convertToAbbreviated } from "@/libs/convertToAbbreviated";
import { useAppKitNetwork } from "@reown/appkit/react";
import { motion } from "framer-motion";
import { Address, formatEther } from "viem";
import { useConnection, useReadContracts } from "wagmi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const diamondPools = [
  {
    level: "L-01",
    members: 2,
    amount: "$50",
    points: "0P",
    withdraw: "0 directs",
    progress: 100,
    status: "Done",
  },
  {
    level: "L-02",
    members: 4,
    amount: "$100",
    points: "0P",
    withdraw: "0 directs",
    progress: 50,
    status: "Active",
  },
  {
    level: "L-03",
    members: 8,
    amount: "$200",
    points: "0P",
    withdraw: "0 directs",
    progress: 0,
    status: "Pending",
  },
  {
    level: "L-04",
    members: 16,
    amount: "$500",
    points: "1P",
    withdraw: "1 directs",
    progress: 0,
    status: "Pending",
  },
  {
    level: "L-05",
    members: 32,
    amount: "$1000",
    points: "2P",
    withdraw: "2 directs",
    progress: 0,
    status: "Pending",
  },
  {
    level: "L-06",
    members: 64,
    amount: "$2000",
    points: "4P",
    withdraw: "4 directs",
    progress: 0,
    status: "Pending",
  },
  {
    level: "L-07",
    members: 128,
    amount: "$5000",
    points: "8P",
    withdraw: "8 directs",
    progress: 0,
    status: "Pending",
  },
  {
    level: "L-08",
    members: 256,
    amount: "$10,000",
    points: "20P",
    withdraw: "20 directs",
    progress: 0,
    status: "Pending",
  },
  {
    level: "L-09",
    members: 512,
    amount: "$20,000",
    points: "50P",
    withdraw: "50 directs",
    progress: 0,
    status: "Pending",
  },
  {
    level: "L-10",
    members: 1024,
    amount: "$100,000",
    points: "1000P",
    withdraw: "1000 directs",
    progress: 0,
    status: "Pending",
  },
];

const withdrawalConditions = [
  { pool: 1, directs: 0 },
  { pool: 2, directs: 0 },
  { pool: 3, directs: 0 },
  { pool: 4, directs: 1 },
  { pool: 5, directs: 2 },
  { pool: 6, directs: 4 },
  { pool: 7, directs: 8 },
  { pool: 8, directs: 20 },
  { pool: 9, directs: 50 },
  { pool: 10, directs: 1000 },
];

export default function ElitePage() {
  const { chainId } = useAppKitNetwork()
  const { address } = useConnection()
  const result = useReadContracts({
    contracts: [
      {
        ...dorsenConfig,
        functionName: "getUserInfo",
        args: [address as Address],
        chainId: Number(chainId) ?? 99110,
      }

    ],

  });
  return (
    <div className="py-5">
      <main className="space-y-6">
        {/* Top Cards */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <BalanceCard
            title="Elite Status"
            token="Elite"
            usd="Eligible for Elite Pool"
          />

          <BalanceCard
            title="Points Earned"
            token={
              `${result?.data?.[0]?.result?.[7] ? result?.data?.[0]?.result?.[7] : 0}P
              `
            }
            usd="From completed pools"
          />

          <BalanceCard
            title="Elite Pool Earned"
            token={convertToAbbreviated(Number(formatEther(BigInt(result?.data?.[0]?.result?.[4] ?? 0))))}
            usd="10% income pool"
          />
        </motion.div>

        {/* Main Table Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="rounded-[28px] w-[320px] sm:w-full border border-cyan-500 bg-black/90 p-6 md:p-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Elite Autopool — 10 Pool Levels
            <span className="text-cyan-400">
              {" "}
              (10% Distribution)
            </span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] ">
              <thead>
                <tr className="border-b border-white/10 text-left text-gray-400">
                  <th className="pb-5 font-medium">Pool</th>
                  <th className="pb-5 font-medium">Members</th>
                  <th className="pb-5 font-medium">Pool Amount</th>
                  <th className="pb-5 font-medium">Points</th>
                  <th className="pb-5 font-medium">
                    Withdrawal Req.
                  </th>
                  <th className="pb-5 font-medium">Progress</th>
                  <th className="pb-5 font-medium">
                    Status
                  </th>
                  <th className="pb-5 font-medium text-right">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {diamondPools.map((item) => (
                  <tr
                    key={item.level}
                    className="border-b border-white/10 hover:bg-white/[0.02]"
                  >
                    <td className="py-5 text-lg">
                      {item.level}
                    </td>

                    <td className="py-5 text-lg">
                      {item.members}
                    </td>

                    <td className="py-5 text-lg">
                      {item.amount}
                    </td>

                    <td className="py-5 text-lg text-cyan-400 font-medium">
                      {item.points}
                    </td>

                    <td className="py-5 text-lg">
                      {item.withdraw}
                    </td>

                    <td className="py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-36 md:w-44 h-1.5 bg-white/20 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-400 rounded-full"
                            style={{
                              width: `${item.progress}%`,
                            }}
                          />
                        </div>

                        <span className="text-lg">
                          {item.progress}%
                        </span>
                      </div>
                    </td>

                    <td className="py-5">
                      <span
                        className={`text-lg ${item.status === "Done"
                          ? "text-emerald-400"
                          : item.status === "Active"
                            ? "text-yellow-400"
                            : "text-gray-400"
                          }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="text-right">
                      <button className="w-full cursor-pointer rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-purple-700 py-2 font-semibold text-white disabled:opacity-50">Claim</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Withdrawal Conditions */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Elite Pool Withdrawal Conditions
            </h2>

            <p className="text-gray-400 text-lg">
              Each pool level requires fresh new direct
              joinings to claim or withdraw the pool bonus.
              New directs are counted from the date of
              withdrawal request.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {withdrawalConditions.map((item, index) => (
              <div
                key={item.pool}
                className={`rounded-3xl border p-6 text-center transition-all hover:scale-[1.02] ${index < 4
                  ? "border-cyan-500 bg-cyan-950/20"
                  : "border-white/10 bg-black/80"
                  }`}
              >
                <p className="text-xl text-gray-300">
                  Pool {item.pool}
                </p>

                <h3 className="text-4xl font-bold text-emerald-400 my-2">
                  {item.directs}
                </h3>

                <p className="text-gray-400">
                  new directs
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}