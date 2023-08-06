"use client";

import "./globals.css";
// import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ApolloProvider } from "@apollo/client";
import { GraphQlClient } from "../../API/Graph";
import Footer from "@/components/footer";
import Head from "next/head";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

// export const metadata: Metadata = {
//   title: "Mihdan Advani - Link",
//   description: "Kumpulan Link Berguna",
// };

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
      <Head>
        <title>Mihdan Link</title>
      </Head>
      <body className={poppins.className}>
        <ApolloProvider client={GraphQlClient}>{children}</ApolloProvider>
        <Footer />
      </body>
    </html>
  );
}
