import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@fluctux/ui/globals";
import "./styles/docs.style.css";
import "./styles/alert.style.css";
import GlobalClientProvider from "@/components/providers/global-client-providers";
import { Suspense } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider attribute="class">
          <Suspense>
            <GlobalClientProvider>
              <SkeletonTheme
                baseColor="var(--skeleton-base-color)"
                highlightColor="var(--skeleton-highlightColor)"
              >
                {children}
              </SkeletonTheme>
            </GlobalClientProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
