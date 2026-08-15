import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/lib/data";

export const metadata = {
  title: "プロフィール",
  description:
    "公認アートセラピスト・臨床心理士のベヨオがご紹介します。なぜこの活動をしているのか、私のストーリー。",
};

export default function ProfilePage() {
  return (
    <>
      <section className="bg-pink-soft/50">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            eyebrow="自己紹介"
            title="プロフィール"
            description="アートセラピスト ベヨオが、ご本人の心に寄り添う時間をお届けします。"
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page grid items-start gap-10 lg:grid-cols-[1fr_1.5fr]">
          {/* プロフィール画像（プレースホルダ） */}
          <div className="card sticky top-20 text-center">
            <div
              className="mx-auto aspect-square w-full max-w-xs rounded-xl2 bg-pastel-grad"
              role="img"
              aria-label={profile.photoAlt}
            >
              <div className="flex h-full flex-col items-center justify-center gap-2 p-6">
                <span className="text-5xl" aria-hidden>
                  🧑‍🎨
                </span>
                <p className="text-xs font-bold text-textbrown-muted">
                  セラピスト写真
                </p>
                <p className="text-[10px] text-textbrown-muted/70">
                  ※実画像は後差替え
                </p>
              </div>
            </div>
            <p className="mt-5 font-maru text-2xl font-bold text-textbrown">
              {profile.name}
            </p>
            <p className="mt-2 text-sm text-textbrown-muted">
              {profile.credentials}
            </p>
          </div>

          {/* ストーリー */}
          <div className="space-y-8">
            <div>
              <span className="chip bg-lavender-soft text-lavender-deep">
                私のストーリー
              </span>
              <h2 className="mt-4 font-maru text-2xl font-bold text-textbrown">
                なぜこの活動をしているのか
              </h2>
            </div>

            <div className="card">
              <div className="flex items-center gap-3">
                <span className="chip bg-pink-soft text-pink-deep">過去</span>
                <h3 className="font-maru font-bold text-textbrown">
                  きっかけ
                </h3>
              </div>
              <p className="mt-4 leading-relaxed text-textbrown">
                {profile.storyPast}
              </p>
            </div>

            <div className="relative">
              <div
                aria-hidden
                className="absolute left-1/2 -ml-px h-6 w-0.5 bg-pink-deep/30"
              />
            </div>

            <div className="card">
              <div className="flex items-center gap-3">
                <span className="chip bg-mint-soft text-mint-deep">現在</span>
                <h3 className="font-maru font-bold text-textbrown">
                  想い
                </h3>
              </div>
              <p className="mt-4 leading-relaxed text-textbrown">
                {profile.storyNow}
              </p>
            </div>

            <div className="rounded-xl2 bg-pastel-grad p-6 text-center shadow-soft">
              <p className="font-maru font-bold text-textbrown">
                一緒に、色と形で心をほどく時間を過ごしませんか？
              </p>
              <Link href="/contact" className="btn-primary mt-4">
                お問い合わせする
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
