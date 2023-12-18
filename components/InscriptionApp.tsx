"use client";
import {
  ConnectWallet,
  useAddress,
  useChain,
  useSDK,
} from "@thirdweb-dev/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { utils } from "ethers";

export default function InscriptionApp() {
  const chain = useChain();
  const address = useAddress();
  const sdk = useSDK();

  const [stringData, setStringData] = useState<string>(`data:,{"p":"grc-20","op":"mint","tick":"gors","amt":"10"}`);
  const [data, setData] = useState<string>('0x');

  const handleDataChange = (e: any) => {
    const stringValue = e.target.value;
    setStringData(stringValue)
    const hexValue = utils.hexlify(utils.toUtf8Bytes(stringValue));
    setData(hexValue);
  }

  const [txHash, setTxHash] = useState<string | null>(null);

  const mintEVMToken = async () => {
    const tx = await sdk?.wallet.sendRawTransaction({
      value: "0",
      to: address,
      data: data,
    });
    console.log(tx);
    setTxHash(tx?.hash ?? null);
  };

  useEffect(() => {
    setData(utils.hexlify(utils.toUtf8Bytes(stringData)));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <ConnectWallet />
      <input name="stringData" value={stringData} onChange={handleDataChange} className="text-black h-12 w-full rounded px-1" />
      <p className="overflow-hidden max-w-[300px] text-ellipsis">Hex Data: {data}</p>
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={mintEVMToken}
      >
        {"Mint EVM Inscription"}
      </button>
      <p>Current Chain: {chain?.name}</p>
      {txHash && (
        <Link href={`https://etherscan.io/tx/${txHash}`}>
          <p className="text-sky-300 underline">Check on etherscan</p>
        </Link>
      )}
    </div>
  );
}
