import Header from "@/components/Header";
import Zrc20App from "@/components/Zrc20App";

export default function ZRC20() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12">
      <Header />
      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        <h1 className="text-center text-2xl font-bold">
          One Click ZRC-20 Mint
        </h1>
        <Zrc20App />
      </div>
    </main>
  );
}
