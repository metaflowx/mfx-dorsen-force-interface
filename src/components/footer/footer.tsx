// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const stagger = {
//   show: { transition: { staggerChildren: 0.1 } },
// };

// const Footer = () => {
//   const [open, setOpen] = useState(false);

//   const menuItems = [
//     { label: "Home", href: "home" },
//     { label: "About Us", href: "about" },
//     { label: "Why Dorsen?", href: "whydorsen" },
//     { label: "Tokenomics", href: "tokenomics" },
//     { label: "Roadmap", href: "roadmap" },
//     { label: "Use Cases", href: "mining" },

//   ];



//   const Resources = [
//     { label: "Whitepaper", href: "images/dorsen/header/Dorsen WhitePaper.pdf" },
//     // { label: "Disclaimer", href: "#" },
//   ];

//   const Ecosystem = [
//     { label: "Chain ID: 99110", href: "#" },
//     { label: "Explorer", href: "https://dorsenscan.io/" },
//     { label: "Documentation", href: "https://docs.dorsenscan.io/" },

//   ];

//   const handleScroll = (e: React.MouseEvent, href: string) => {
//     e.preventDefault();
//     const element = document.getElementById(href);
//     if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
//     setOpen(false);
//   };

//   return (
//     <div>
//       <div className="max-w-7xl mx-auto px-6 py-10 lg:py-15 xl:py-20 2xl:py-25">

//         {/* TOP GRID */}
//         <motion.div
//           variants={stagger}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="text-white  mb-10 flex-initial lg:flex text-center lg:text-start flex-wrap space-evenly lg:justify-between"
//         >

//           <motion.div variants={fadeUp}>
//             <Link href={""}>
//               <h3 className="text-4xl">DORSEN</h3>
//             </Link>
//             <h3 className="text-2xl">
//               Dorsen – Secure & Scalable <br /> Crypto Ecosystem
//             </h3>
//             <p className="mt-2">
//               Dorsen is a next-generation <br />
//               crypto ecosystem delivering secure <br />
//               rewards, transparent tokenomics, <br />
//               and scalable blockchain infrastructure <br />
//               designed for sustainable long-term growth.
//             </p>
//           </motion.div>

//           {[menuItems ].map((list, idx) => (
//             <motion.div key={idx} variants={fadeUp}>
//               <h3 className="text-2xl font-bold mt-3 text-white">
//                 {idx === 0 ? "Links" : idx === 1 ? "Resources" : "Network"}
//               </h3>
//               <ul className="list-none m-0 p-0">
//                 {list.map((item, i) => (
//                   <motion.li key={i} className="mt-2" whileHover={{ x: 4 }}>
//                     <a
//                       href={`#${item.href}`}
//                       onClick={(e) => handleScroll(e, item.href)}
//                     >
//                       <p className="transition hover:text-[#2DB9FF]">
//                         {item.label}
//                       </p>
//                     </a>
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}

//           {[ Resources].map((list, idx) => (
//             <motion.div key={idx} variants={fadeUp}>
//               <h3 className="text-2xl font-bold mt-3 text-white">
//                 {idx === 0 ? "Links" : idx === 1 ? "Resources" : "Network"}
//               </h3>
//               <ul className="list-none m-0 p-0">
//                 {list.map((item, i) => (
//                   <motion.li key={i} className="mt-2" whileHover={{ x: 4 }}>
//                     <a
//                       href={`${item.href}`}
//                       onClick={(e) => handleScroll(e, item.href)}
//                     >
//                       <p className="transition hover:text-[#2DB9FF]">
//                         {item.label}
//                       </p>
//                     </a>
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}

//           {[ Ecosystem].map((list, idx) => (
//             <motion.div key={idx} variants={fadeUp}>
//               <h3 className="text-2xl font-bold mt-3 text-white">
//                 {idx === 0 ? "Links" : idx === 1 ? "Resources" : "Network"}
//               </h3>
//               <ul className="list-none m-0 p-0">
//                 {list.map((item, i) => (
//                   <motion.li key={i} className="mt-2" whileHover={{ x: 4 }}>
//                     <a
//                       href={`${item.href}`}
//                       onClick={(e) => handleScroll(e, item.href)}
//                     >
//                       <p className="transition hover:text-[#2DB9FF]">
//                         {item.label}
//                       </p>
//                     </a>
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* DISCLAIMER */}
//         {/* <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="mt-10 mb-10 text-center lg:text-left"
//         >
//           <p className="text-white text-2xl">Disclaimer</p>
//           <p className="text-[#808080]">
//             Dorsen is a decentralized blockchain protocol. Participation in staking and mining involves risk. Rewards are not guaranteed and depend on smart contract logic and network activity. Users are responsible for their own wallet security and investment decisions.
//           </p>
//         </motion.div> */}

