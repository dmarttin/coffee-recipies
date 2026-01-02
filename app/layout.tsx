import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";
import { SiteHeader } from "@/components/site-header";

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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <SiteHeader />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
