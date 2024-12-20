import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "@/context/GlobalContext";

const cairo = Cairo({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["arabic"],
});

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
    <html lang="en" dir="rtl">
      <GlobalProvider>
        <body className={`${cairo.className} antialiased`}>{children}</body>
      </GlobalProvider>
    </html>
  );
}
