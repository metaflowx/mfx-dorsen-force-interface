// "use client";
// import { motion } from "framer-motion";
// import BalanceCard from "@/components/dashboard/balanceCard";

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// export default function DashboardPage() {
   
  


  
 

//   return (
//     <div>
//       <main>
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           animate="show"
//           className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6"
//         >
          
//           <BalanceCard title={"Total Earnings"} token={"$4,820.50"} usd={"$4,820.50"}/>
//           <BalanceCard title={"Wallet Balance"} token={"$1,240.75"} usd={"$1,240.75"}/>
//           <BalanceCard title={"Direct Referrals"} token={"24"} usd={"24"}/>
//           <BalanceCard title={"Network Rank"} token={"Diamond"} usd={"Diamond"}/>
         
//         </motion.div>
 
//       </main>
//     </div>
//   );
// }


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


 const fadeUp = {
  hidden: { opacity: 0, y: 30 },
   show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
 };

export default function DashboardPage() {
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
                <h2 className="text-3xl font-bold">Rajesh Kumar</h2>
                <span className="px-3 py-1 rounded-full border border-purple-500 text-purple-400 text-sm">
                  Diamond
                </span>
              </div>

              <p className="text-gray-400">
                @demouser • Member since 5 Apr 2026
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
          initial="hidden"           animate="show"
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6"
        >
          
         <BalanceCard title={"Total Earnings"} token={"$4,820.50"} usd={"$4,820.50"}/>
          <BalanceCard title={"Wallet Balance"} token={"$1,240.75"} usd={"$1,240.75"}/>
           <BalanceCard title={"Direct Referrals"} token={"24"} usd={"24"}/>
         <BalanceCard title={"Network Rank"} token={"Diamond"} usd={"Diamond"}/>
         
       </motion.div>

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
                value="36%"
              />

              <IncomeRow
                title="Autopool Matrix"
                value="46%"
              />

              <IncomeRow
                title="Diamond Autopool"
                value="18%"
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