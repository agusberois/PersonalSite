import "./globals.css";

export const metadata = {
  title: "Agus Berois | FullStack Developer",
  description:
    "Desarrollador Fullstack especializado en React, Node.js y Next.js. Creo soluciones web modernas, escalables y enfocadas en la experiencia del usuario.",
  keywords: [
    "Agus Berois",
    "Agustin Berois",
    "Desarrollador Fullstack",
    "Fullstack Developer",
    "React",
    "Node.js",
    "Next.js",
    "JavaScript",
    "Montevideo",
  ],
  authors: [{ name: "Agustin Berois", url: "https://agusberois.dev" }],
  openGraph: {
    title: "Agus Berois | Fullstack Developer",
    description:
      "Desarrollador Fullstack especializado en React, Node.js y Next.js.",
    url: "https://agusberois.dev",
    siteName: "Agus Berois Dev",
    images: [
      {
        url: "/profile.jpg", // 👉 agregá una imagen en public/
        width: 1200,
        height: 630,
        alt: "Agus Berois Fullstack Developer Portfolio",
      },
    ],
    locale: "es_UY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agus Berois | Fullstack Developer",
    description:
      "Desarrollador Fullstack especializado en React, Node.js y Next.js.",
    images: ["/preview.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#0A192F] text-[#CCD6F6] antialiased">
        {children}
      </body>
    </html>
  );
}