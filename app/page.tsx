import Header from "@/components/Header";
import ToolCard from "@/components/ToolCard";
import { ToolCardPlaceholder } from "@/components/ToolCardPlaceholder";
import WalletApp from "@/components/WalletApp";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12">
      <Header />
      <div className="flex flex-1 mt-8 justify-center items-center gap-4">
      <ToolCard
        title="One Click Fair-20 Mint"
        description="Mint a Fair-20 token with one click."
        href="/tools/fair20"
      />
      <ToolCardPlaceholder />
      </div>
      <footer>
        <p>&copy; {new Date().getFullYear()} RitMEX All Rights Reserved.</p>
      </footer>
    </main>
  );
}
