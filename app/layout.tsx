import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeSetter from "@/components/ThemeSetter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Email App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  


  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between items-center border-b p-4 dark:bg-black dark:text-white text-black">
          <div>Email Test</div>
          <div className="mx-2">
            <ThemeSetter/>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
