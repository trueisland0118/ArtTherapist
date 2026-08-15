# アトリエ・ココロのべよお — アートセラピーHP

高齢者施設向けアートセラピーのホームページ。
Next.js (App Router) + TypeScript + TailwindCSS で構築されたデモ実装です。

## 技術スタック

- **フレームワーク**：Next.js 15 (App Router)
- **言語**：TypeScript
- **スタイリング**：TailwindCSS v3
- **フォント**：Noto Sans JP / Zen Maru Gothic (next/font)
- **ホスティング前提**：Vercel

## セットアップ

```bash
npm install
npm run dev      # 開発サーバー http://localhost:3000
npm run build    # 本番ビルド
npm start        # 本番サーバー起動
```

## ページ構成

| パス | 内容 |
|------|------|
| `/` | ホーム（キャッチコピー・共感セクション・効果ティーザー・お知らせ） |
| `/about` | アートセラピーについて（想い・3つの効果・3ステップ） |
| `/menu` | メニュー・料金（個人セッション / グループワークショップ） |
| `/profile` | プロフィール（資格・私のストーリー） |
| `/voices` | お客様の声（事例2件） |
| `/contact` | お問い合わせ（フォーム・LINE/Instagram） |

> ブログ機能は要件定義シートに記載があるものの、本デモでは後回しとしてナビから外しています。

## コンテンツ編集

サイト全体の文言・メニュー・事例などのデータは `lib/data.ts` に集約しています。
画像は現状プレースホルダ表示です。実際の画像を追加する際は `public/` 配下に配置し、
該当コンポーネントの `role="img"` ブロックを `next/image` へ差し替えてください。

外部リンク（LINE / Instagram / メール）も `lib/data.ts` の `site` オブジェクトを編集してください。

## 今後の拡張候補

- **フォーム送信**：現在はダミー完了画面のみ。Formspree / Resend / Route Handler などで実装
- **ブログ/CMS**：microCMS / Notion API などと連携し `/blog` を追加
- **画像最適化**：`next/image` と Vercel の画像最適化を活用
- **OGP画像・構造化データ**：SEO 強化

## 要件元

`art_therapy_hp_template.md`（要件定義シート）に基づき実装。

---

© アトリエ・ココロのべよお
