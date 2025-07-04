import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HEMBRA - Diseño Industrial Regenerativo",
  description: "HEMBRA es una marca de diseño industrial en una misión para ayudar a las empresas a construir un futuro regenerativo. Descubre productos innovadores y sostenibles.",
  keywords: "diseño industrial, sostenible, regenerativo, productos ecológicos, HEMBRA",
  authors: [{ name: "HEMBRA Studio" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{backgroundColor: '#fff'}}
      >
        <CartProvider>
          <Header />
          <div>
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
