import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { concept, site, worries } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-pastel-grad">
        <div className="absolute inset-0 wave-divider opacity-70" aria-hidden />
        <div className="container-page relative grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <span className="chip bg-white/70 text-pink-deep">
              アートセラピー × 高齢者ケア
            </span>
            <h1 className="mt-5 font-maru text-3xl font-bold leading-tight text-textbrown sm:text-4xl lg:text-5xl">
              {site.catchcopy}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-textbrown sm:text-lg">
              {site.subCopy}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                お問い合わせ・お申し込み
              </Link>
              <Link href="/about" className="btn-secondary">
                アートセラピーについて
              </Link>
            </div>
          </div>

          {/* メインビジュアル（プレースホルダ） */}
          <div className="relative">
            <div
              className="aspect-[4/3] w-full rounded-xl2 bg-white/70 shadow-card ring-1 ring-white/60"
              role="img"
              aria-label={site.mainImageAlt}
            >
              <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
                <span className="text-5xl" aria-hidden>
                  🎨
                </span>
                <p className="font-maru text-sm font-bold text-textbrown-muted">
                  メインビジュアル
                  <br />
                  （優しい光が入るアトリエ・画材・セラピストの笑顔）
                </p>
                <p className="text-xs text-textbrown-muted/70">
                  ※実画像は後差替え
                </p>
              </div>
            </div>
            <div
              aria-hidden
              className="absolute -bottom-4 -right-3 h-20 w-20 rounded-full bg-mint-deep/30 blur-2xl"
            />
          </div>
        </div>
      </section>

      {/* 共感セクション */}
      <section className="section-padding">
        <div className="container-page">
          <SectionHeading
            eyebrow="共感"
            title="こんなお悩みありませんか？"
            description="言葉にできない想いを抱えている方へ。アートセラピーは、色と形で丁寧に寄り添います。"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {worries.map((w, i) => (
              <div
                key={w}
                className="card flex flex-col gap-3"
              >
                <span className="chip bg-lavender-soft text-lavender-deep w-fit">
                  悩み {i + 1}
                </span>
                <p className="font-maru font-bold text-textbrown">{w}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/about" className="btn-secondary">
              アートセラピーができることを見る
            </Link>
          </div>
        </div>
      </section>

      {/* 3つの効果（ティーザー） */}
      <section className="section-padding bg-beige/50">
        <div className="container-page">
          <SectionHeading
            eyebrow="アートセラピーの効果"
            title="心と脳に、みずみずしい刺激を"
            description={concept.philosophy}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {concept.effects.map((eff, i) => (
              <div key={eff.title} className="card flex flex-col gap-3">
                <span className="chip bg-mint-soft text-mint-deep w-fit">
                  効果 {i + 1}
                </span>
                <h3 className="font-maru font-bold text-textbrown">
                  {eff.title}
                </h3>
                <p className="text-sm leading-relaxed text-textbrown-muted line-clamp-4">
                  {eff.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/about" className="btn-secondary">
              詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* お知らせ */}
      <section className="section-padding">
        <div className="container-page">
          <div className="card flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="chip bg-pink-soft text-pink-deep">お知らせ</span>
              <p className="mt-3 font-maru font-bold text-textbrown">
                {site.news}
              </p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">
              この場所について問い合わせる
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
