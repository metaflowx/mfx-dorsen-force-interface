"use client";

import { dorsenConfig } from "@/app/constants/contract";
import BalanceCard from "@/components/dashboard/balanceCard";
import { convertToAbbreviated } from "@/libs/convertToAbbreviated";
import { useAppKitNetwork } from "@reown/appkit/react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Address, formatEther } from "viem";
import { useConnection, useReadContracts, useWriteContract } from "wagmi";

const poolLevels = [
  {
    level: "1",
    members: 2,
    amount: "$5",
    progress: 100,
    status: "Completed",
  },
  {
    level: "2",
    members: 4,
    amount: "$10",
    progress: 100,
    status: "Completed",
  },
  {
    level: "3",
    members: 8,
    amount: "$20",
    progress: 63,
    status: "Active",
  },
  {
    level: "4",
    members: 16,
    amount: "$40",
    progress: 0,
    status: "Pending",
  },
  {
    level: "5",
    members: 32,
    amount: "$80",
    progress: 0,
    status: "Pending",
  },
  {
    level: "6",
    members: 64,
    amount: "$160",
    progress: 0,
    status: "Pending",
  },
  {
    level: "7",
    members: 128,
    amount: "$320",
    progress: 0,
    status: "Pending",
  },
  {
    level: "8",
    members: 256,
    amount: "$640",
    progress: 0,
    status: "Pending",
  },
  {
    level: "9",
    members: 512,
    amount: "$1,280",
    progress: 0,
    status: "Pending",
  },
  {
    level: "10",
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
        functionName: "getSlotInfo",
        args: [address as Address, 1],
        chainId: Number(chainId) ?? 99110,
      },
      {
        ...dorsenConfig,
        functionName: "user2PoolClaimed",
        args: [address as Address, 1],
        chainId: Number(chainId) ?? 99110,
      },

    ],

  });

  const slotInfo = result?.data?.[1]?.result;
  const lastClaimedLevel = Number(
    result?.data?.[2]?.result?.[1] ?? 0
  );
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
            token={convertToAbbreviated(Number(formatEther(BigInt(result?.data?.[0]?.result?.[2] ?? 0))))}
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
            pool amount and cycle to the next level. 42% of
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

                  <th className="pb-5 font-medium">
                    Status
                  </th>


                  <th className="pb-5 font-medium text-right">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {poolLevels.map((item, index) => (
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
                    <DynamicTableBodyData
                      key={index}
                      level={Number(item.level)}
                      chainId={chainId as number}
                      minReq={Number(item.members)}
                      address={address as Address}
                      lastClaimedLevel={lastClaimedLevel}
                      slotInfo={slotInfo}
                    />

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


const DynamicTableBodyData = ({
  level,
  address,
  chainId,
  minReq,
  lastClaimedLevel,
  slotInfo,
}: {
  level: number;
  address: Address;
  chainId: number;
  minReq: number;
  lastClaimedLevel: number;
  slotInfo: any;
}) => {

  const { mutateAsync, isPending } =
    useWriteContract();

  const result = useReadContracts({
    contracts: [
      {
        ...dorsenConfig,
        functionName: "isMatrixLevelCompleted",
        args: [address as Address, 1, level],
        chainId: Number(chainId) ?? 99110,
      },

    ],

  });



  const isCompleted = Boolean(result?.data?.[0]?.result);
  const isClaimed = level <= lastClaimedLevel;
  const isNextClaimable = level === lastClaimedLevel + 1;

  const canClaim = isCompleted && isNextClaimable;

  const current = Number(
    slotInfo?.[2]?.[level] ?? 0
  )
  const progress = Math.min((current / minReq) * 100, 100);
  return (
    <>

      <td className="py-5">
        <div className="flex items-center gap-4">
          <div className="w-36 md:w-44 h-1.5 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-400 rounded-full"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <span className="text-lg">
            {progress}%
          </span>
        </div>
      </td>

      <td className="py-5">
        <span
          className={`text-lg ${current === minReq
            ? "text-emerald-400"
            : current !== 0 && current < minReq
              ? "text-yellow-400"
              : "text-gray-400"
            }`}
        >
          {
            current === minReq
              ? "Completed"
              : current > 0
                ? "Active"
                : "Pending"
          }
        </span>
      </td>

      <td className="text-right">
        <button
          disabled={
            isPending ||
            isClaimed ||
            !canClaim
          }
          className="w-full cursor-pointer rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-purple-700 py-2 font-semibold text-white disabled:opacity-50"
          onClick={async () => {
            const res = await mutateAsync({
              ...dorsenConfig,
              functionName: "claimAutoPoolIncome",
              args: [level],
            });

            if (res) {
              toast.success("Autopool Claimed Successfully");
            }
          }}
        >
          {isPending
            ? "Claiming..."
            : isClaimed
              ? "Claimed"
              : canClaim
                ? "Claim"
                : `Claim L${lastClaimedLevel + 1} First`}
        </button>
      </td>
    </>
  );

}