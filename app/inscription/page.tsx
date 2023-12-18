import Header from "@/components/Header";
import InscriptionApp from "@/components/InscriptionApp";

export default function ZRC20() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start p-12">
      <Header />
      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        <h1 className="text-center text-2xl font-bold">
          One Click EVM Inscription
        </h1>
        <InscriptionApp />
      </div>
    </main>
  );
}
