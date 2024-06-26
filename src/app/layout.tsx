import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import Providers from "@/redux/provider";

import { Header } from "./_components/header";

import "./globals.css";

const shabnam = localFont({
  src: [
    {
      path: "../../public/fonts/shabnam/Shabnam-Thin-FD.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/shabnam/Shabnam-Light-FD.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/shabnam/Shabnam-FD.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/shabnam/Shabnam-Medium-FD.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/shabnam/Shabnam-Bold-FD.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-shabnam",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" className={`${shabnam.variable}`}>
      <body className="min-h-screen grid grid-rows-[72px_auto] dark:bg-base-100 dark:text-base-content">
        <Providers>
          <Header />
          <main className="py-11">{children}</main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
