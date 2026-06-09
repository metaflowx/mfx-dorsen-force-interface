"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrTransaction } from "react-icons/gr";
import { FiMenu, FiX } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { FaWallet, FaUsers } from "react-icons/fa";
import { AiOutlinePercentage } from "react-icons/ai";
import { RiExchangeFundsFill } from "react-icons/ri";
import { HiUserCircle } from "react-icons/hi";

export default function Sidebar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { label: "Dashboard", icon: <MdDashboard size={20} />, href: "/dashboard" },
        { label: "Direct Income", icon: <RiExchangeFundsFill size={20} />, href: "/dashboard/direct-income" },
        { label: "Autopool Matrix", icon: <GrTransaction size={20} />, href: "/dashboard/autopool" },
        { label: "Diamond Autopool", icon: <FaUsers size={20} />, href: "/dashboard/daimond" },
        { label: "Leadership Bonus", icon: <HiUserCircle size={20} />, href: "/dashboard/leaderboard" },
        { label: "Withdraw", icon: <HiUserCircle size={20} />, href: "/dashboard/withdraw" },
        { label: "Profile", icon: <HiUserCircle size={20} />, href: "/dashboard/profile" },
    ];

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            {/* MOBILE TOP BAR */}
            <div className="fixed top-0 left-0 w-full lg:hidden z-40 backdrop-blur-[10px]">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center jus gap-2">
                        <Link className="text-center" href={"/"}><img src="/images/dorsenforce/logo.svg" alt="Logo" className="w-12 inline-block" /></Link>
                    </div>
                    <button onClick={() => setMenuOpen(true)}>
                        <FiMenu size={26} />
                    </button>
                </div>
            </div>

            {/* OVERLAY */}
            {menuOpen && (
                <div
                    onClick={closeMenu}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                ></div>
            )}
            {/* MOBILE SIDEBAR */}
            <aside
                className={`fixed top-0 left-0 h-full w-64  backdrop-blur-[10px] border-r border-[#00d3f39c] p-5 z-50 transition-transform duration-300 lg:hidden 
                ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-cyan-400">Menu</h2>
                    <button onClick={closeMenu}>
                        <FiX size={26} />
                    </button>
                </div>
                <nav className="space-y-3">
                    {navItems.map((item) => (
                        <NavItem
                            key={item.label}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                            active={pathname === item.href}
                            onClick={closeMenu}
                        />
                    ))}
                </nav>
                <div className="flex items-center justify-center mt-5 ">
                    <div className="w-full   rounded-3xl border border-purple-700/60 bg-black/40 backdrop-blur-sm p-3 shadow-[0_0_30px_rgba(124,58,237,0.15)]">
                        <h3 className="text-cyan-400 text-[20px] font-medium mb-2">
                            Network on Dorsen Force
                        </h3>

                        <div className="space-y-2">
                            <p className="text-white text-[16px]">
                                All income paid in USDT
                            </p>

                            <p className="text-gray-400 text-[16px]">
                                20% Admin LDF Fee on withdrawal
                            </p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* DESKTOP SIDEBAR */}
            <aside className="hidden lg:flex flex-col w-64 p-5 space-y-8 border-r  border-[#311745]">
                <Link className="text-center" href={"/"}><img src="/images/dorsenforce/logo.svg" alt="Logo" className="w-36 mt-3 inline-block" /></Link>
                <nav className="space-y-3">
                    {navItems.map((item) => (
                        <NavItem
                            key={item.label}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                            active={pathname === item.href}
                        />
                    ))}
                </nav>
                <div className="flex items-center justify-center ">
                    <div className="w-full   rounded-3xl border border-purple-700/60 bg-black/40 backdrop-blur-sm p-3 shadow-[0_0_30px_rgba(124,58,237,0.15)]">
                        <h3 className="text-cyan-400 text-[20px] font-medium mb-2">
                            Network on Dorsen Force
                        </h3>

                        <div className="space-y-2">
                            <p className="text-white text-[16px]">
                                All income paid in USDT
                            </p>

                            <p className="text-gray-400 text-[16px]">
                                20% Admin LDF Fee on withdrawal
                            </p>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

function NavItem({ icon, label, href, active, onClick }: any) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`flex items-center gap-2 px-4 py-2.5   rounded-4xl cursor-pointer transition-all
                ${active
                    ? " cursor-pointer  overflow-hidden rounded-full text-white  bg-[linear-gradient(135deg,#66B6FF_0%,#5A49E6_35%,#8A0DDB_65%,#2B1B78_100%)] shadow-[inset_0_8px_20px_rgba(255,255,255,0.35),0_10px_30px_rgba(0,0,0,0.45)]  "
                    : "hover:bg-[linear-gradient(135deg,#66B6FF_0%,#5A49E6_35%,#8A0DDB_65%,#2B1B78_100%)] hover:shadow-[inset_0_8px_20px_rgba(255,255,255,0.35),0_10px_30px_rgba(0,0,0,0.45)]"
                }`}>
            {icon}
            <span>{label}</span>
        </Link>
    );
}
