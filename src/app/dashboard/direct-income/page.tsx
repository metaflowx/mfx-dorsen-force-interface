"use client";

import { dorsenConfig } from "@/app/constants/contract";
import BalanceCard from "@/components/dashboard/balanceCard";
import { convertToAbbreviated } from "@/libs/convertToAbbreviated";
import { useAppKitNetwork } from "@reown/appkit/react";
import { motion } from "framer-motion";
import { Address, formatEther } from "viem";
import { useConnection, useReadContracts } from "wagmi";

const levels = [
  { level: 1, percent: "60" },
  { level: 2, percent: "20" },
  { level: 3, percent: "10" },
  { level: 4, percent: "2" },
  { level: 5, percent: "2" },
  { level: 6, percent: "2" },
  { level: 7, percent: "1" },
  { level: 8, percent: "1" },
  { level: 9, percent: "1" },
  { level: 10, percent: "1" },
];


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
export default function DirectIncomePage() {
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
      },
      {
        ...dorsenConfig,
        functionName: "isLevelOpen",
        args: [address as Address, 10],
        chainId: Number(chainId) ?? 99110,
      },

    ],

  });

  const isLevel10Open = Boolean(result?.data?.[2]?.result?.[1]);

  return (
    <div className="py-5">
      <main className="space-y-6">
        {/* Top Cards */}

        <motion.div
          variants={fadeUp}
          initial="hidden" animate="show"
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6"
        >

          <BalanceCard
            title={"Total Earned"}
            token={convertToAbbreviated(Number(formatEther(BigInt(result?.data?.[1]?.result?.[6] ?? 0))))}
            usd={"36% of joining amount"
            }
          />

          <BalanceCard
            title={"Total Direct Earned"}
            token={convertToAbbreviated(Number(formatEther(BigInt(result?.data?.[1]?.result?.[4] ?? 0))))}
            usd={"36% of joining amount"
            }
          />
          <BalanceCard
            title={"Direct Members"}
            token={result?.data?.[0]?.result?.[7] ? result?.data?.[0]?.result?.[7].toString() : "0"}
            usd={"All 10 levels open"}
          />
          <BalanceCard title={"Per Referral (L1)"} token={"$19.5"} usd={"50% of 36% of $65"} />


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
        <div className="rounded-[28px] border border-cyan-500 bg-black/90 p-6 md:p-8 w-[320px] sm:w-full">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            10-Level Distribution (50% of $65 = $32.5 total)
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
                {levels.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/10 hover:bg-white/5 transition"
                  >
                    <td className="py-5 text-xl">{item.level}</td>

                    <td className="py-5 text-xl">
                      {item.percent}%
                    </td>

                    <DynamicData key={index} isLevel10Open={isLevel10Open} level={item.level} chainId={chainId as number} share={Number(item.percent)} address={address as Address} />

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
                    ${
                      convertToAbbreviated(
                        Number(formatEther(BigInt(result?.data?.[1]?.result?.[4] ?? 0))) +
                        Number(formatEther(BigInt(result?.data?.[1]?.result?.[5] ?? 0)))
                      )}
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

const DynamicData = ({
  level,
  address,
  chainId,
  share,
  isLevel10Open
}: {
  level: number;
  address: Address;
  chainId: number;
  share: number;
  isLevel10Open: boolean
}) => {

  const reward = 32.5; /// usdt measn 50% of $65

  const result = useReadContracts({
    contracts: [
      {
        ...dorsenConfig,
        functionName: "isLevelOpen",
        args: [address as Address, level],
        chainId: Number(chainId) ?? 99110,
      },
      {
        ...dorsenConfig,
        functionName: "getReferralCountByLevel",
        args: [address as Address, BigInt(level)],
        chainId: Number(chainId) ?? 99110,
      }

    ],

  });

  const currentLevelOpen = Boolean(result?.data?.[0]?.result?.[1]);

  const isOpen = isLevel10Open || currentLevelOpen;

  return (
    <>

      <td className="py-5 text-xl font-semibold text-emerald-400">
        ${(reward * share) / 100}
      </td>
      <td className="py-5 text-xl">
        {
          result?.data?.[1]?.result ? result?.data?.[1]?.result : '0'
        }
      </td>

      <td className="py-5 text-xl">
        ${
          convertToAbbreviated(
            (reward * share) / 100 * Number(
              result?.data?.[1]?.result ? result?.data?.[1]?.result : '0'
            )
          )
        }
      </td>

      <td className="py-5 text-right">
        <span
          className={
            !isOpen
              ? "text-gray-300"
              : "text-emerald-400"
          }
        >
          {isOpen ? "Open" : "Progress"}
        </span>
      </td>
    </>
  );

}