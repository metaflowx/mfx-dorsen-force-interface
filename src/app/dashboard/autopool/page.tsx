"use client";

import BalanceCard from "@/components/dashboard/balanceCard";
import { motion } from "framer-motion";

const poolLevels = [
  {
    level: "L-01",
    members: 2,
    amount: "$5",
    progress: 100,
    status: "Completed",
  },
  {
    level: "L-02",
    members: 4,
    amount: "$10",
    progress: 100,
    status: "Completed",
  },
  {
    level: "L-03",
    members: 8,
    amount: "$20",
    progress: 63,
    status: "Active",
  },
  {
    level: "L-04",
    members: 16,
    amount: "$40",
    progress: 0,
    status: "Pending",
  },
  {
    level: "L-05",
    members: 32,
    amount: "$80",
    progress: 0,
    status: "Pending",
  },
  {
    level: "L-06",
    members: 64,
    amount: "$160",
    progress: 0,
    status: "Pending",
  },
  {
    level: "L-07",
    members: 128,
    amount: "$320",
    progress: 0,
    status: "Pending",
  },
  {
    level: "L-08",
    members: 256,
    amount: "$640",
    progress: 0,
    status: "Pending",
  },
  {
    level: "L-09",
    members: 512,
    amount: "$1,280",
    progress: 0,
    status: "Pending",
  },
  {
    level: "L-10",
    members: 1024,
    amount: "$2,560",
    progress: 0,
    status: "Pending",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function AutoPoolPage() {
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
            title="Autopool Earned"
            token="$15"
            usd="2 levels completed"
          />

          <BalanceCard
            title="Current Level"
            token="Level 3"
            usd="5 / 8 members filled"
          />

          <BalanceCard
            title="Max Potential"
            token="$5,115"
            usd="All 10 levels complete"
          />
        </motion.div>

        {/* Info Box */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="rounded-[28px] border border-purple-600 bg-black/90 p-6 md:p-8"
        >
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            <span className="font-bold text-white">
              2x Matrix System:
            </span>{" "}
            Each position fills 2 sub-positions automatically.
            When both sub-positions are filled, you earn the
            pool amount and cycle to the next level. 46% of
            joining amount ($65) is distributed across all
            10 pool levels.
          </p>
        </motion.div>

        {/* Matrix Table */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="rounded-[28px] w-[320px] sm:w-full border border-cyan-500 bg-black/90 p-6 md:p-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            2x Matrix Pool — 10 Levels
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 text-left text-gray-400">
                  <th className="pb-5 font-medium">
                    Pool Level
                  </th>

                  <th className="pb-5 font-medium">
                    Members Required
                  </th>

                  <th className="pb-5 font-medium">
                    Pool Amount
                  </th>

                  <th className="pb-5 font-medium">
                    Progress
                  </th>

                  <th className="pb-5 font-medium text-right">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {poolLevels.map((item) => (
                  <tr
                    key={item.level}
                    className="border-b border-white/10 hover:bg-white/[0.02]"
                  >
                    <td className="py-5 text-lg md:text-xl">
                      {item.level}
                    </td>

                    <td className="py-5 text-lg md:text-xl">
                      {item.members}
                    </td>

                    <td className="py-5 text-lg md:text-xl">
                      {item.amount}
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

                    <td className="py-5 text-right">
                      <span
                        className={`text-lg ${
                          item.status === "Completed"
                            ? "text-emerald-400"
                            : item.status === "Active"
                            ? "text-yellow-400"
                            : "text-gray-400"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </main>
    </div>
  );
}