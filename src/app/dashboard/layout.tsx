"use client";

 
import FooterDashboard from "@/components/dashboard/footerDashboard";
import HeaderDashboard from "@/components/dashboard/headerDashboard";
import Sidebar from "@/components/dashboard/sidebar";
 
 
import { useUserStore } from "@/store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Detect Active Tab by URL
    const getActiveLabel = () => {
        if (pathname.includes("/dashboard")) return "Dashboard";
        if (pathname.includes("/dashboard/earning")) return "Earning";
        if (pathname.includes("wallet")) return "Wallet";
        if (pathname.includes("trading")) return "Trading";
        if (pathname.includes("referral")) return "Referral";
        if (pathname.includes("profile")) return "Profile";
        return "";
    };

    return (
        <div className="flex min-h-screen text-white Bnr___bg">
            <Sidebar />
            <main className="flex-1 p-6 mt-16 lg:mt-0">
                <HeaderDashboard />
                {children}
                <FooterDashboard />
            </main>
        </div>
    );
}
