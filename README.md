<div align="center">

# NEXUS Inc. — Web Renewal Proposal

**Engineering the future, today.**

架空のIT企業「NEXUS Inc.」のコーポレートサイト制作を題材にした、Web 制作企画書サイト。
ヒアリング想定からデザインコンセプト・スケジュール・概算見積もりまで、
11ページ構成の企画書をブラウザで閲覧できる形にまとめました。

<br />

![NEXUS Proposal Preview](./assets/images/preview-mockup.png)

<br />

[**📄 View Proposal**](https://hirotonozaki.github.io/nexus-corporate-proposal/) ・ [**🌐 Live Site**](https://hirotonozaki.github.io/nexus-corporate/) ・ [**📁 Repository**](https://github.com/hirotonozaki/nexus-corporate-proposal)

<br />

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white)
![Print Ready](https://img.shields.io/badge/Print_to_PDF-A4-a06bff?style=flat-square)
![Pages](https://img.shields.io/badge/Pages-11_sections-a06bff?style=flat-square)

</div>

<br />

## 📖 Overview ／ 概要

「Webサイト制作の依頼を受けたら、自分はどのように考えて提案するか」を整理してみたくて制作した企画書サイトです。架空の IT 企業 NEXUS Inc. のコーポレートサイト新規制作を題材に、ヒアリング → 戦略設計 → 提案 → 制作 → 公開という流れのうち、**戦略設計から提案まで**の部分をまとめています。

ここで提案している内容は、別リポジトリで [実装サイト](https://hirotonozaki.github.io/nexus-corporate/) として形にしました。「考えたことを実装まで運べるか」を、2つの作品をセットで見ていただく構成にしています。

| Item | Detail |
| :--- | :--- |
| **Project Type** | Web 制作企画書(ポートフォリオ) |
| **Sections** | 全11ページ構成 |
| **Format** | HTML / CSS(A4・PDF 出力対応) |
| **Role** | 企画 / 情報設計 / デザイン / 実装 |
| **Stack** | HTML5 / CSS3(フレームワーク不使用) |
| **Hosting** | GitHub Pages |

<br />

## 🌐 Live Site ／ サイトURL

https://hirotonozaki.github.io/nexus-corporate-proposal/

<br />

## 💻 GitHub ／ リポジトリ

https://github.com/hirotonozaki/nexus-corporate-proposal

<br />

## 🛠 Tech Stack ／ 使用技術

| 領域 | 技術 |
| :--- | :--- |
| **Markup** | HTML5(11セクションを `<section class="page">` で構造化) |
| **Styling** | CSS3 / CSS Variables(`@page` / `@media print` 対応) |
| **Typography** | Inter / Space Grotesk / Noto Sans JP(Google Fonts) |
| **Hosting** | GitHub Pages |

> 実装サイト([nexus-corporate](https://github.com/hirotonozaki/nexus-corporate))と同じデザイントークン(`--color-accent: #4f8cff` / `--color-accent-2: #a06bff`)を採用し、ビジュアルトーンを完全に統一しています。

<br />

## 💡 Concept ／ 制作意図

Web サイト制作の現場では、コーディングに入る前に「何を / なぜ / どう作るか」を整理し、クライアントと合意形成するフェーズがあると学びました。一方で、就活用のポートフォリオは制作物(実装)のみを提出することが多く、その**手前にある考え方の部分**は伝わりにくいと感じていました。

そこで、

- 制作の前段にある考え方を、形にして残してみたい
- 「実装ができる」だけでなく、「設計から考えてみた」ことも伝えたい
- 企画書と実装を2つセットで見ていただくことで、制作の流れを示したい

という意図で、この企画書サイトを制作しました。

### Process Flow ／ 制作フロー

```
[ ヒアリング ] → [ 戦略設計 ] → [ 提案 ] → [ 制作 ] → [ 公開 ]
                 ────────── 本企画書 ──────────
                                              ↓
                                    [ 実装サイトへ続く ]
```

<br />

## ✨ Highlights ／ 工夫した点

### 1. 企画書として読みやすい章立て
「概要 → 課題 → ターゲット → 構造 → デザイン → 技術 → スケジュール → 見積もり」という流れで章を組み立て、順に読み進められる構成を意識しました。

| # | Section | 内容 |
| :--- | :--- | :--- |
| 00 | Cover | 表紙(クライアント・プロジェクト・日付・担当者) |
| 01 | Project Overview | プロジェクト概要・スコープ・ゴール |
| 02 | Client Profile | 想定クライアントの企業プロフィール |
| 03 | Current Issues | 現状課題(ブランド / 導線 / 技術の3観点) |
| 04 | Target Design | ターゲット設定とカスタマージャーニー |
| 05 | Site Structure | サイトマップ・全7ページの役割定義 |
| 06 | Design Concept | トーン & マナー・カラー・タイポグラフィ |
| 07 | Tech Stack | 使用技術と選定理由・ファイル構成 |
| 08 | Schedule | 8週間の制作スケジュールとマイルストーン |
| 09 | Estimate | 概算見積もり・運用保守プラン |
| 10 | Published Site | 実装サイトのプレビュー・公開 URL・QR |
| 11 | Closing | 本提案のまとめ・担当者情報 |

### 2. Web 閲覧と PDF 配布の両立
ブラウザで開けば Web コンテンツとして、印刷すれば A4 の PDF として、ひとつの HTML で両方の用途に対応できるよう設計しました。

### 3. 実装サイトと完全に揃えたビジュアルトーン
カラー・タイポグラフィ・トーンを実装サイトと揃え、2つの作品で同じ世界観になるようにしました。表紙には実装サイトのモックアップ画像を背景レイヤーとして低不透明度で配置し、「**実装まで存在する企画書**」であることを冒頭で視覚的に示しています。

### 4. ヒアリング想定の解像度
「ご相談のきっかけ」「クライアントのフェーズ」「ターゲットの行動」など、実際の制作現場で確認されそうな項目を想像しながら、できる限り具体的に書くことを意識しました。

<br />

## 📂 Directory ／ ディレクトリ構成

```
nexus-corporate-proposal/
├── index.html                 # 全11ページを単一 HTML で構成
├── README.md
├── css/
│   └── proposal.css           # デザイントークン + 印刷対応
└── assets/
    └── images/
        ├── preview-mockup.png # 実装サイトのプレビュー(表紙背景にも使用)
        └── qr-code.png        # 実装サイトへの QR(紫ネオン版)
```

<br />

## 🖼 Screenshot ／ スクリーンショット

<div align="center">

<img src="./assets/images/preview-mockup.png" alt="NEXUS Proposal Preview" width="100%" />

<sub>表紙に同モックアップを背景装飾として配置し、実装サイトとの一体感を演出</sub>

<br /><br />

<sub>**"企画書 ↔ 実装サイト"** をセットでご覧いただくことで、設計から実装までの一貫性を確認していただけます。</sub>

</div>

<br />

## 📱 Responsive ／ レスポンシブ対応

| Device | 推奨度 | 補足 |
| :--- | :---: | :--- |
| 💻 PC(横幅 1280px+) | ◎ | A4 設計の意図通りに表示されます |
| 📱 タブレット | ◯ | 横向きで快適に閲覧可能 |
| 📱 スマートフォン | △ | ピンチイン推奨。PDF 化後の閲覧も可 |

### 📲 Mobile Preview ／ スマホで確認

<div align="center">

<img src="./assets/images/qr-code.png" alt="NEXUS QR Code" width="220" />

<sub>QR コードを読み取ると、実装サイトをスマートフォン実機でご確認いただけます。<br />
👉 <a href="https://hirotonozaki.github.io/nexus-corporate/">https://hirotonozaki.github.io/nexus-corporate/</a></sub>

</div>

<br />

## 📄 PDF Output ／ PDF出力方法

本サイトは、**ブラウザの「印刷 → PDFに保存」でそのまま A4 の PDF になる**ように設計しました。配布用の PDF を別途用意しなくても、提案資料として共有できる形にしています。

### 印刷対応で工夫した点

- **`@page` ルール** — A4 サイズ・余白を指定
- **`page-break-after: always`** — セクションごとに改ページ
- **`page-break-inside: avoid`** — 表やカードがページをまたがないよう調整
- **`@media print`** — 画面表示用の装飾(背景グロウ・mix-blend-mode 等)を印刷時に最適化
- **`print-color-adjust: exact`** — 背景色・アクセントカラーを印刷でも再現
- **表紙のグラデーション文字フォールバック** — `background-clip: text` が効かない環境用に単色フォールバックを用意

### PDF化の手順

```
1. https://hirotonozaki.github.io/nexus-corporate-proposal/ を開く
2. ブラウザの印刷ダイアログを起動(Ctrl/Cmd + P)
3. 送信先を「PDFに保存」に設定
4. 用紙サイズ A4 / 余白なし / 背景グラフィックON で保存
```

<br />

## 🔗 Related ／ 関連リポジトリ

| Repository | Description |
| :--- | :--- |
| 📄 **nexus-corporate-proposal**(本リポジトリ) | NEXUS Inc. コーポレートサイト制作 企画書 |
| 🌐 [**nexus-corporate**](https://github.com/hirotonozaki/nexus-corporate) | 企画書をもとに実装したコーポレートサイト本体 |

<br />

## 👤 Author ／ 制作者情報

<div align="center">

### **Hiroto Nozaki**

Web Production / Front-end

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/hirotonozaki)
[![Portfolio](https://img.shields.io/badge/Portfolio-a06bff?style=for-the-badge&logo=googlechrome&logoColor=white)](https://hirotonozaki.github.io/hiroto-nozaki-portfolio/)

</div>

<br />

<div align="center">

> 本企画書はポートフォリオ用に制作した架空企業のデモであり、実在する組織・事業とは関係ありません。
> 記載の課題・スケジュール・見積もり金額はすべてダミーコンテンツです。

<sub>© 2026 Hiroto Nozaki</sub>

</div>
