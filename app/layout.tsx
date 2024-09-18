import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import QueryProvider from "@/providers/query-provider";
import SheetProvider from "@/providers/sheet-provider";

const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html /* className="dark" */ lang="en">
      <body className={inter.className}>
        <QueryProvider>
          {children}
          <SheetProvider />
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
