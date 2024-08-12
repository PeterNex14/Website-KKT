import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desa Passo",
  description: "Passo adalah sebuah desa di kecamatan Kakas Barat, Kabupaten Minahasa, Sulawesi utara, indonesia. Desa Passo adalah desa tertua yang ada di Minahasa. Desa ini didirikan pada tahun 1839.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
