"use client";

import { dorsenConfig } from "@/app/constants/contract";
import BalanceCard from "@/components/dashboard/balanceCard";
import { convertToAbbreviated } from "@/libs/convertToAbbreviated";
import { useAppKitNetwork } from "@reown/appkit/react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Address, formatEther } from "viem";
import { useConnection, useReadContracts, useWriteContract } from "wagmi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const elitePools = [
  {
    level: "1",
    members: 2,
    amount: "$50",
    points: "0P",
    withdraw: "0",
    progress: 100,
    status: "Done",
  },
  {
    level: "2",
    members: 4,
    amount: "$100",
    points: "0P",
    withdraw: "0",
    progress: 50,
    status: "Active",
  },
  {
    level: "3",
    members: 8,
    amount: "$200",
    points: "0P",
    withdraw: "0",
    progress: 0,
    status: "Pending",
  },
  {
    level: "4",
    members: 16,
    amount: "$500",
    points: "1P",
    withdraw: "1",
    progress: 0,
    status: "Pending",
  },
  {
    level: "5",
    members: 32,
    amount: "$1000",
    points: "2P",
    withdraw: "2",
    progress: 0,
    status: "Pending",
  },
  {
    level: "6",
    members: 64,
    amount: "$2000",
    points: "4P",
    withdraw: "4",
    progress: 0,
    status: "Pending",
  },
  {
    level: "7",
    members: 128,
    amount: "$5000",
    points: "8P",
    withdraw: "8",
    progress: 0,
    status: "Pending",
  },
  {
    level: "8",
    members: 256,
    amount: "$10,000",
    points: "20P",
    withdraw: "20",
    progress: 0,
    status: "Pending",
  },
  {
    level: "9",
    members: 512,
    amount: "$20,000",
    points: "50P",
    withdraw: "50",
    progress: 0,
    status: "Pending",
  },
  {
    level: "10",
    members: 1024,
    amount: "$100,000",
    points: "200P",
    withdraw: "200",
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
  { pool: 10, directs: 200 },
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
      },
      {
        ...dorsenConfig,
        functionName: "getSlotInfo",
        args: [address as Address, 3],
        chainId: Number(chainId) ?? 99110,
      },
      {
        ...dorsenConfig,
        functionName: "user2PoolClaimed",
        args: [address as Address, 3],
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
            title="Elite Status"
            token={
              Number(slotInfo?.[1] ?? 0) === 1 ? "Elite" : "None"
            }
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
                  <th className="pb-5 font-medium">Pool Level</th>
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
                {elitePools.map((item, index) => (
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
                      {item.withdraw} directs
                    </td>
                    <DynamicTableBodyData
                      key={index}
                      level={Number(item.level)}
                      chainId={chainId as number}
                      minReq={Number(item.members)}
                      withdrawReq={Number(item.withdraw)}
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

const DynamicTableBodyData = ({
  level,
  address,
  chainId,
  minReq,
  withdrawReq,
  lastClaimedLevel,
  slotInfo,
}: {
  level: number;
  address: Address;
  chainId: number;
  minReq: number;
  withdrawReq: number;
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
        args: [address as Address, 3, level],
        chainId: Number(chainId) ?? 99110,
      },
      {
        ...dorsenConfig,
        functionName: "isElitePoolClaimable",
        args: [address as Address, BigInt(withdrawReq)],
        chainId: Number(chainId) ?? 99110,
      },

    ],

  });



  const isCompleted = Boolean(result?.data?.[0]?.result);
  const isClaimed = level <= lastClaimedLevel;
  const isNextClaimable = level === lastClaimedLevel + 1;
  const isElitePoolClaimable = Boolean(result?.data?.[1]?.result)

  const canClaim = isCompleted && isElitePoolClaimable && isNextClaimable;

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
              functionName: "claimEliteAutoPoolIncome",
              args: [level],
            });

            if (res) {
              toast.success("Elite Autopool Claimed Successfully");
            }
          }}
        >
          {isPending
            ? "Claiming..."
            : isClaimed
              ? "Claimed"
              : !isCompleted
                ? "Pool Not Completed"
                : !isElitePoolClaimable
                  ? `${withdrawReq} Directs Required`
                  : !isNextClaimable
                    ? `Claim L${lastClaimedLevel + 1} First`
                    : "Claim"}
        </button>
      </td>
    </>
  );

}