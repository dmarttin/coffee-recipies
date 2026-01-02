import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aeropress Recipe Guide",
  description: "Step-by-step Aeropress brewing guides with interactive timers for perfect coffee every time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
