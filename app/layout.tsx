import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mueez ur Rehman Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
