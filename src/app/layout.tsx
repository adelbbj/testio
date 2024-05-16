import localFont from "next/font/local";

import "./globals.css";

const shabnam = localFont({
  src: [
    {
      path: "../../public/fonts/shabnam/Shabnam.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../../public/fonts/shabnam/Shabnam-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../../public/fonts/shabnam/Shabnam-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/shabnam/Shabnam-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/shabnam/Shabnam-Medium.woff2",
      weight: "500",
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
    <html lang="en">
      <body dir="rtl" className={`${shabnam.variable} dark`}>
        {children}
      </body>
    </html>
  );
}
