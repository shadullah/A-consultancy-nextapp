import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";

const onest = Onest({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Care2 Training | Best Consultancy Services",
  description:
    "We deliver healthcare, general cleaning, training, tourism, study abroad & digital marketing services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
