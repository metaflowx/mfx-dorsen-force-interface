


"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store";

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { isAuthenticated, token } = useUserStore();
  console.log(isAuthenticated, token);

  /* ================= MENU ================= */
  const menuItems = [
    { label: "Home", href: "home" },
    { label: "About Us", href: "about" },
    { label: "Compensation Plan", href: "compensation" },
    { label: "Qualifications", href: "qualifications" },
    { label: "FAQ", href: "faqs" },
    { label: "Contact", href: "contact" },
  ];

  const handleScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  /* ================= ROUTES ================= */
  const Login = () => router.push("/login");
  const SignUp = () => router.push("/signup");


  return (
    <header className="w-full backdrop-blur-[10px] fixed top-0 left-0 z-50 animate-[fadeDown_0.6s_ease-out] bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 pb-3 pt-6">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/dorsenforce/logo.svg"
            alt="Logo"
            width={100}
            height={20}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className=" p-px
        rounded-4xl
          
         
       bg-[linear-gradient(135deg,#00A1FA,#5A49E6_35%,#8A0DDB_65%,#2B1B78_100%)]
       shadow-[inset_0_12px_25px_rgba(255,255,255,0.35),0_15px_40px_rgba(0,0,0,0.45)]
       before:absolute before:inset-0
       before:rounded-full
      
       before:pointer-events-none
       ">
          <nav className="hidden lg:flex items-center gap-4 xl:gap-12 
        bg-black
        px-6 py-3
        rounded-4xl

        ">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                href={`#${item.href}`}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-white hover:text-[#B254FA]  transition-colors duration-300 uppercase text-lg "
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ================= DESKTOP AUTH BUTTONS ================= */}
        <div className="hidden lg:block">

        <Link href={"/dashboard"}>
        <button
            className="
    relative overflow-hidden
    px-6 py-3
    cursor-pointer
    rounded-full
    text-white font-extrabold uppercase
      tracking-wide
    bg-[linear-gradient(135deg,#00A1FA,#5A49E6_35%,#8A0DDB_65%,#2B1B78_100%)]
    shadow-[inset_0_12px_25px_rgba(255,255,255,0.35),0_15px_40px_rgba(0,0,0,0.45)]
    before:absolute before:inset-0
    before:rounded-full
    before:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.55),transparent_35%)]
    before:pointer-events-none
  "
          >
            JOIN NOW
          </button>
        </Link>
        </div>

        {/* ================= HAMBURGER ================= */}
        <button
          className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-1 w-full bg-[linear-gradient(270deg,#2DB9FF,#B254FA)] rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""
              }`}
          />
          <span
            className={`block h-1 w-full bg-[linear-gradient(270deg,#2DB9FF,#B254FA)] rounded transition-all duration-300 ${open ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block h-1 w-full bg-[linear-gradient(270deg,#2DB9FF,#B254FA)] rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""
              }`}
          />
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-4 h-screen">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.href}`}
              onClick={(e) => handleScroll(e, item.href)}
              className={`text-white text-lg transition-all duration-300 transform ${open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {item.label}
            </a>
          ))}


          {/* <Link href={"https://dorsen.org/"} target="_blank"
              className="px-5 py-3 cursor-pointer font-agdasima uppercase font- rounded-full  font-bold  text-black bg-linear-to-br from-[#C09EFC] via-[#46A5FE] to-[#2E558E]  ">
              Dorsen
            </Link> */}
        </nav>
      </div>
    </header>
  );
}