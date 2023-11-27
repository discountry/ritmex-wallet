"use client";
import {
  ConnectWallet,
  useAddress,
  useNetworkMismatch,
  useSDK,
  useSwitchChain,
} from "@thirdweb-dev/react";
import { Arbitrum } from "@thirdweb-dev/chains";
import Link from "next/link";
import { useState } from "react";

export default function WalletApp() {
  const isMismatched = useNetworkMismatch();
  const switchChain = useSwitchChain();
  const address = useAddress();
  const sdk = useSDK();

  const [txHash, setTxHash] = useState<string | null>(null);

  const switchToArbitrum = async () => {
    await switchChain(Arbitrum.chainId);
  };

  const mintFair20Token = async () => {
    if (isMismatched) {
      await switchToArbitrum();
    } else {
      const tx = await sdk?.wallet.sendRawTransaction({
        value: "0",
        to: address,
        data: `0x646174613a2c7b2270223a22666169722d3230222c226f70223a226d696e74222c227469636b223a2266616972222c22616d74223a2231303030227d`,
      });
      console.log(tx);
      setTxHash(tx?.hash ?? null);
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <ConnectWallet />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={mintFair20Token}
      >
        {isMismatched ? "Switch to Arbitrum" : "Mint FAIR-20 Token"}
      </button>
      {txHash && (
        <Link href={`https://arbiscan.io/tx/${txHash}`}>
          <p className="underline text-sky-300">Check on Arbiscan</p>
        </Link>
      )}
      <Link href="https://dune.com/fair20foundation/fair20" target="_blank">
        <p className="underline text-sky-300">fair20 Dune</p>
      </Link>
    </div>
  );
}
