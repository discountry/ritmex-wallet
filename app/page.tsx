import Header from "@/components/Header";
import ToolCard from "@/components/ToolCard";
import { ToolCardPlaceholder } from "@/components/ToolCardPlaceholder";
import WalletApp from "@/components/WalletApp";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12">
      <Header />
      <div className="mt-8 flex flex-1 items-center justify-center gap-4">
        <ToolCard
          title="One Click Fair-20 Mint"
          description="Mint a Fair-20 token with one click."
          href="/tools/fair20"
        />
        <ToolCard
          title="One Click ZRC-20 Mint"
          description="Mint a ZRC-20 token with one click."
          href="/tools/zrc20"
        />
        <ToolCardPlaceholder />
      </div>
      <footer>
        <p>&copy; {new Date().getFullYear()} RitMEX All Rights Reserved.</p>
      </footer>
    </main>
  );
}
