import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "José Uilton - Portfólio Full Stack",
  description: "Portfólio de desenvolvedor Full Stack Javascript | Typescript | React | Node",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${poppins.className} bg-zinc-900`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
