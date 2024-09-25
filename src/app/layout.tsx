import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";


export const metadata: Metadata = {
  title: "Home",
  description: "AncientBible dot Org",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <nav>
          <NavBar />
      </nav>
        {children}
      </body>
    </html>
  );
}
