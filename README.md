[README.md](https://github.com/user-attachments/files/28130676/README.md)
<div align="center">

# NEXUS Inc. — Corporate Site

**Engineering the future, today.**

架空のAI・Web開発企業「NEXUS Inc.」のコーポレートサイト。
デザイン設計からコーディング、デプロイまでを一人で制作したポートフォリオ作品です。

<br />

![NEXUS Inc. Preview](./assets/images/preview-mockup.png)

<br />

[**🌐 Live Site**](https://hirotonozaki.github.io/nexus-corporate/) ・ [**📄 Proposal**](https://hirotonozaki.github.io/nexus-corporate-proposal/) ・ [**📁 Repository**](https://github.com/hirotonozaki/nexus-corporate)

<br />

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Mobile_First-4f8cff?style=flat-square)

</div>

<br />

## 📖 Overview ／ 概要

AI開発・Web開発・DX コンサルティングを手がける架空のテクノロジー企業を想定し、ダークモードを基調としたコーポレートサイトを制作しました。BtoB 企業のサイトに必要な情報量・遷移設計・デザインのまとまりを意識しながら、デザイン・情報設計・コーディングまで一貫して取り組んでいます。

| Item | Detail |
| :--- | :--- |
| **Project Type** | コーポレートサイト（架空クライアント） |
| **Pages** | 7ページ（Home / Service / Works / Company / Recruit / Blog / Contact） |
| **Role** | 企画 / UI 設計 / デザイン / コーディング |
| **Period** | 約2週間 |
| **Stack** | HTML5 / CSS3 / Vanilla JavaScript |
| **Hosting** | GitHub Pages |

<br />

## 🌐 Live Site ／ サイトURL

https://hirotonozaki.github.io/nexus-corporate/

<br />

## 💻 GitHub ／ リポジトリ

https://github.com/hirotonozaki/nexus-corporate

<br />

## 🛠 Tech Stack ／ 使用技術

| 領域 | 技術 |
| :--- | :--- |
| **Markup** | HTML5（セマンティックタグ、SEO・アクセシビリティ配慮） |
| **Styling** | CSS3 / CSS Variables（`clamp()`、CSS Grid / Flexbox） |
| **Interaction** | Vanilla JavaScript（IntersectionObserver、`requestAnimationFrame`） |
| **Typography** | Space Grotesk / Inter / Noto Sans JP（Google Fonts） |
| **Hosting** | GitHub Pages |

> フレームワークを使えば早いことは理解した上で、今回は **「素の Web 技術でどこまで作れるか」を学ぶこと** を優先しました。

<br />

## 💡 Concept ／ 制作意図

> **「Engineering the future, today.」** — 落ち着いた未来感

ポートフォリオを制作するにあたり、「テンプレ感のあるLP」ではなく、**実在企業に近い情報量・遷移設計・デザインのトーン**を再現することを目標としました。採用担当の方に、

- どの程度の規模のサイトを設計できるか
- どこまで UI/UX を考えてコーディングできるか
- フレームワークに頼らず素の Web 技術を扱えるか

を伝えられる成果物を目指しています。

| 領域 | 方針 |
| :--- | :--- |
| **Tone** | Dark / Premium / Tech |
| **Color** | Blue `#4f8cff` × Purple `#a06bff`（グラデーション） |
| **Background** | `#0a0a0a` ベースのダークモード |
| **Typography** | Space Grotesk × Inter × Noto Sans JP |
| **Motion** | 過度な動きは抑え、スクロール連動のフェードのみ採用 |

派手なアニメーションで魅せるのではなく、**情報の読みやすさ**と**落ち着いたトーン**を優先しました。BtoB 企業のコーポレートサイトという想定を踏まえ、信頼感が伝わる配色・余白設計を心がけています。

<br />

## ✨ Highlights ／ 工夫した点

### 1. デザイントークンによるスタイル統一
CSS カスタムプロパティで `--color-*` `--font-*` `--radius-*` `--transition` などを一元管理。全7ページで色・余白・モーションのトーンが揃うように設計しました。

### 2. BEM 命名 + 3層構造の CSS 設計
`reset.css` → `style.css`（共通・トップ専用） → `pages.css`（下層共通）の読み込み順を整理し、クラス命名は BEM (`block__element--modifier`) に統一。保守性と可読性を意識しています。

### 3. Vanilla JS によるインタラクション
ライブラリに依存せず、`IntersectionObserver` によるスクロールフェードイン、`requestAnimationFrame` を使ったカウントアップ、ヘッダースクロール連動、ハンバーガー / ドロワーまでを素の JavaScript で実装しました。

### 4. アクセシビリティへの配慮
`aria-label` / `aria-expanded` / `aria-hidden` を適切に付与。`:focus-visible` でキーボード操作時のみフォーカスリングを表示し、`prefers-reduced-motion` にも対応しています。

### 5. JP × EN のタイポグラフィ
英語見出しに `Space Grotesk` / `Inter`、日本語本文に `Noto Sans JP` を組み合わせ、コーポレートサイトに馴染むトーンを目指しました。

<br />

## 📂 Directory ／ ディレクトリ構成

```
nexus-corporate/
├── index.html                 # トップページ
├── README.md
├── css/
│   ├── reset.css              # モダン CSS リセット
│   ├── style.css              # デザイントークン + 共通 + トップ
│   └── pages.css              # 下層ページ共通
├── js/
│   └── main.js                # スクロール連動 / ドロワー / IntersectionObserver
├── pages/
│   ├── service.html           # 事業領域
│   ├── works.html             # 制作実績
│   ├── company.html           # 会社情報
│   ├── recruit.html           # 採用情報
│   ├── blog.html              # お知らせ
│   └── contact.html           # お問い合わせ
└── assets/
    └── images/
        ├── preview-mockup.png # README ヒーロー画像
        └── qr-code.png        # スマホアクセス用 QR
```

<br />

## 🖼 Screenshot ／ スクリーンショット

![NEXUS Inc. Preview](./assets/images/preview-mockup.png)

<br />

## 📱 Responsive ／ レスポンシブ対応

モバイルファーストで設計し、以下のブレイクポイントで動作を確認しています。

| Device | Width | 主な変化 |
| :--- | :--- | :--- |
| 📱 Mobile | ~ 767px | ハンバーガー + ドロワー / 1カラム / フォントサイズ調整 |
| 📱 Tablet | 768 ~ 1023px | 2カラム / ナビ表示切替 |
| 💻 Desktop | 1024px ~ | フル表示 / グローバルナビ / 3カラムグリッド |

`clamp()` 関数で見出し・余白を可変にし、ブレイクポイント間でも自然に変化するよう調整しました。

<br />

## 📄 Proposal ／ 企画書

本サイトの戦略・情報設計・デザイン意図・スケジュール・概算見積もりまでをまとめた、全11ページ構成の企画書を公開しています。

🔗 https://hirotonozaki.github.io/nexus-corporate-proposal/

<br />

## 👤 Author ／ 制作者情報

<div align="center">

### **Hiroto Nozaki**

Web Production / Front-end

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/hirotonozaki)
[![Portfolio](https://img.shields.io/badge/Portfolio-4f8cff?style=for-the-badge&logo=googlechrome&logoColor=white)](https://hirotonozaki.github.io/hiroto-nozaki-portfolio/)

</div>

<br />

<div align="center">

> 本サイトはポートフォリオ用に制作した架空企業のデモであり、実在する組織・事業とは関係ありません。

<sub>© 2026 Hiroto Nozaki</sub>

</div>
