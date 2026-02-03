import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktirajte Vodoinstalater MVM Beograd. Dostupni 24/7 za hitne intervencije. DOLAZAK BESPLATAN. Telefon: 060/1330764, 060/693-6977, Email: vodoinstalatermvm011@gmail.com. Pozovite nas ili pošaljite poruku!",
  keywords: [
    "vodoinstalater kontakt",
    "beograd vodoinstalater",
    "hitne intervencije beograd",
    "vodoinstalater telefon",
    "vodoinstalater 24/7",
  ],
  openGraph: {
    title: "Kontakt | Vodoinstalater MVM Beograd",
    description:
      "Kontaktirajte nas 24/7 za hitne intervencije. DOLAZAK BESPLATAN. Telefon: 060/1330764, 060/693-6977",
    url: "/kontakt",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Kontakt - Vodoinstalater MVM Beograd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt | Vodoinstalater MVM Beograd",
    description:
      "Kontaktirajte nas 24/7 za hitne intervencije. DOLAZAK BESPLATAN. Telefon: 060/1330764, 060/693-6977",
    images: ["/hero.jpg"],
  },
  alternates: {
    canonical: "/kontakt",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
