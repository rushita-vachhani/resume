import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Harshit Vachhani | Portfolio",
  description: "Resume & portfolio of Harshit Vachhani",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Sidebar />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
