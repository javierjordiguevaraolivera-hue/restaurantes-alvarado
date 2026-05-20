import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://restaurantesalvadorenolafamilia.com"),
  title: "Restaurantes Alvarado | Cocina peruana en Orlando",
  description:
    "Restaurantes Alvarado en 676 FLAGLER DR ORLANDO, FL 32809. Menu peruano con ceviche, aji de gallina, causa limena, rocoto relleno y lomo saltado.",
  applicationName: "Restaurantes Alvarado",
  keywords: [
    "Restaurantes Alvarado",
    "restaurantesalvadorenolafamilia.com",
    "restaurante peruano Orlando",
    "676 FLAGLER DR ORLANDO FL 32809",
    "ceviche peruano",
    "aji de gallina",
    "causa limena",
    "rocoto relleno",
    "lomo saltado",
    "info@restaurantesalvadorenolafamilia.com",
    "+1 786 265 9640",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Restaurantes Alvarado",
    description:
      "Cocina peruana en Orlando. Direccion: 676 FLAGLER DR ORLANDO, FL 32809. Telefono: +1 786 265 9640. Email: info@restaurantesalvadorenolafamilia.com.",
    url: "https://restaurantesalvadorenolafamilia.com",
    siteName: "Restaurantes Alvarado",
    locale: "es_US",
    type: "website",
    images: [
      {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ceviche%20peruano%20es%20inscrita%20en%20la%20Lista%20Representativa%20de%20Patrimonio%20Cultural%20Inmaterial%20de%20la%20Humanidad%20-%2053382087570.jpg",
        width: 1200,
        height: 800,
        alt: "Ceviche peruano de Restaurantes Alvarado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurantes Alvarado",
    description:
      "Menu peruano, contacto y direccion oficial en Orlando: 676 FLAGLER DR ORLANDO, FL 32809.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "business:contact_data:street_address": "676 FLAGLER DR",
    "business:contact_data:locality": "ORLANDO",
    "business:contact_data:region": "FL",
    "business:contact_data:postal_code": "32809",
    "business:contact_data:country_name": "United States",
    "business:contact_data:email": "info@restaurantesalvadorenolafamilia.com",
    "business:contact_data:phone_number": "+1 786 265 9640",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
