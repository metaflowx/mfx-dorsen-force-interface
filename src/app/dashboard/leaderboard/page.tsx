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

const leadershipRecords = [
  {
    name: "Priya Sharma",
    username: "@priya_s",
    sponsorEarned: "$1000.00",
    bonusPercent: "10%",
    yourBonus: "$100.00",
    date: "10 May 2026",
    avatar: "P",
  },
  {
    name: "Amit Kumar",
    username: "@amit_k",
    sponsorEarned: "$780.00",
    bonusPercent: "10%",
    yourBonus: "$78.00",
    date: "15 May 2026",
    avatar: "A",
  },
  {
    name: "Ravi Patel",
    username: "@ravi_p",
    sponsorEarned: "$1100.00",
    bonusPercent: "10%",
    yourBonus: "$110.00",
    date: "20 May 2026",
    avatar: "R",
  },
];

export default function LeadershipBonusPage() {
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
            title="Total Leadership Bonus"
            token="$288.00"
            usd="10% of sponsor earnings"
          />

          <BalanceCard
            title="Sponsor Total Earnings"
            token="$2880.00"
            usd="Tracked across all sponsors"
          />

          <BalanceCard
            title="Active Sponsors"
            token="3"
            usd="Unlimited referrals allowed"
          />
        </motion.div>

        {/* How Leadership Bonus Works */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="rounded-[28px] border border-purple-600 bg-black/90 p-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            How Leadership Bonus Works
          </h2>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mb-6">
            <div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-xl">
              Your Sponsor earns →
            </div>

            <div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-xl">
              e.g. Sponsor earns $1,000 →
            </div>

            <div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-xl">
              You get 10% = $100
            </div>
          </div>

          <p className="text-center text-gray-400 text-lg">
            You can have unlimited referrals, and earn leadership
            bonus from each of your direct sponsor's earnings.
          </p>
        </motion.div>

        {/* Records Table */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="rounded-[28px] border border-cyan-500 bg-black/90 p-6 md:p-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Leadership Bonus Records
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead>
                <tr className="border-b border-white/10 text-left text-gray-400">
                  <th className="pb-5">Sponsor</th>
                  <th className="pb-5">Sponsor Earned</th>
                  <th className="pb-5">Bonus %</th>
                  <th className="pb-5">Your Bonus</th>
                  <th className="pb-5 text-right">Date</th>
                </tr>
              </thead>

              <tbody>
                {leadershipRecords.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/10 hover:bg-white/[0.02]"
                  >
                    <td className="py-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-xl">
                          {item.avatar}
                        </div>

                        <div>
                          <h3 className="text-xl">
                            {item.name}
                          </h3>
                          <p className="text-gray-500">
                            {item.username}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="py-6 text-xl">
                      {item.sponsorEarned}
                    </td>

                    <td className="py-6 text-xl text-yellow-400">
                      {item.bonusPercent}
                    </td>

                    <td className="py-6 text-xl text-emerald-400 font-medium">
                      {item.yourBonus}
                    </td>

                    <td className="py-6 text-xl text-right">
                      {item.date}
                    </td>
                  </tr>
                ))}

                {/* Total Row */}
                <tr>
                  <td
                    colSpan={3}
                    className="pt-8 text-2xl font-medium"
                  >
                    Total Bonus Earned
                  </td>

                  <td className="pt-8 text-3xl font-bold text-emerald-400">
                    $288.00
                  </td>

                  <td />
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </main>
    </div>
  );
}