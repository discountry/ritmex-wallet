import Header from "@/components/Header";
import WalletApp from "@/components/WalletApp";

export default function Fair20() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12">
      <Header />
      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        <h1 className="text-center text-2xl font-bold">
          One Click Fair-20 Mint
        </h1>
        <WalletApp />
      </div>
    </main>
  );
}
