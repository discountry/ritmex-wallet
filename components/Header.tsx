import Image from "next/image";
import logo from "@/public/logo.png";

export default function Header() {
  return (
    <div className="flex justify-center items-center gap-2 select-none">
      <Image src={logo} alt="RitMEX" width={32} height={32} />
      <h1 className="text-xl font-bold">RitMEX Wallet Service</h1>
    </div>
  );
}
