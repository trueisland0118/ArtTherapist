import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { accentMap, menus } from "@/lib/data";

export const metadata = {
  title: "メニュー・料金",
  description:
    "個人プライベートセッションと高齢者施設向けグループワークショップの2つのメニュー。料金・時間・定員をご確認ください。",
};

export default function MenuPage() {
  return (
    <>
      <section className="bg-mint-soft/50">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            eyebrow="サービス内容"
            title="メニュー・料金"
            description="ご本人の状況や施設の目的に合わせて、2つのスタイルをご用意しています。"
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          {menus.map((m) => {
            const accent = accentMap[m.accent];
            return (
              <article
                key={m.id}
                className="relative flex h-full flex-col overflow-hidden rounded-xl2 bg-white p-7 shadow-card ring-1 ring-black/5"
              >
                <span
                  aria-hidden
                  className={`absolute inset-x-0 top-0 h-2 ${accent.bar}`}
                />
                <span className={`chip w-fit ${accent.chip}`}>{m.label}</span>
                <h2 className="mt-4 font-maru text-xl font-bold leading-snug text-textbrown sm:text-2xl">
                  {m.name}
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-textbrown-muted">
                  {m.overview}
                </p>

                <dl className="mt-6 space-y-3 text-sm">
                  <div className="flex flex-col gap-1 border-t border-black/5 pt-3">
                    <dt className="font-maru font-bold text-textbrown">時間</dt>
                    <dd className="text-textbrown-muted">{m.duration}</dd>
                  </div>
                  <div className="flex flex-col gap-1 border-t border-black/5 pt-3">
                    <dt className="font-maru font-bold text-textbrown">料金</dt>
                    <dd className="text-textbrown">{m.price}</dd>
                    {m.priceNote && (
                      <dd className="text-xs text-textbrown-muted">
                        {m.priceNote}
                      </dd>
                    )}
                  </div>
                  {m.capacity && (
                    <div className="flex flex-col gap-1 border-t border-black/5 pt-3">
                      <dt className="font-maru font-bold text-textbrown">定員</dt>
                      <dd className="text-textbrown-muted">{m.capacity}</dd>
                    </div>
                  )}
                  <div className="flex flex-col gap-1 border-t border-black/5 pt-3">
                    <dt className="font-maru font-bold text-textbrown">
                      提供方法
                    </dt>
                    <dd className="text-textbrown-muted">{m.method}</dd>
                  </div>
                </dl>

                <div className="mt-7 mt-auto pt-7">
                  <Link
                    href="/contact"
                    className="btn-primary w-full"
                  >
                    このメニューで問い合わせる
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="container-page mt-10">
          <p className="rounded-xl2 bg-pink-soft/60 p-4 text-center text-sm text-textbrown">
            ※出張地域や日程調整については、お問い合わせフォームよりご相談ください。
          </p>
        </div>
      </section>
    </>
  );
}
