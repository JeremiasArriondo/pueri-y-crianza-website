import { Footer } from "@/components/Navigation/Footer";
import { Navbar } from "@/components/Navigation/Navbar";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Bienvenid@ a mi página",
  keywords: ["Puericultura", "Pueri", "Doula", "Crianza"],
  authors: [
    {
      name: "Jeremias Arriondo",
      url: "https://www.linkedin.com/in/jeremias-arriondo/"
    }
  ],
  creator: "Jeremias Arriondo",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "Melanie Reynoso",
    description:
      "Soy Meel, Puericultora, Especialista en alimentación complementaria, crianza respetuosa y Doula",
    siteName: "Pueri y crianza Meel",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body className="dark:bg-black">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
