"use client"
import { stringTrimMiddle } from "@/libs/stringTrimMiddle";
import { useEffect, useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi"
import { useConnection } from "wagmi";

const ReferralCopy = () => {
    const { address } = useConnection();
    const [url, setUrl] = useState('');
    const [url1, setUrl1] = useState('');


    useEffect(() => {
        if (typeof window !== "undefined") {
            setUrl(`${window.location.host}/dashboard?ref=${(stringTrimMiddle(address as string, 4) || "")}`);
            setUrl1(`${window.location.host}/dashboard?ref=${address as string}`);
        }
    }, [address]);
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url1);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500); // reset after 1.5s
        } catch (error) {
            console.error("Copy failed:", error);
        }
    };
    return (
        <>
            <div className="  mt-5">
                <div className="text-center bg-[#000000] border border-[#311745] rounded-2xl p-3 py-5  flex items-center justify-between">
                    <p className="text-[12px] sm:text-sm break-all">{url}</p>

                    {copied ? (
                        <FiCheck className="text-green-400 text-xl" />
                    ) : (
                        <FiCopy onClick={handleCopy} className="cursor-pointer text-xl" />
                    )}
                </div>
            </div>
        </>
    )
}



export default ReferralCopy