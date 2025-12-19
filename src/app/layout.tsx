import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Austin Rose | People Analytics Leader",
    template: "%s | Austin Rose",
  },
  description:
    "Austin Rose is a People Analytics leader specializing in workforce data strategy, executive reporting, and data-driven talent decisions. Explore his portfolio of analytics work impacting 23,000+ employees.",
  keywords: [
    "People Analytics",
    "HR Analytics",
    "Data Visualization",
    "Workforce Analytics",
    "Talent Analytics",
    "Workday",
    "Tableau",
  ],
  authors: [{ name: "Austin Rose" }],
  creator: "Austin Rose",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://austinrose.io",
    siteName: "Austin Rose",
    title: "Austin Rose | People Analytics Leader",
    description:
      "People Analytics leader specializing in workforce data strategy and executive reporting.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Rose | People Analytics Leader",
    description:
      "People Analytics leader specializing in workforce data strategy and executive reporting.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${fraunces.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
