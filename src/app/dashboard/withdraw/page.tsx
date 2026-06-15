"use client";

import { dorsenConfig, USDTAddress } from "@/app/constants/contract";
import BalanceCard from "@/components/dashboard/balanceCard";
import { convertToAbbreviated } from "@/libs/convertToAbbreviated";
import { useAppKitNetwork } from "@reown/appkit/react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { Address, erc20Abi, formatEther } from "viem";
import { useConnection, useReadContract } from "wagmi";
import moment from "moment";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};


export default function WithdrawalPage() {
  const { chainId } = useAppKitNetwork()
  const { address } = useConnection()

  const totalTxHistoryLenth = useReadContract({
    ...dorsenConfig,
    functionName: "totalTxHistoryLengthForUser",
    args: [address as Address],
  });

  const resultTxHistoryList = useReadContract({
    ...dorsenConfig,
    functionName: "user2TxHistoryList",
    args: [address as Address, BigInt(0), BigInt(totalTxHistoryLenth?.data || 0)],
  });

  const { data: resultOfTokenBalance } = useReadContract({
    abi: erc20Abi,
    address: USDTAddress,
    functionName: "balanceOf",
    args: [address as Address],
    account: address,
    chainId: Number(chainId) ?? 99110
  });

  const totalUserEarnings = useReadContract({
    ...dorsenConfig,
    functionName: "getUserTotalEarnings",
    args: [address as Address],
    chainId: Number(chainId) ?? 99110
  });

  const latestWithdrawals = useMemo(() => {
    const txs = resultTxHistoryList?.data || [];

    return [...txs]
      .slice(-10) /// last 15 records
      .reverse(); /// newest first
  }, [resultTxHistoryList?.data]);


  const withdrawalStats = useMemo(() => {
    const data = totalUserEarnings.data;

    if (!data) {
      return {
        totalWithdraw: 0,
        adminFee: 0,
        totalReceived: 0,
      };
    }

    const totalWithdraw =
      Number(formatEther(data[0])) +
      Number(formatEther(data[1])) +
      Number(formatEther(data[2])) +
      Number(formatEther(data[3]));

    const adminFee = totalWithdraw * 0.2;
    const totalReceived = totalWithdraw - adminFee;

    return {
      totalWithdraw,
      adminFee,
      totalReceived,
    };
  }, [totalUserEarnings.data]);

  const withdrawalSummary = useMemo(() => {
    const txs = latestWithdrawals || [];

    const totalRequested = txs.reduce(
      (sum: number, tx: any) =>
        sum +
        Number(formatEther(BigInt(tx?.amount ?? 0))),
      0
    );

    const totalFees = totalRequested * 0.2;

    const netReceived = totalRequested - totalFees;

    return {
      totalRequested,
      totalFees,
      netReceived,
    };
  }, [latestWithdrawals]);

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
            token={
              convertToAbbreviated(Number(formatEther(BigInt(resultOfTokenBalance ?? 0))))
            }
            usd="Available for withdrawal"
          />

          <BalanceCard
            title="Total Withdraw"
            token={
              `$${convertToAbbreviated(withdrawalStats.totalWithdraw)}`
            }
            usd="3 requests made"
          />

          <BalanceCard
            title="Admin Fees Paid"
            token={
              `$${convertToAbbreviated(withdrawalStats.adminFee)}`
            }
            usd="20% LDF fee on all withdrawals"
          />

          <BalanceCard
            title="Total Received (USDT)"
            token={
              `$${convertToAbbreviated(withdrawalStats.totalReceived)}`
            }
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
          className="rounded-[28px] w-[320px] sm:w-full border border-cyan-500 bg-black/90 p-6 md:p-8"
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
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 text-left text-gray-400">
                  <th className="pb-5">Income Type</th>
                  <th className="pb-5">Amount</th>
                  <th className="pb-5">Fee (20%)</th>
                  <th className="pb-5">Net (USDT)</th>
                  <th className="pb-5">Status</th>
                  <th className="pb-5 text-right">Date</th>
                </tr>
              </thead>

              <tbody>
                {latestWithdrawals.length > 0 ? (
                  latestWithdrawals.map((tx: any, index) => {
                    const amount = Number(
                      formatEther(BigInt(tx?.amount ?? 0))
                    );

                    const fee = amount * 0.2;
                    const net = amount - fee;

                    return (
                      <tr
                        key={index}
                        className="border-b border-white/10 hover:bg-white/[0.02]"
                      >
                        <td className="py-6 text-xl">
                          {tx?.incomeType || "Withdrawal"}
                        </td>

                        <td className="py-6 text-xl">
                          ${convertToAbbreviated(amount)}
                        </td>

                        <td className="py-6 text-xl text-red-500">
                          -${convertToAbbreviated(fee)}
                        </td>

                        <td className="py-6 text-xl text-emerald-400">
                          ${convertToAbbreviated(net)}
                        </td>

                        <td className="py-6">
                          <span className="text-xl text-emerald-400">
                            Success
                          </span>
                        </td>

                        <td className="py-6 text-xl text-right">
                          {moment
                            .unix(Number(tx?.time ?? 0))
                            .format("D MMM YYYY")}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="py-8 text-center text-gray-400"
                    >
                      No Data Found
                    </td>
                  </tr>
                )}

                {/* Totals */}
                <tr>
                  <td className="pt-8">
                    <div>
                      <p className="text-gray-400">
                        Total Requested
                      </p>
                      <h3 className="text-3xl font-bold">
                        ${convertToAbbreviated(withdrawalSummary.totalRequested)}
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
                        -${convertToAbbreviated(withdrawalSummary.totalFees)}
                      </h3>
                    </div>
                  </td>

                  <td className="pt-8">
                    <div>
                      <p className="text-gray-400">
                        Net Received
                      </p>
                      <h3 className="text-3xl font-bold text-emerald-400">
                        ${convertToAbbreviated(withdrawalSummary.netReceived)}
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