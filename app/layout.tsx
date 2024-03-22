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
  title: "José Uilton - Desenvolvedor Full Stack",
  description: "Portfólio de desenvolvedor Full Stack Javascript | Typescript | React | Node",
  keywords: [
    "Javascript", "Typescript", "React", "ReactJS", "Node", "Node.js", "Express", "Fastify", "Nest",
    "Amazon AWS", "Desenvolvedor Full Stack", "Frontend", "Front-end", "Backend", "Back-end",
    "Engenheiro de software"
  ],
  authors: {
    name: "José Uilton"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🧑‍💻</text></svg>"></link>
      </head>

      <body className={`${poppins.className} bg-zinc-900`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
