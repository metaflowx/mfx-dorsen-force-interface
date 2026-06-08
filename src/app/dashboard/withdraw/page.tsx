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

const withdrawalHistory = [
  {
    incomeType: "Direct Income",
    requested: "$200.00",
    fee: "-$40.00",
    net: "$160.00",
    status: "Paid",
    date: "30 Apr 2026",
    processed: "2 May 2026",
  },
  {
    incomeType: "Autopool Matrix",
    requested: "$500.00",
    fee: "-$100.00",
    net: "$400.00",
    status: "Approved",
    date: "20 May 2026",
    processed: "22 May 2026",
  },
  {
    incomeType: "Leadership Bonus",
    requested: "$150.00",
    fee: "-$30.00",
    net: "$120.00",
    status: "Pending",
    date: "28 May 2026",
    processed: "-",
  },
];

export default function WithdrawalPage() {
  return (
    <div className="py-5">
      <main className="space-y-6">
        {/* Top Cards */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"
        >
          <BalanceCard
            title="Wallet Balance"
            token="$1240.75"
            usd="Available for withdrawal"
          />

          <BalanceCard
            title="Total Withdraw"
            token="$850.00"
            usd="3 requests made"
          />

          <BalanceCard
            title="Admin Fees Paid"
            token="$170.00"
            usd="20% LDF fee on all withdrawals"
          />

          <BalanceCard
            title="Total Received (USDT)"
            token="$160.00"
            usd="Net amount after fees"
          />
        </motion.div>

        {/* Fee Structure */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="rounded-[28px] border border-cyan-500 bg-black/90 p-6"
        >
          <p className="text-lg leading-relaxed">
            <span className="font-bold text-white">
              Withdrawal Fee Structure:
            </span>{" "}
            All withdrawals are subject to a{" "}
            <span className="text-emerald-400 font-bold">
              20% Admin LDF Fee.
            </span>{" "}
            Payments are processed in USDT on the Dorsenchain network.
            Diamond Autopool withdrawals require meeting direct referral
            count conditions per pool level.
          </p>
        </motion.div>

        {/* Withdrawal History */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="rounded-[28px] border border-cyan-500 bg-black/90 p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Withdrawal History
            </h2>

            <span className="text-xl text-gray-400">
              20% fee deducted
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px]">
              <thead>
                <tr className="border-b border-white/10 text-left text-gray-400">
                  <th className="pb-5">Income Type</th>
                  <th className="pb-5">Requested</th>
                  <th className="pb-5">Fee (20%)</th>
                  <th className="pb-5">Net (USDT)</th>
                  <th className="pb-5">Status</th>
                  <th className="pb-5">Date</th>
                  <th className="pb-5 text-right">Processed</th>
                </tr>
              </thead>

              <tbody>
                {withdrawalHistory.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/10 hover:bg-white/[0.02]"
                  >
                    <td className="py-6 text-xl">
                      {item.incomeType}
                    </td>

                    <td className="py-6 text-xl">
                      {item.requested}
                    </td>

                    <td className="py-6 text-xl text-red-500">
                      {item.fee}
                    </td>

                    <td className="py-6 text-xl text-emerald-400">
                      {item.net}
                    </td>

                    <td className="py-6">
                      <span
                        className={`text-xl ${
                          item.status === "Pending"
                            ? "text-yellow-400"
                            : "text-emerald-400"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="py-6 text-xl">
                      {item.date}
                    </td>

                    <td className="py-6 text-xl text-right">
                      {item.processed}
                    </td>
                  </tr>
                ))}

                {/* Totals */}
                <tr>
                  <td className="pt-8">
                    <div>
                      <p className="text-gray-400">
                        Total Requested
                      </p>
                      <h3 className="text-3xl font-bold">
                        $850.00
                      </h3>
                    </div>
                  </td>

                  <td />

                  <td className="pt-8">
                    <div>
                      <p className="text-gray-400">
                        Total Fees
                      </p>
                      <h3 className="text-3xl font-bold text-red-500">
                        -$170.00
                      </h3>
                    </div>
                  </td>

                  <td className="pt-8">
                    <div>
                      <p className="text-gray-400">
                        Net Received
                      </p>
                      <h3 className="text-3xl font-bold text-emerald-400">
                        $680.00
                      </h3>
                    </div>
                  </td>

                  <td colSpan={3} />
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </main>
    </div>
  );
}