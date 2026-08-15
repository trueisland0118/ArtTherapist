import Link from "next/link";
import { navLinks, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-auto bg-beige/60">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span
              aria-hidden
              className="inline-block h-9 w-9 rounded-full bg-pastel-grad shadow-soft"
            />
            <p className="font-maru text-lg font-bold text-textbrown">
              {site.brand}
            </p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-textbrown-muted">
            {site.subCopy}
          </p>
          <p className="mt-3 text-sm text-textbrown-muted">
            セラピスト：{site.therapist}
          </p>
        </div>

        <nav aria-label="フッターナビゲーション">
          <p className="font-maru text-sm font-bold text-textbrown-muted">
            メニュー
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-textbrown hover:text-pink-deep"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-maru text-sm font-bold text-textbrown-muted">
            外部リンク
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={site.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-textbrown hover:text-mint-deep"
              >
                <span
                  aria-hidden
                  className="inline-block h-2.5 w-2.5 rounded-full bg-mint"
                />
                公式LINE
              </a>
            </li>
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-textbrown hover:text-lavender-deep"
              >
                <span
                  aria-hidden
                  className="inline-block h-2.5 w-2.5 rounded-full bg-lavender"
                />
                Instagram
              </a>
            </li>
            <li className="pt-1 text-textbrown-muted">
              お問い合わせ：{site.email}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-textbrown-muted/15">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-4 text-xs text-textbrown-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.brand}. All rights reserved.
          </p>
          <p>Next.js × Vercel で制作されたデモサイトです</p>
        </div>
      </div>
    </footer>
  );
}
