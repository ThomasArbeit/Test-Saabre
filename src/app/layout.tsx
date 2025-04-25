import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/styles/globals.scss';

const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Catalogue des Voitures Électrifiées : Voitures Électriques, Hybrides et Plug-in Hybrides",
  description: "Découvrez notre catalogue complet des véhicules électrifiés, incluant les voitures électriques, hybrides et hybrides rechargeables disponibles sur le marché. Parcourez les modèles de manière claire et structurée pour trouver le véhicule qui répond à vos besoins écologiques et technologiques.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
