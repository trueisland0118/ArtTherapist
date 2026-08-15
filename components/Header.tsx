"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, site } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-maru text-lg font-bold text-textbrown"
        >
          <span
            aria-hidden
            className="inline-block h-9 w-9 rounded-full bg-pastel-grad shadow-soft"
          />
          <span className="hidden sm:inline">{site.brand}</span>
          <span className="sm:hidden">ココロのべよお</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 font-maru text-sm font-bold text-textbrown transition hover:bg-pink-soft hover:text-pink-deep"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary ml-2 px-5 py-2 text-sm">
            お申し込み
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-textbrown hover:bg-pink-soft lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="メニューを開閉"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-pink-soft bg-cream/95 lg:hidden"
        >
          <div className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl2 px-4 py-3 font-maru font-bold text-textbrown hover:bg-pink-soft hover:text-pink-deep"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              お申し込み
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
