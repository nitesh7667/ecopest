import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rudrashieldpestmanagement.in"),
  title: {
    default: "Rudra Shield Eco Pest Management | Best Pest Control in Punjab & Amritsar",
    template: "%s | Rudra Shield Eco Pest Management Punjab",
  },
  description: "Rudra Shield Eco Pest Management offers professional, safe, and eco-friendly pest control services in Amritsar, Jalandhar, Ludhiana, and all over Punjab.",
  alternates: {
    canonical: "./",
  },
  keywords: [
    "ecopest",
    "eco pest control Punjab",
    "pest control Amritsar",
    "pest control services in Punjab",
    "best pest control in Jalandhar",
    "organic pest control Ludhiana",
    "termite treatment Punjab",
    "rodent control Amritsar",
    "eco friendly pest management Punjab",
    "bug control Punjab",
    "sanitization services Amritsar",
    "anti termite treatment Punjab",
    "professional pest control Punjab"
  ],
  openGraph: {
    title: "Rudra Shield Eco Pest Management | Best Pest Control in Punjab & Amritsar",
    description: "Safe, organic, and eco-friendly pest control services serving homes and businesses across Amritsar, Jalandhar, Ludhiana, and all over Punjab.",
    url: "https://rudrashieldpestmanagement.in",
    siteName: "Rudra Shield Eco Pest Management",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Rudra Shield Eco Pest Management Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudra Shield Eco Pest Management | Best Pest Control in Punjab & Amritsar",
    description: "Safe, organic, and eco-friendly pest control services serving homes and businesses across Punjab.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PestControlService",
    "name": "Rudra Shield Eco Pest Management",
    "image": "https://rudrashieldpestmanagement.in/logo.png",
    "@id": "https://rudrashieldpestmanagement.in/#pestcontrol",
    "url": "https://rudrashieldpestmanagement.in",
    "telephone": "+919798563175",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dasmesh Nagar, Gali No.12, Joura Phatak",
      "addressLocality": "Amritsar",
      "addressRegion": "Punjab",
      "postalCode": "143001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.6331523,
      "longitude": 74.8874788
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://maps.google.com/maps?q=31.6331523,74.8874788&z=17"
    ]
  };

  return (
    <html lang="en" className={`h-full scroll-smooth ${poppins.variable}`}>
      <body className="min-h-full flex bg-green-50 flex-col font-sans" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
