import type { Metadata } from "next";
import { Noto_Sans_JP, Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/data";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto",
  display: "swap",
});

const maru = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-maru",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.brand} | ${site.subCopy}`,
    template: `%s | ${site.brand}`,
  },
  description:
    "高齢者施設向けアートセラピー。言葉にできないモヤモヤを、色と形でときほぐす。新百合ヶ丘駅徒歩3分のプライベートルームおよび出張セッション。",
  keywords: [
    "アートセラピー",
    "高齢者",
    "認知症ケア",
    "レクリエーション",
    "新百合ヶ丘",
    site.brand,
  ],
  openGraph: {
    title: `${site.brand} | ${site.subCopy}`,
    description: site.catchcopy,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${noto.variable} ${maru.variable}`}>
      <body className="min-h-screen bg-cream-grad font-sans text-textbrown">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
