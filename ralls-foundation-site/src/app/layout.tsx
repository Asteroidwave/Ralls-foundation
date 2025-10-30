import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { MotionProvider } from "@/components/motion-provider";

const headingFont = Poppins({ weight: ["400","600","700","800"], subsets: ["latin"], variable: "--font-heading" });
const bodyFont = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Ralls Family Foundation",
  description:
    "Advancing nutrition education for children in underserved communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        <NavBar />
        <MotionProvider>
          {children}
        </MotionProvider>
        <Footer />
      </body>
    </html>
  );
}
