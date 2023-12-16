import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "@/components/ClientProvider";
import {
  metamaskWallet,
  okxWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RitMEX Wallet",
  description: "Wallet service by RitMEX.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider
          supportedWallets={[
            metamaskWallet(),
            okxWallet(),
            coinbaseWallet(),
            walletConnect(),
          ]}
          activeChain="arbitrum"
          clientId={process.env.NEXT_PUBLIC_CLIENT_ID ?? ""}
        >
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}
