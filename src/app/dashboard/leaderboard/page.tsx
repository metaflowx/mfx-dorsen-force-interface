"use client";

import { dorsenConfig } from "@/app/constants/contract";
import BalanceCard from "@/components/dashboard/balanceCard";
import { convertToAbbreviated } from "@/libs/convertToAbbreviated";
import { stringTrimMiddle } from "@/libs/stringTrimMiddle";
import { useAppKitNetwork } from "@reown/appkit/react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { toast } from "sonner";
import { Address, formatEther } from "viem";
import { useConnection, useReadContract, useReadContracts, useWriteContract } from "wagmi";
import moment from "moment";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};


export default function LeadershipBonusPage() {
  const { chainId } = useAppKitNetwork()
  const { address } = useConnection()
  const { mutateAsync, isPending } =
    useWriteContract();
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
        functionName: "getDownlineReferralAtLevel",
        args: [address as Address, BigInt(1)],
        chainId: Number(chainId) ?? 99110,
      },

    ],

  });

  const stats = useMemo(() => {
    const userInfo = result?.data?.[0]?.result;
    const earnings = result?.data?.[1]?.result;

    const earned = Number(formatEther(BigInt(earnings?.[3] ?? 0)));
    const pending = Number(formatEther(BigInt(userInfo?.[6] ?? 0)));
    /// total leadership bonus (this is 10% share)
    const totalLeadershipBonus = earned + pending;
    /// reverse calculate sponsor earnings (100%)
    const sponsorTotalEarnings = totalLeadershipBonus * 10;


    return {
      leadershipBonusEarned: earned,
      leadershipPendingBonus: pending,
      sponsorTotalEarnings: sponsorTotalEarnings,
      activeSponsors: Number(userInfo?.[7] ?? 0),
    };
  }, [result?.data]);

  return (
    <div className="py-5">
      <main className="space-y-6">
        {/* Top Cards */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <BalanceCard
            title="My Leadership Bonus Earned"
            token={`$${convertToAbbreviated(stats.leadershipBonusEarned)}`}
            usd="10% of sponsor earnings"
          />

          <BalanceCard
            title="My Leadership Bonus Pending"
            token={`$${convertToAbbreviated(stats.leadershipPendingBonus)}`}
            usd="10% of sponsor earnings"
          />


          <BalanceCard
            title="Sponsor Total Earnings"
            token={`$${convertToAbbreviated(stats.sponsorTotalEarnings)}`}
            usd="Tracked across all sponsors"
          />

          <BalanceCard
            title="Active Sponsors"
            token={`${convertToAbbreviated(stats.activeSponsors, 0)}`}
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
          className="rounded-[28px] w-[320px] sm:w-full border border-cyan-500 bg-black/90 p-6 md:p-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Leadership Bonus Records
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
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
                {
                  result?.data?.[2] && result?.data?.[2]?.result && result?.data?.[2]?.result?.length > 0 ? result?.data?.[2]?.result?.map((item, index) => (
                    <TableBodyData key={index} index={index} item={item} />
                  )) : (
                    <tr>
                      <td
                        colSpan={6}
                        className="py-8 text-center text-gray-400"
                      >
                        No Data Found
                      </td>
                    </tr>
                  )}

                {/* Total Row */}
                <tr>
                  <td
                    colSpan={3}
                    className="pt-8 text-2xl font-medium"
                  >
                    Total Bonus Earned
                  </td>

                  <td className="pt-8 text-3xl font-bold text-emerald-400">
                    {`$${convertToAbbreviated(stats.leadershipBonusEarned)}`}
                  </td>
                  <td className="pt-8 font-medium">
                    <button
                      disabled={
                        isPending ||
                        stats.leadershipPendingBonus <= 0
                      }
                      className="w-full cursor-pointer rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-purple-700 py-4 font-semibold text-white disabled:opacity-50"
                      onClick={async () => {
                        const res = await mutateAsync({
                          ...dorsenConfig,
                          functionName: "claimLeadershipBonusIncome"
                        })
                        if (res) toast.success("Leadership Bonus Claimed Successfully");
                      }}
                    >
                      {isPending ? "Claiming..." : "Claim Pending Bonus"}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </main>
    </div >
  );
}



const TableBodyData = ({
  index,
  item
}: {
  index: number;
  item: Address;
}) => {
  const { chainId } = useAppKitNetwork();
  const result = useReadContracts({
    contracts: [
      {
        ...dorsenConfig,
        functionName: "getUserInfo",
        args: [item as Address],
        chainId: Number(chainId) ?? 99110,
      },
      {
        ...dorsenConfig,
        functionName: "getUserTotalEarnings",
        args: [item as Address],
        chainId: Number(chainId) ?? 99110,
      },
    ],

  });

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Address copied to clipboard 🚀");
    } catch (err) {
      toast.error("Failed to copy address");
    }
  };

  return (
    <>
      <tr
        key={index}
        className="border-b border-white/10 hover:bg-white/[0.02]"
      >
        <td className="py-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-xl">
              DC
            </div>

            <div>
              <h3 className="text-xl">
                {stringTrimMiddle(item as Address)}
              </h3>
            </div>
          </div>
        </td>

        <td className="py-6 text-xl">
          {convertToAbbreviated(Number(formatEther(BigInt(result?.data?.[1]?.result?.[6] ?? 0))))}
        </td>

        <td className="py-6 text-xl text-yellow-400">
          10%
        </td>

        <td className="py-6 text-xl text-emerald-400 font-medium">
          {convertToAbbreviated(Number(formatEther(BigInt(result?.data?.[1]?.result?.[6] ?? 0))) * 0.1)}
        </td>

        <td className="py-6 text-xl text-right">
          {moment.unix(Number(result?.data?.[0]?.result?.[8] ?? 0)).format("D MMM YYYY")}
        </td>
      </tr>
    </>
  );
}