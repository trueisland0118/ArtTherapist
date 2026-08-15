"use client";

import Link from "next/link";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { formFields, site } from "@/lib/data";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ダミー実装：実際の送信は行わず、完了画面を表示
    setSubmitted(true);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="bg-lavender-soft/50">
        <div className="container-page py-16 sm:py-20">
          <SectionHeading
            eyebrow="お申し込み"
            title="お問い合わせ・お申し込み"
            description="お問い合わせ・ご相談はこちらのフォームよりお願いいたします。通常2営業日以内にご返信いたします。"
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Form / Complete */}
          <div className="card">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <span
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-mint-soft text-3xl"
                  aria-hidden
                >
                  ✓
                </span>
                <h2 className="font-maru text-2xl font-bold text-textbrown">
                  送信ありがとうございました
                </h2>
                <p className="max-w-md text-sm leading-relaxed text-textbrown-muted">
                  お問い合わせを受け付けました（デモのため実際には送信されていません）。
                  <br />
                  通常2営業日以内にご入力いただいたメールアドレスへご返信いたします。
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({});
                  }}
                  className="btn-secondary mt-2"
                >
                  別の内容を送信する
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-maru text-xl font-bold text-textbrown">
                  入力フォーム
                </h2>
                <p className="mt-1 text-sm text-textbrown-muted">
                  <span className="text-pink-deep">*</span> は必須項目です。
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-6 grid gap-5 sm:grid-cols-2"
                >
                  {formFields.map((field) => {
                    const isFull =
                      field.type === "textarea" || field.type === "select";
                    return (
                      <div
                        key={field.name}
                        className={isFull ? "sm:col-span-2" : ""}
                      >
                        <label
                          htmlFor={field.name}
                          className="field-label"
                        >
                          {field.label}
                          {field.required && (
                            <span className="ml-1 text-pink-deep">*</span>
                          )}
                        </label>

                        {field.type === "textarea" ? (
                          <textarea
                            id={field.name}
                            name={field.name}
                            rows={4}
                            required={field.required}
                            value={form[field.name] ?? ""}
                            onChange={(e) =>
                              setForm((p) => ({
                                ...p,
                                [field.name]: e.target.value,
                              }))
                            }
                            placeholder="ご自由にお書きください"
                            className="field-input"
                          />
                        ) : field.type === "select" ? (
                          <select
                            id={field.name}
                            name={field.name}
                            required={field.required}
                            value={form[field.name] ?? ""}
                            onChange={(e) =>
                              setForm((p) => ({
                                ...p,
                                [field.name]: e.target.value,
                              }))
                            }
                            className="field-input"
                          >
                            <option value="">選択してください</option>
                            {field.options?.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            id={field.name}
                            name={field.name}
                            type={field.type}
                            required={field.required}
                            value={form[field.name] ?? ""}
                            onChange={(e) =>
                              setForm((p) => ({
                                ...p,
                                [field.name]: e.target.value,
                              }))
                            }
                            className="field-input"
                          />
                        )}
                      </div>
                    );
                  })}

                  <div className="sm:col-span-2">
                    <button type="submit" className="btn-primary w-full">
                      送信する
                    </button>
                    <p className="mt-3 text-center text-xs text-textbrown-muted">
                      送信後、入力内容が完了画面に切り替わります（デモ）。
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>

          {/* サイドバー：外部リンク */}
          <aside className="space-y-5">
            <div className="card">
              <h3 className="font-maru font-bold text-textbrown">外部連携</h3>
              <p className="mt-2 text-sm text-textbrown-muted">
                お気軽にご利用ください。
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={site.lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl2 bg-mint-soft/60 px-4 py-3 font-maru font-bold text-mint-deep transition hover:bg-mint-soft"
                  >
                    <span>公式LINEで問い合わせる</span>
                    <span aria-hidden>→</span>
                  </a>
                </li>
                <li>
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl2 bg-lavender-soft/60 px-4 py-3 font-maru font-bold text-lavender-deep transition hover:bg-lavender-soft"
                  >
                    <span>Instagramを見る</span>
                    <span aria-hidden>→</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="card bg-pink-soft/40">
              <h3 className="font-maru font-bold text-textbrown">
                ご相談・お見積もり
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-textbrown-muted">
                施設向け出張セッションや定期契約、ご家族からのご依頼など、
                まずはフォームよりお気軽にご相談ください。
              </p>
              <Link
                href="/menu"
                className="mt-4 inline-block text-sm font-bold text-pink-deep hover:underline"
              >
                メニュー・料金を確認する →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
