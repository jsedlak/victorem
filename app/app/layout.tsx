import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Victorem",
  description: "Headless championship scoring application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/omb1ywo.css" />
      </head>
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
