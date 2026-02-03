export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.vodoinstalatermvm.rs/#business",
    name: "Vodoinstalater MVM Beograd",
    image: "https://www.vodoinstalatermvm.rs/hero.jpg",
    url: "https://www.vodoinstalatermvm.rs",
    telephone: ["+381601330764", "+381606936977"],
    email: "vodoinstalatermvm011@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beograd",
      addressCountry: "RS",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "44.8186",
      longitude: "20.4564",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    description:
      "Profesionalne vodoinstalaterske usluge u Beogradu. Hitne intervencije 0-24, mašinsko odgušenje kanalizacije, adaptacija kupatila, servis bojlera.",
    areaServed: {
      "@type": "City",
      name: "Beograd",
    },
    serviceType: [
      "Vodoinstalaterske usluge",
      "Hitne intervencije",
      "Odgušenje kanalizacije",
      "Adaptacija kupatila",
      "Servis bojlera",
      "Montaža sanitarija",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
