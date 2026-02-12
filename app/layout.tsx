import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StructuredData from "@/components/StructuredData";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vodoinstalatermvm.rs"),
  title: {
    default: "Vodoinstalater MVM Beograd | Hitne Intervencije 0-24",
    template: "%s | Vodoinstalater MVM Beograd",
  },
  description:
    "Vodoinstalater MVM Beograd - profesionalne vodoinstalaterske usluge u Beogradu. Hitne intervencije 0-24, DOLAZAK BESPLATAN, mašinsko odgušenje kanalizacije, adaptacija kupatila, servis bojlera. Pozovite 060/1330764 ili 060/693-6977",
  keywords: [
    "vodoinstalater",
    "beograd",
    "hitne intervencije",
    "odgušenje kanalizacije",
    "adaptacija kupatila",
    "servis bojlera",
    "montaža sanitarija",
    "zamena bojlera",
    "vodoinstalaterske usluge",
    "mvm",
    "0-24",
  ],
  authors: [{ name: "Vodoinstalater MVM" }],
  creator: "Vodoinstalater MVM",
  publisher: "Vodoinstalater MVM",
  formatDetection: {
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://www.vodoinstalatermvm.rs/",
    siteName: "Vodoinstalater MVM Beograd",
    title: "Vodoinstalater MVM Beograd | Hitne Intervencije 0-24",
    description:
      "Profesionalne vodoinstalaterske usluge u Beogradu. Hitne intervencije 0-24, DOLAZAK BESPLATAN, mašinsko odgušenje kanalizacije, adaptacija kupatila, servis bojlera.",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Vodoinstalater MVM Beograd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vodoinstalater MVM Beograd | Hitne Intervencije 0-24",
    description:
      "Profesionalne vodoinstalaterske usluge u Beogradu. Hitne intervencije 0-24, DOLAZAK BESPLATAN, pozovite 060/1330764 ili 060/693-6977",
    images: ["/hero.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google433d4468ee166612",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted-foreground bg-muted  text-base md:text-xl`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17931599606"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17931599606');
          `}
        </Script>
        <Script id="gtag-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-17931599606/pu0YCPWasfYbEPb9ueZC',
                'value': 1.0,
                'currency': 'RSD',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
