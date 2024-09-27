import { token, plant } from "../assets/images";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAccount, useConnect, configureChains } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useFlow } from "../context/FlowContext";
import { publicProvider } from "wagmi/providers/public";
import { Alfajores, Celo } from "@celo/rainbowkit-celo/chains";

const Hero = () => {
  const { walletAddress, connectWallet, hideConnectBtn } = useFlow();
  const { address, isConnected } = useAccount();
  const [userAddress, setUserAddress] = useState("");
  const route = useRouter();

  const { chains, publicClient } = configureChains(
    [Alfajores, Celo],
    [publicProvider()]
  );
  const { connect } = useConnect({
    connector: new InjectedConnector({ chains }),
  });

  useEffect(() => {
    if (isConnected && address) {
      setUserAddress(address);
    }
  }, []);

  return (
    <div className="w-screen min-h-screen px-[18px] md:mr-[145px] md:ml-[85.71px] flex flex-col md:flex-row items-center overflow-y-scroll">
      <div className="flex flex-col md:w-[50%] md:mt-[89px] gap-[20px] mt-[40px] items-center justify-center">
        <span className="text-Accent text-[16px] font-bold items-center text-center md:text-start md:self-start">
          TokenPlay
        </span>
        <h1 className="text-black text-3xl md:text-5xl lg:text-[100px] font-black text-center md:self-start md:text-start">
        Tokenized in-game assets
        </h1>
        <span className="text-[14px] text-Black font-semibold text-center  md:self-start md:text-start">
        NFTs (Non-Fungible Tokens) on the LISK network        </span>
        <div className="flex items-center space-x-7  md:self-start md:text-start">
          <div>
      <div>
     
        <button onClick={connectWallet} className="bg-Accent text-Black px-[20px] lg:text-[16px] lg:px-[26px] py-[12px] rounded-[8px] text-[12px] font-bold">{walletAddress ? walletAddress.slice(0, 9) : "connect Wallet"}</button>
    
       </div>
          </div>
          <Link href="/dashboard">
          <button className="border-2 border-Accent text-Black px-[20px] lg:text-[16px] lg:px-[26px] py-[12px] rounded-[8px] text-[12px] font-bold hover-bg-Accent hover-text-white">
            Learn More
          </button>
          </Link>
          
          
        </div>

        <div className="flex items-center text-center  md:self-start md:text-start gap-[40px]">
          <div className="flex flex-col items-center">
            <span className="text-[20px] font-bold text-Black leading-[100%] flex text-center items-center">
              $750k<span className="text-Accent">+</span>
            </span>
            <span className="text-Black text-xl">Earned by 2024</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[20px] font-bold text-Black leading-[100%] flex items-center">
              $750k<span className="text-Accent">+</span>
            </span>
            <span className="text-Black text-xl">Earned by 2024</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col relative items-center mt-[60px] md:w-[40%] md:mr-[85px]">
        <Image
          src={token}
          sizes= "w-5 h-10"
          alt="main"
          className="w-[278.699px] h-[236px] md:w-[476px] lg:w-[678px] lg:h-[690px] md:h-[397.551px]  top-[197px] right-[97px] object-fill"
        />
     
        <div className="flex flex-row w-full items-right justify-end text-Black text-right mt-6">
          <span className="text-[14px]  font-semibold">
            Powered by{" "}
            <span className="text-red-600 text-[20px] font-bold">Lisk</span>&{" "}
            <span className="text-Black text-[20px] font-bold">Ayalabs</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
