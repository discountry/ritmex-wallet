"use client";
import {
  ConnectWallet,
  useAddress,
  useChainId,
  useSDK,
  useSwitchChain,
} from "@thirdweb-dev/react";
import { Goerli } from "@thirdweb-dev/chains";
import Link from "next/link";
import { useState } from "react";

export default function GoerliApp() {
  const chainId = useChainId();
  const switchChain = useSwitchChain();
  const address = useAddress();
  const sdk = useSDK();

  const [txHash, setTxHash] = useState<string | null>(null);

  const switchToGoerli = async () => {
    await switchChain(Goerli.chainId);
  };

  const mintGoerlisToken = async () => {
    if (chainId !== Goerli.chainId) {
      await switchToGoerli();
    } else {
      const tx = await sdk?.wallet.sendRawTransaction({
        value: "0",
        to: address,
        data: `0x646174613a2c7b2270223a226772632d3230222c226f70223a226d696e74222c227469636b223a22676f7273222c22616d74223a223130227d`,
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
        onClick={mintGoerlisToken}
      >
        {chainId !== Goerli.chainId ? "Switch to Goerli" : "Mint Goerlis Token"}
      </button>
      {txHash && (
        <Link href={`https://goerli.etherscan.io/tx/${txHash}`}>
          <p className="text-sky-300 underline">Check on Goerli</p>
        </Link>
      )}
      <Link href="https://twitter.com/Goerlis" target="_blank">
        <p className="text-sky-300 underline">Goerlis</p>
      </Link>
      <Link href="https://dune.com/goerlis/goerlis" target="_blank">
        <p className="text-sky-300 underline">Dune Index</p>
      </Link>
    </div>
  );
}
