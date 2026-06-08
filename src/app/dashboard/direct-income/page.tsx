"use client";

import BalanceCard from "@/components/dashboard/balanceCard";
import { motion } from "framer-motion";

const levels = [
  { level: 1, percent: "50%", amount: "$11.70", members: 5, earned: "$58.50", status: "Open" },
  { level: 2, percent: "20%", amount: "$4.68", members: 1, earned: "$4.68", status: "Open" },
  { level: 3, percent: "10%", amount: "$2.34", members: 1, earned: "$2.34", status: "Open" },
  { level: 4, percent: "5%", amount: "$1.17", members: 1, earned: "$1.17", status: "Open" },
  { level: 5, percent: "5%", amount: "$1.17", members: 1, earned: "$1.17", status: "Open" },
  { level: 6, percent: "2%", amount: "$0.47", members: 1, earned: "$0.47", status: "Open" },
  { level: 7, percent: "2%", amount: "$0.47", members: 0, earned: "$0.00", status: "Open" },
  { level: 8, percent: "2%", amount: "$0.47", members: 0, earned: "$0.00", status: "Open" },
  { level: 9, percent: "2%", amount: "$0.47", members: 0, earned: "$0.00", status: "Open" },
  { level: 10, percent: "2%", amount: "$0.47", members: 0, earned: "$0.00", status: "Diamond Req." },
];


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
   show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
 };
export default function DirectIncomePage() {
  return (
    <div className="py-5">
      <main className="space-y-6">
        {/* Top Cards */}

        <motion.div
          variants={fadeUp}
          initial="hidden" animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
        >

          <BalanceCard title={"Total Direct Earned"} token={"$68.33"} usd={"36% of joining amount"} />
          <BalanceCard title={"Direct Members"} token={"24"} usd={"All 10 levels open"} />
          <BalanceCard title={"Per Referral (L1)"} token={"$11.70"} usd={"50% of 36% of $65"} />
         

        </motion.div>

        {/* Rules */}
        <div className="rounded-[28px] border border-purple-600 bg-black/90 p-8">
          <h3 className="text-2xl font-bold mb-4">
            Level Opening Rules:
          </h3>

          <ul className="space-y-2 text-gray-200 text-lg">
            <li>▪ 20 direct referrals required to open all 10 levels permanently.</li>
            <li>▪ Complete 10 direct referrals within 30 days to open all 10 levels.</li>
            <li>▪ Level 10 bonus requires Diamond rank.</li>
          </ul>
        </div>

        {/* Distribution Table */}
        <div className="rounded-[28px] border border-cyan-500 bg-black/90 p-6 md:p-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            10-Level Distribution (36% of $65 = $23.40 total)
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="text-left border-b border-white/10 text-gray-400">
                  <th className="pb-4">Level</th>
                  <th className="pb-4">Share</th>
                  <th className="pb-4">Per Member</th>
                  <th className="pb-4">Members</th>
                  <th className="pb-4">Earned</th>
                  <th className="pb-4 text-right">Status</th>
                </tr>
              </thead>

              <tbody>
                {levels.map((item) => (
                  <tr
                    key={item.level}
                    className="border-b border-white/10 hover:bg-white/5 transition"
                  >
                    <td className="py-5 text-xl">{item.level}</td>

                    <td className="py-5 text-xl">
                      {item.percent}
                    </td>

                    <td className="py-5 text-xl font-semibold text-emerald-400">
                      {item.amount}
                    </td>

                    <td className="py-5 text-xl">
                      {item.members}
                    </td>

                    <td className="py-5 text-xl">
                      {item.earned}
                    </td>

                    <td className="py-5 text-right">
                      <span
                        className={
                          item.status === "Diamond Req."
                            ? "text-gray-300"
                            : "text-emerald-400"
                        }
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}

                <tr>
                  <td
                    colSpan={4}
                    className="pt-6 text-2xl font-medium"
                  >
                    Total
                  </td>

                  <td className="pt-6 text-3xl font-bold">
                    $68.33
                  </td>

                  <td />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[28px] border border-cyan-500 bg-black/90 p-8 text-center shadow-[0_0_20px_rgba(0,255,255,0.08)]">
      {children}
    </div>
  );
}