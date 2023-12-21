import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Background from "@/components/func/bg-star";
import Providers from "@/components/func/providers";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "900"] });

export const metadata: Metadata = {
  title: "Mihdan Advani - Link",
  description: "Kumpulan Link Berguna untukmu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en">
    //   <body className={poppins.className}>{children}</body>
    // </html>
    <html lang="en">
      <body className={poppins.className}>
        <div className="star-bg"></div>
        <Providers>{children}</Providers>
        <Background />
      </body>
    </html>
  );
}
