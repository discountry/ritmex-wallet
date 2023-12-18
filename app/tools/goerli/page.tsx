import GoerliApp from "@/components/GoerliApp";
import Header from "@/components/Header";

export default function Goerli() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12">
      <Header />
      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        <h1 className="text-center text-2xl font-bold">
          One Click Goerlis Mint
        </h1>
        <GoerliApp />
      </div>
    </main>
  );
}
