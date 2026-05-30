"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import Partner from "./partner";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the joining fee?",
    answer: "$65 one-time participation.",
  },
  {
    question: "Is income guaranteed?",
    answer:
      "Income depends on network activity, participation, and system structure growth.",
  },
  {
    question: "What is autopool?",
    answer:
      "Autopool is an automatic matrix-based reward structure where users are placed systematically.",
  },
  {
    question: "Can I earn without referrals?",
    answer:
      "Yes, users can receive benefits through the autopool structure depending on placement and growth.",
  },
  {
    question: "What is Diamond Rank?",
    answer:
      "Diamong Rank is advanced qualification for diamond autopool",
  },
  {
    question: "What are withdrawal charges?",
    answer:
      "Withdrawal charges depend on the payment gateway and platform processing structure.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative overflow-hidden ">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(0,140,255,0.12),transparent_35%)]" />

      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,119,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,119,255,0.08)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10">
        <Partner />

        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 lg:py-16">

          {/* Heading */}
          <div className="text-center mb-12">

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="font-agdasima font-bold leading-none"
            >
              <span className="text-white text-4xl md:text-6xl lg:text-7xl">
                Dorsen{" "}
              </span>

              <span className="text-4xl md:text-6xl lg:text-7xl bg-[linear-gradient(90deg,#2563FF_0%,#7D13CA_100%)] bg-clip-text text-transparent">
                Force Faqs
              </span>
            </motion.h1>
          </div>

          {/* FAQ LIST */}
          <div className="space-y-5">

            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="
                  rounded-[28px]
                  p-[1px]
                  bg-[linear-gradient(90deg,#00A1FA_0%,#7D13CA_100%)]
                  shadow-[0_0_25px_rgba(0,140,255,0.08)]
                "
              >
                <div className="rounded-[28px] bg-black/95 backdrop-blur-xl overflow-hidden">

                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between gap-5 px-6 md:px-8 py-7 text-left"
                  >
                    <div>
                      <h3 className="text-white font-agdasima text-2xl md:text-4xl leading-tight">
                        {faq.question}
                      </h3>

                      {activeIndex === index && (
                        <p className="text-gray-300 text-base md:text-2xl mt-3 leading-relaxed max-w-4xl">
                          {faq.answer}
                        </p>
                      )}
                    </div>

                    {/* Icon */}
                    <div
                      className="
                        min-w-[42px]
                        h-[42px]
                        rounded-full
                        border border-gray-500
                        flex items-center justify-center
                        text-white
                      "
                    >
                      {activeIndex === index ? (
                        <Minus size={20} />
                      ) : (
                        <Plus size={20} />
                      )}
                    </div>
                  </button>

                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;