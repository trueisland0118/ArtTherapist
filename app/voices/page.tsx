import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { accentMap, voices } from "@/lib/data";

export const metadata = {
  title: "お客様の声",
  description:
    "アートセラピーを受講されたご家族・施設様からの事例紹介。セッション前後でどのような変化があったか、実際の声をもとにお伝えします。",
};

export default function VoicesPage() {
  return (
    <>
      <section className="bg-mint-soft/40">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            eyebrow="事例紹介"
            title="お客様の声"
            description="ご本人・ご家族・施設スタッフの皆さまから寄せられた、セッション前後の変化をご紹介します。"
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page space-y-8">
          {voices.map((v, i) => {
            const accent = accentMap[v.accent];
            return (
              <article
                key={v.id}
                className="relative overflow-hidden rounded-xl2 bg-white p-7 shadow-card ring-1 ring-black/5 sm:p-9"
              >
                <span
                  aria-hidden
                  className={`absolute left-0 top-0 h-full w-1.5 ${accent.bar}`}
                />
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`chip ${accent.chip}`}>事例 {i + 1}</span>
                  <span className="text-xs text-textbrown-muted">
                    {v.source}
                  </span>
                </div>

                <h2 className="mt-4 font-maru text-xl font-bold leading-snug text-textbrown sm:text-2xl">
                  {v.title}
                </h2>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl2 bg-beige/50 p-5">
                    <div className="flex items-center gap-2">
                      <span
                        aria-hidden
                        className="h-2 w-2 rounded-full bg-textbrown-muted/50"
                      />
                      <h3 className="font-maru font-bold text-textbrown">
                        受ける前のお悩み
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-textbrown-muted">
                      {v.before}
                    </p>
                  </div>
                  <div className="rounded-xl2 bg-pink-soft/40 p-5">
                    <div className="flex items-center gap-2">
                      <span
                        aria-hidden
                        className="h-2 w-2 rounded-full bg-pink"
                      />
                      <h3 className="font-maru font-bold text-pink-deep">
                        セッション後の変化
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-textbrown">
                      {v.after}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-textbrown-muted">
                  <span className="font-bold">作品写真の掲載可否：</span>
                  <span className="rounded-full bg-white px-3 py-1 ring-1 ring-black/5">
                    {v.photoNote}
                  </span>
                </div>

                <div className="mt-6 aspect-[16/7] w-full rounded-xl2 bg-pastel-grad">
                  <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
                    <span className="text-4xl" aria-hidden>
                      🖼️
                    </span>
                    <p className="text-xs font-bold text-textbrown-muted">
                      作品・セッション風景（プレースホルダ）
                    </p>
                    <p className="text-[10px] text-textbrown-muted/70">
                      ※実画像は後差替え
                    </p>
                  </div>
                </div>
              </article>
            );
          })}

          <div className="rounded-xl2 bg-pastel-grad p-7 text-center shadow-soft sm:p-9">
            <p className="font-maru text-lg font-bold text-textbrown">
              あなたのもとにも、サラサラとした光を。
            </p>
            <p className="mt-2 text-sm text-textbrown-muted">
              まずはお気軽にお問い合わせください。
            </p>
            <Link href="/contact" className="btn-primary mt-5">
              お問い合わせ・お申し込み
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
