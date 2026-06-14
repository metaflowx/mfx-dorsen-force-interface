import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/components/QueryProvider";
import { Toaster } from "@/components/sonner";
import ContextProvider from "./context";
import { headers } from "next/headers";


export const metadata: Metadata = {
  title: "Dorsen Force — Automated Rewards & Leadership Platform",
  description: "Discover Dorsen Force — a structured participation ecosystem with referral rewards, autopool benefits, Diamond incentives, and leadership bonuses.",
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {

  const headersObj = await headers();
  const cookies = headersObj.get('cookie')
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <ContextProvider cookies={cookies}>
            {children}
          </ContextProvider>
          <Toaster position="top-center" />
        </QueryProvider>
      </body>
    </html>
  );
}