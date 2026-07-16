# ois-T-I-08 Official Site

個人開発者 `ois-T-I-08` の公式サイトです。GitHub Pages の Project Pages として、次のURLで公開する構成です。

`https://ois-t-i-08.github.io/.github.io/`

## 技術構成

- 静的HTML
- CSS（デザイントークン、レスポンシブ、ダークモード）
- Vanilla JavaScript（モバイルナビゲーションのみ）
- 外部ランタイム・外部フォント・Cookie・アクセス解析なし

ビルド処理は不要です。GitHub Pagesではリポジトリのルートを公開対象にします。

## ページ構成

- `index.html` — ホーム
- `apps.html` — アプリ・プロジェクト一覧
- `genshin-builder.html` — Genshin Builder紹介
- `about.html` — 開発者紹介
- `support.html` — FAQ・問い合わせ
- `news.html` — お知らせ・更新履歴
- `privacy.html` — プライバシーポリシー
- `terms.html` — 利用規約
- `404.html` — GitHub Pages用404ページ

## 更新情報の管理

サイト名、公開URL、GitHub、連絡先、プロジェクト概要は `site-config.json` にまとめています。HTMLのSEO情報や利用者向け本文を更新する際は、同ファイルとの整合性も確認してください。

現在の公開連絡先は `ois.t.i.08@gmail.com` です。アプリのストアURLは正式公開後に追加してください。

## ローカル確認

リポジトリの親フォルダで静的サーバーを起動し、Project Pagesと同じサブパスで確認します。

```powershell
python -m http.server 8000
```

`http://localhost:8000/.github.io/`

## 公開前チェック

- `site-config.json` と各ページの表示内容が一致している
- `sitemap.xml` とcanonical URLが公開URLに一致している
- ストア公開前はダウンロードリンクを表示しない
- プライバシーポリシーとGoogle Playのデータ セーフティ申告が一致している
- アプリの仕様変更時は利用規約・サポート・更新履歴も確認する
