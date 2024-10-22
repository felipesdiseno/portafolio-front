import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio nombre",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex h-screen overflow-y-auto min-h-screen  justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
