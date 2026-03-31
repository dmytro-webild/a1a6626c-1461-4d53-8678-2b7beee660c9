import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'Courtyard Upper East Side | Modern NYC Luxury Hotel',
  description: 'Experience modern Manhattan luxury at Courtyard by Marriott UES. Stylish rooms, steps from Central Park and 11 minutes to the subway. Book your stay today.',
  openGraph: {
    "title": "Courtyard Upper East Side | Modern NYC Luxury Hotel",
    "description": "Experience modern Manhattan luxury at Courtyard by Marriott UES.",
    "siteName": "Courtyard by Marriott UES"
  },
};

const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
