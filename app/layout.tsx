import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

// Setup font Roboto
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto", // opsional jika pakai CSS variable
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexGen Solutions - Digital Solutions Provider",
  description: "Transformasi Digital untuk Bisnis Anda. NexGen Solutions membantu bisnis Anda berkembang dengan solusi teknologi terbaik dan inovatif.",
  keywords: "website development, mobile app, software development, digital solutions, web design, next.js, react, tailwind css, indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${roboto.className} scroll-smooth`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
