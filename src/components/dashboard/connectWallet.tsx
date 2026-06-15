"use client";

import React from "react";
import {
  useAppKit,
  useAppKitAccount,
} from "@reown/appkit/react";

export default function ConnectWallet() {
  const { address } = useAppKitAccount();
  const { open } = useAppKit();

  return (
    <div>
      {!address ? (
        <button
          onClick={() => open()}
          className="px-5 py-3 rounded-full font-bold text-black bg-gradient-to-br from-[#C09EFC] via-[#46A5FE] to-[#2E558E]"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="p-2 bg-[#252525] rounded-4xl">
          <appkit-account-button balance="hide" />
        </div>
      )}
    </div>
  );
}