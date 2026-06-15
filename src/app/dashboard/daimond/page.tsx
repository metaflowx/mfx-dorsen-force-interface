"use client";

import BalanceCard from "@/components/dashboard/balanceCard";
import { motion } from "framer-motion";

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
    amount: "$2,000",
    points: "5P",
    withdraw: "5 directs",
    progress: 100,
    status: "Done",
  },
  {
    level: "L-02",
    members: 4,
    amount: "$4,000",
    points: "10P",
    withdraw: "11 directs",
    progress: 50,
    status: "Active",
  },
  {
    level: "L-03",
    members: 8,
    amount: "$4,000",
    points: "15P",
    withdraw: "15 directs",
    progress: 0,
    status: "Pending",
  },
  {
    level: "L-04",
    members: 16,
    amount: "$6,000",
    points: "20P",
    withdraw: "21 directs",
    progress: 0,
    status: "Pending",
  },
  {
    level: "L-05",
    members: 32,
    amount: "$12,000",
    points: "40P",
    withdraw: "51 directs",
    progress: 0,
    status: "Pending",
  },
  {
    level: "L-06",
    members: 64,
    amount: "$25,000",
    points: "50P",
    withdraw: "101 directs",
    progress: 0,
    status: "Pending",
  },
  {
    level: "L-07",
    members: 128,
    amount: "$50_000",
    points: "100P",
    withdraw: "100 directs",
    progress: 0,
    status: "Pending",
  },
  {
    level: "L-08",
    members: 256,
    amount: "$100,000",
    points: "200P",
    withdraw: "200 directs",
    progress: 0,
    status: "Pending",
  },
  {
    level: "L-09",
    members: 512,
    amount: "$200_000",
    points: "500P",
    withdraw: "500 directs",
    progress: 0,
    status: "Pending",
  },
  {
    level: "L-10",
    members: 1024,
    amount: "$400,000",
    points: "1000P",
    withdraw: "2048 directs",
    progress: 0,
    status: "Pending",
  },
];

const withdrawalConditions = [
  { pool: 1, directs: 5 },
  { pool: 2, directs: 10 },
  { pool: 3, directs: 15 },
  { pool: 4, directs: 20 },
  { pool: 5, directs: 40 },
  { pool: 6, directs: 50 },
  { pool: 7, directs: 100 },
  { pool: 8, directs: 200 },
  { pool: 9, directs: 500 },
  { pool: 10, directs: 1000 },
];

export default function DiamondPage() {
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
            title="Diamond Status"
            token="Diamond"
            usd="Eligible for Diamond Pool"
          />

          <BalanceCard
            title="Points Earned"
            token="5P"
            usd="From completed pools"
          />

          <BalanceCard
            title="Pool Amount Earned"
            token="$2,000"
            usd="18% income pool"
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
            Diamond Autopool — 10 Pool Levels
            <span className="text-cyan-400">
              {" "}
              (8% Distribution)
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
              Diamond Pool Withdrawal Conditions
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