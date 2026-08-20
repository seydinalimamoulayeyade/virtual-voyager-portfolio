import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://virtual-voyager.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Virtual Voyager — Cloud & DevOps Engineer",
  description: "Portfolio de Seydina Limamou Laye Yade, Cloud & DevOps Engineer à Dakar : AWS, Terraform, CI/CD, Kubernetes et récits de terrain.",
  alternates: { canonical: "/" },
  authors: [{ name: "Seydina Limamou Laye Yade", url: "https://github.com/seydinalimamoulayeyade" }],
  creator: "Seydina Limamou Laye Yade",
  keywords: ["Cloud Engineer", "DevOps Engineer", "AWS", "Terraform", "Dakar", "Sénégal", "CI/CD"],
  openGraph: {
    type: "website",
    url: "/",
    title: "Virtual Voyager — Cloud & DevOps Engineer",
    description: "Des systèmes cloud fiables, racontés comme un voyage de la première ligne de code à la production.",
    siteName: "Virtual Voyager",
    locale: "fr_SN",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Virtual Voyager — Cloud & DevOps Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Voyager — Cloud & DevOps Engineer",
    description: "AWS, Infrastructure as Code, CI/CD et plateformes utiles depuis Dakar.",
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = { themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#14100D" }, { media: "(prefers-color-scheme: light)", color: "#F5EFE6" }], colorScheme: "dark light" };

const themeScript = `(function(){try{var t=localStorage.getItem('vv-theme');document.documentElement.dataset.theme=t||(matchMedia('(prefers-color-scheme:light)').matches?'light':'dark')}catch(e){document.documentElement.dataset.theme='dark'}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-theme="dark" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className={`${inter.variable} ${jetbrains.variable}`}>{children}</body>
    </html>
  );
}
