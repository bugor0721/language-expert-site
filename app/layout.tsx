import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { BridgeProvider } from "@/components/bridge-provider";
import { SiteHeader } from "@/components/site-header";
import { Toaster } from "@/components/ui/sonner";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const appName = "Полиглот";

export const metadata: Metadata = {
  title: appName,
  description: appName,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={cn("font-sans scroll-smooth", geist.variable)}>
      <body className="antialiased min-h-screen bg-background flex flex-col">
        <BridgeProvider />
        <SiteHeader appName={appName} />
        <main className="flex-1">{children}</main>
        <footer className="border-t">
          <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
            <p>
              © {new Date().getFullYear()} {appName}
            </p>
            <Link
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Политика конфиденциальности
            </Link>
          </div>
        </footer>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