//         {/* BOTTOM BAR */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="p-px rounded-3xl bg-[linear-gradient(270deg,#2DB9FF,#B254FA)]"
//         >
//           <div className="h-full rounded-3xl bg-[#000000] p-6 shadow-sm hover:shadow-xl transition">
//             <div className="flex justify-center gap-3 md:justify-between items-center flex-wrap">
//               <div className="flex items-center gap-5">
//                 <p className="text-1xl text-white text-center lg:text-left">
//                   © 2025 Dorsen Network. All rights reserved.
//                 </p>
//               </div>

//               <ul className="flex gap-3">
//                 {[
//                   { icon: "ss1", url: "https://x.com/dorsenofficial" },
//                   { icon: "tl", url: "https://t.me/doesenfoundationofficial" },
//                   // { icon: "ss3", url: "https://instagram.com" },
//                   // { icon: "ss4", url: "https://linkedin.com" },
//                 ].map(({ icon, url }, i) => (
//                   <motion.li
//                     key={i}
//                     whileHover={{ y: -6 }}
//                     transition={{ type: "spring", stiffness: 200 }}
//                   >
//                     <Link href={url} target="_blank">
//                       <img
//                         src={`/images/dorsen/landingpage/${icon}.svg`}
//                         alt={icon}
//                       />
//                     </Link>
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </div>
//   );
// };

// export default Footer;

"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
};

const Footer = () => {
  const menuItems = [
    { label: "About", href: "home" },
    { label: "Plan", href: "about" },
    { label: "FAQ", href: "whydorsen" },
    { label: "Contact", href: "tokenomics" },
  ];

  const resources = [
    {
      label: "Whitepaper",
      href: "/images/dorsen/header/Dorsen WhitePaper.pdf",
    },
  ];

  const ecosystem = [
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "" },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {/* Logo + About */}
        <motion.div className="text-center lg:text-start" variants={fadeUp}>
          <img src={"/images/dorsenforce/logo.svg"} alt={""} className="inline-block"/>
          <p className="mt-4 text-gray-400 text-[22px] ">
            A Structured Network Model Designed for Scalable Earnings
          </p>
        </motion.div>

        {/* Links */}
        <motion.div className="text-center lg:text-center" variants={fadeUp}>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className=" ">
            {menuItems.map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.href}`}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="hover:text-[#2DB9FF] transition text-[18px]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

       

        {/* Network */}
        <motion.div className="text-center lg:text-end" variants={fadeUp}>
          <h3 className="text-2xl font-semibold mb-4">Legal</h3>
          <ul className="">
            {ecosystem.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2DB9FF] transition text-[18px]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

      </motion.div>

      <motion.div className="text-center lg:text-start" variants={fadeUp}>
      <h3 className="text-2xl font-semibold mt-4 text-white">Disclaimer</h3>
          <p className=" text-gray-400 text-[18px] ">
          This is a network-based earning model. Income is not guaranteed and depends on user participation and performance.
          </p>
        </motion.div>

      {/* BOTTOM BAR */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="p-px mt-10 rounded-3xl bg-[linear-gradient(270deg,#2DB9FF,#B254FA)]"
      >
        <div className="h-full rounded-3xl bg-[#000000] p-4 shadow-sm hover:shadow-xl transition">
          <div className="flex justify-center gap-3 md:justify-between items-center flex-wrap">
            <div className="flex items-center gap-5">
              <p className="text-1xl text-white text-center lg:text-left">
                © 2026 Dorsen Force. All rights reserved.
              </p>
            </div>

            <ul className="flex gap-3">
              {[
                { icon: "ss1", url: "" },
                { icon: "tl", url: "" },
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
                      alt={icon} />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;

