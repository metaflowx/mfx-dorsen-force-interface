
"use client";
import Link from "next/link"
import { useState } from "react";
import Button from "../Button";
import { motion } from "framer-motion";





const SocialMediaLinks = [

  {
    icon: "/images/home/instagram.svg",
    href: "https://www.instagram.com//",
  },
  {
    icon: "/images/home/whatsapp.svg",
    href: "https://wa.me/918076652161",
  },

]

const FooterDashboard = () => {

  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "home" },
    { label: "About Us", href: "about" },
    { label: "How to Invest", href: "howtoinvest" },
    { label: "Roadmap", href: "roadmap" },
    { label: "FAQs", href: "faqs" },
  ];

  const handleScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false); // close mobile menu on click
  };
  return (
    <>


      <div className="mt-5 ">
        <div className="h-full rounded-2xl bg-[#000000] border border border-purple-500 p-3 shadow-sm hover:shadow-xl">
          <div className="flex justify-center gap-3 md:justify-between items-center flex-wrap">
            <div className="flex items-center gap-5">
              <p className="text-1xl text-white">
                © Dorsen — All rights reserved.
              </p>
            </div>

            <div>
              <ul className="flex gap-3">
                {[
                  { icon: "ss1", url: "https://x.com/dorsenofficial" },
                  { icon: "tl", url: "https://t.me/dorsenlabs" },
                  // { icon: "ss3", url: "https://instagram.com" },
                  // { icon: "ss4", url: "https://linkedin.com" },
                ].map(({ icon, url }, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Link href={url} target="_blank">
                      <img
                        src={`/images/dorsen/landingpage/${icon}.svg`}
                        alt={icon}
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>


    </>
  )
}

export default FooterDashboard