import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adons Techonology",
  description:
    "At Adons, we are not just a tech company; we are the architects of your digital success story. Established with a passion for innovation, a commitment to excellence, and a vision to empower businesses in the digital age, Adons is your trusted partner for web development, graphics design, and digital marketing solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" container">{children}</body>
    </html>
  );
}
