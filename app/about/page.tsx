import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { concept } from "@/lib/data";

export const metadata = {
  title: "アートセラピーについて",
  description:
    "アートセラピーがもたらす3つの効果（脳の活性化・孤独感の解消・生きがいの創出）と、セッションの流れ（3ステップ）をご紹介します。",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-lavender-soft/60">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            eyebrow="コンセプト"
            title="アートセラピーについて"
            description="色の刺激と自由な表現を通じて、今を楽しみ、心と脳に瑞々しい刺激を取り戻す時間です。"
          />
        </div>
      </section>

      {/* 想い */}
      <section className="section-padding">
        <div className="container-page">
          <div className="card mx-auto max-w-3xl text-center">
            <span className="chip bg-pink-soft text-pink-deep">
              私たちが大切にしている想い
            </span>
            <p className="mt-5 font-maru text-xl font-bold leading-relaxed text-textbrown sm:text-2xl">
              {concept.philosophy}
            </p>
          </div>
        </div>
      </section>

      {/* 3つの効果 */}
      <section className="section-padding bg-beige/50">
        <div className="container-page">
          <SectionHeading
            eyebrow="効果"
            title="アートセラピーの3つの効果"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {concept.effects.map((eff, i) => (
              <div key={eff.title} className="card flex h-full flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pastel-grad font-maru font-bold text-textbrown">
                    {i + 1}
                  </span>
                  <h3 className="font-maru font-bold leading-snug text-textbrown">
                    {eff.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-textbrown-muted">
                  {eff.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* セッションの流れ */}
      <section className="section-padding">
        <div className="container-page">
          <SectionHeading
            eyebrow="セッションの流れ"
            title="3つのステップで寄り添います"
            description="ご本人のペースを第一に、安心して創作を楽しめるように設計しています。"
          />
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {concept.steps.map((s) => (
              <li key={s.step} className="card flex h-full flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="chip bg-mint-soft text-mint-deep">
                    {s.step}
                  </span>
                  <span
                    aria-hidden
                    className="h-2 w-12 rounded-full bg-mint-deep/40"
                  />
                </div>
                <h3 className="font-maru font-bold text-textbrown">{s.title}</h3>
                <p className="text-sm leading-relaxed text-textbrown-muted">
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex justify-center">
            <Link href="/menu" className="btn-primary">
              メニュー・料金を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
