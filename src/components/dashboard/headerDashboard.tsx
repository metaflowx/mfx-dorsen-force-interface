import Link from "next/link"
import ConnectWallet from "./connectWallet"
 

const HeaderDashboard = () => {
  return (
    <>
      <div className="flex justify-center sm:justify-between items-center gap-3 flex-wrap ">
        <p className="text-[15px] text-center sm:text-start   text-white uppercase">
        WELCOME TO THE DORSEN FORCE THE WEALTH MACHINE
        </p>

        <div className="flex items-center gap-2">
          {/* <button className="px-5 py-3 cursor-pointer font-agdasima uppercase rounded-full  font-bold  text-black bg-linear-to-br from-[#C09EFC] via-[#46A5FE] to-[#2E558E] w-44 ">Connect Wallet</button> */}
          <ConnectWallet />
        </div>
      </div>
    </>
  )
}

export default HeaderDashboard