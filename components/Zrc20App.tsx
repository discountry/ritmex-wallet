"use client";
import {
  ConnectWallet,
  useAddress,
  useChainId,
  useNetworkMismatch,
  useSDK,
  useSwitchChain,
} from "@thirdweb-dev/react";
import { ZksyncEra } from "@thirdweb-dev/chains";
import Link from "next/link";
import { useState } from "react";

export default function Zrc20App() {
  const chainId = useChainId();
  const switchChain = useSwitchChain();
  const address = useAddress();
  const sdk = useSDK();

  const [txHash, setTxHash] = useState<string | null>(null);

  const switchToZksyncEra = async () => {
    await switchChain(ZksyncEra.chainId);
  };

  const mintZRC20Token = async () => {
    if (chainId !== ZksyncEra.chainId) {
      await switchToZksyncEra();
    } else {
      const tx = await sdk?.wallet.sendRawTransaction({
        value: "0",
        to: address,
        data: `0x646174613a2c7b2270223a227a72632d3230222c226f70223a226d696e74222c227469636b223a2273796e63222c22616d74223a2234227d`,
      });
      console.log(tx);
      setTxHash(tx?.hash ?? null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <ConnectWallet />
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={mintZRC20Token}
      >
        {chainId !== ZksyncEra.chainId
          ? "Switch to ZksyncEra"
          : "Mint ZRC-20 Token"}
      </button>
      {txHash && (
        <Link href={`https://explorer.zksync.io/tx/${txHash}`}>
          <p className="text-sky-300 underline">Check on zksync</p>
        </Link>
      )}
      <Link href="https://zksmarket.ink/" target="_blank">
        <p className="text-sky-300 underline">zksmarket</p>
      </Link>
      <Link href="https://dune.com/polka/dollarsync" target="_blank">
        <p className="text-sky-300 underline">Dune Index</p>
      </Link>
    </div>
  );
}
