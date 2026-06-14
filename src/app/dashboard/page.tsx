"use client";

import BalanceCard from "@/components/dashboard/balanceCard";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  Crown,
  Wallet,
  Users,
  Trophy,
} from "lucide-react";
import { useEffect, useState } from "react";
import ReferralCopy from "@/components/dashboard/referralCopy";
import { useBlockNumber, useConnection, useReadContract, useReadContracts, useWriteContract } from "wagmi";
import { useSearchParams } from "next/navigation";
import useCheckAllowance from "../hooks/useCheckAllowance";
import { dorsenConfig, DorsenForceContractAddress, USDTAddress } from "../constants/contract";
import { Address, erc20Abi, formatEther, parseEther, parseUnits, zeroAddress } from "viem";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { extractDetailsFromError } from "@/libs/extractDetailsFromError";
import { stringTrimMiddle } from "@/libs/stringTrimMiddle";
import { useAppKit, useAppKitNetwork } from "@reown/appkit/react";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const communityAddress = "0x7c8AB5f6DF4159184261e40EDcb385E45FaBCD5c";

export default function DashboardPage() {
  const { open, close } = useAppKit();
  const { chainId } = useAppKitNetwork()
  const [loading, setLoading] = useState(false);
  const { address, isConnected } = useConnection()
  const searchparm = useSearchParams();
  const [referralAddress, setReferralAddress] = useState(searchparm.get("ref") || "");
  const [isAproveERC20, setIsApprovedERC20] = useState(true);

  const { mutateAsync, isPending, isSuccess, isError } =
    useWriteContract();

  const queryClient = useQueryClient();

  const { data: blockNumber } = useBlockNumber({
    watch: {
      enabled: true,
      pollingInterval: 5_000,
    }
  });


  const resultOfCheckAllowance = useCheckAllowance({
    spenderAddress: DorsenForceContractAddress,
    token: USDTAddress,
  })



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
        functionName: "isValidReferrer",
        args: [address as Address, referralAddress as Address],
        chainId: Number(chainId) ?? 99110,
      },
    ],

  });

  useEffect(() => {
    if (resultOfCheckAllowance && address) {
      const price = parseFloat("65");
      const allowance = parseFloat(
        formatEther?.(resultOfCheckAllowance.data ?? BigInt(0))
      );
      if (allowance >= price) {
        setIsApprovedERC20(true);
      } else {
        setIsApprovedERC20(false);
      }
    }
  }, [resultOfCheckAllowance, address]);

  useEffect(() => {
    if (!blockNumber) return;
    queryClient.invalidateQueries({
      queryKey: resultOfCheckAllowance.queryKey,
    });
    queryClient.invalidateQueries({
      queryKey: result.queryKey,
    });
  }, [blockNumber, !result.queryKey, !resultOfCheckAllowance.queryKey]);

  const joining = async () => {
    try {
      const formattedAmount = parseUnits("65", 18);
      const tokenAddress = USDTAddress;

      const res = await mutateAsync({
        ...dorsenConfig,
        functionName: "Joining",
        args: [((referralAddress || communityAddress) as Address)],
      });

      if (res) {
        toast.success("Joining completed");
      }
    } catch (error: any) {
      console.log(">>>>>>>>>>>>.error", error);
      toast.error(extractDetailsFromError(error.message as string) as string);
    }
  };


  const approveToken = async () => {
    try {
      const formattedAmount = parseEther("65")
      const res = await mutateAsync({
        abi: erc20Abi,
        address: USDTAddress,
        functionName: "approve",
        args: [DorsenForceContractAddress, formattedAmount],
        account: address,
      });
      if (res) {
        setIsApprovedERC20(true);
        toast.success("USDT approved successfully");
      }
    } catch (error: any) {
      toast.error(extractDetailsFromError(error.message as string) as string);
    }
  };

  const { data: resultOfTokenBalance } = useReadContract({
    abi: erc20Abi,
    address: USDTAddress,
    functionName: "balanceOf",
    args: [address as Address],
    account: address,
    chainId: Number(chainId) ?? 99110,
  });


  return (
    <div className="min-h-screen bg-black text-white py-5">
      {/* Background Effect */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,#001d5c_0%,#000_70%)] -z-10" />

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="rounded-3xl border border-purple-500 bg-black/80 backdrop-blur-md p-6 flex flex-col lg:flex-row justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-3xl font-bold">
              R
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-3xl font-bold">{stringTrimMiddle(address as Address)}</h2>
                <span className="px-3 py-1 rounded-full border border-purple-500 text-purple-400 text-sm">
                  Basic
                </span>
              </div>

              <p className="text-gray-400">
                • Member since 5 Apr 2026
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-gray-400 text-sm">Joining Amount</p>
              <h3 className="text-3xl font-bold">$65</h3>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Direct Members</p>
              <h3 className="text-3xl font-bold">24</h3>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Network Level</p>
              <h3 className="text-3xl font-bold">10</h3>
            </div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden" animate="show"
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6"
        >

          <BalanceCard title={"Total Earnings"} token={"$4,820.50"} usd={"$4,820.50"} />
          <BalanceCard title={"Wallet Balance"} token={"$1,240.75"} usd={"$1,240.75"} />
          <BalanceCard title={"Direct Referrals"} token={"24"} usd={"24"} />
          <BalanceCard title={"Network Rank"} token={"Diamond"} usd={"Diamond"} />

        </motion.div>

        <div className="w-full  rounded-[24px] border border-purple-600/70 bg-black/60 p-6">


          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-gray-400">
                Joining Amount
              </label>

              <input
                type="text"
                value="$65"
                readOnly
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
              />
            </div>

            {referralAddress &&

              <div>
                <label className="mb-2 block text-gray-400">
                  Sponsor Address
                </label>

                <input
                  type="text"
                  value={referralAddress}
                  onChange={(e) => setReferralAddress(e.target.value)}
                  placeholder="Enter sponsor wallet address"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
                />
              </div>
            }

            {
              address ? (
                <button
                  className="w-full rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-purple-700 py-4 font-semibold text-white disabled:opacity-50"
                  disabled={
                    isPending ||
                    Number(formatEther(BigInt(resultOfTokenBalance ?? 0))) < 65 ||
                    Number(result?.data?.[0]?.result?.[0]) !== 0 ||
                    (referralAddress !== '' && Boolean(result?.data?.[1]?.result) === false)
                  }
                  onClick={() => {
                    !isAproveERC20 ? approveToken() : joining();

                  }}
                >
                  {
                    Number(result?.data?.[0]?.result?.[0]) !== 0
                      ? "Thanks,You Already Joined Dorsen Force Army"
                      :
                      (
                        isPending
                          ? isAproveERC20
                            ? "Joining..."
                            : "Approving..."
                          : (referralAddress && Boolean(result?.data?.[1]?.result) === false) ?
                            "Invalid Sponsor"
                            : (
                              Number(
                                formatEther(BigInt(resultOfTokenBalance ?? 0))
                              ) < 65
                            )
                              ? "Insufficient fund"
                              : isAproveERC20
                                ? "Join Dorsen Force"
                                : "Approve"
                      )
                  }
                </button>
              ) : (
                <button
                  className="w-full rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-purple-700 py-4 font-semibold text-white disabled:opacity-50"
                  onClick={async () => open()}
                >
                  Connect Wallet
                </button>
              )
            }
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid lg:grid-cols-2 gap-5">
          {/* Income Distribution */}
          <div className="rounded-3xl border border-purple-500 bg-black/80 p-6">
            <h2 className="text-4xl font-bold mb-8">
              Income Distribution
            </h2>

            <div className="space-y-5">
              <IncomeRow
                title="Direct Sponsor Income"
                value="50%"
              />

              <IncomeRow
                title="Autopool Matrix"
                value="42%"
              />

              <IncomeRow
                title="Diamond Autopool"
                value="8%"
              />

              <IncomeRow
                title="Elite Autopool"
                value="10%"
              />

              <IncomeRow
                title="Leadership Bonus"
                value="10%"
              />
            </div>
          </div>

          {/* Autopool */}
          <div className="rounded-3xl border border-cyan-500 bg-black/80 p-6">
            <h2 className="text-4xl font-bold mb-6">
              Autopool Progress
            </h2>

            <div className="space-y-5">
              <LevelRow
                level="Level 1"
                members="2 members"
                amount="$5"
                active
              />

              <LevelRow
                level="Level 2"
                members="4 members"
                amount="$10"
                active
              />

              <div className="bg-cyan-500/20 border border-cyan-400 rounded-xl p-3">
                <div className="flex justify-between mb-2">
                  <span>Level 3 • 8 members</span>
                  <span>$20</span>
                </div>

                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-cyan-400" />
                </div>

                <p className="text-right text-green-400 mt-1">
                  Active
                </p>
              </div>

              <LevelRow
                level="Level 4"
                members="2 members"
                amount="$5"
              />

              <LevelRow
                level="Level 5"
                members="2 members"
                amount="$5"
              />
            </div>

            <button className="mt-6 text-cyan-400 hover:text-cyan-300">
              View all 10 levels →
            </button>
          </div>
        </div>

        {/* Withdrawals */}
        <div className="rounded-3xl border border-purple-500 bg-black/80 p-6">
          <div className="flex justify-between mb-8">
            <h2 className="text-4xl font-bold">
              Recent Withdrawals
            </h2>

            <button className="text-cyan-400">
              View All →
            </button>
          </div>

          <div className="space-y-8">
            <WithdrawalItem
              title="Direct"
              date="22 Apr 2026"
              amount="$160.00"
              status="paid"
              color="text-green-400"
            />

            <WithdrawalItem
              title="Autopool"
              date="12 May 2026"
              amount="$400.00"
              status="approved"
              color="text-cyan-400"
            />

            <WithdrawalItem
              title="Leadership"
              date="20 May 2026"
              amount="$120.00"
              status="pending"
              color="text-yellow-400"
            />
          </div>
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
        >
          <ReferralCopy />
        </motion.div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-purple-500 bg-black/80 p-6">
      <div className="text-cyan-400 mb-4">{icon}</div>

      <p className="text-gray-400">{title}</p>

      <h3 className="text-4xl font-bold mt-2">
        {value}
      </h3>
    </div>
  );
}

function IncomeRow({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="flex justify-between text-2xl">
      <span>{title}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
}

function LevelRow({
  level,
  members,
  amount,
  active = false,
}: {
  level: string;
  members: string;
  amount: string;
  active?: boolean;
}) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        {active ? (
          <CheckCircle className="text-green-400" />
        ) : (
          <Clock className="text-gray-400" />
        )}

        <span>
          {level} • {members}
        </span>
      </div>

      <span className="font-bold text-xl">
        {amount}
      </span>
    </div>
  );
}

function WithdrawalItem({
  title,
  date,
  amount,
  status,
  color,
}: {
  title: string;
  date: string;
  amount: string;
  status: string;
  color: string;
}) {
  return (
    <div className="flex justify-between items-center border-b border-white/10 pb-5">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full border border-cyan-500 flex items-center justify-center">
          <Trophy size={18} />
        </div>

        <div>
          <h4 className="text-2xl font-bold">
            {title}
          </h4>
          <p className="text-gray-400">{date}</p>
        </div>
      </div>

      <div className="text-right">
        <h4 className="text-2xl font-bold">
          {amount}
        </h4>
        <p className={color}>{status}</p>
      </div>
    </div>
  );
}