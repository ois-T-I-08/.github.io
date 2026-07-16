# Genshin Builder Developer Site

個人開発者 `ois-T-I-08` が制作する非公式ファンメイドアプリ「Genshin Builder」の公開サイトです。GitHub Pages のルートディレクトリから、そのまま静的サイトとして公開できます。

## ローカルでの確認方法

ビルド処理や npm は不要です。以下のいずれかで確認してください。

```bash
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000/` を開きます。簡易確認のみであれば `index.html` を直接ブラウザで開くこともできます。

## GitHub Pagesでの公開手順

1. このリポジトリを GitHub に push します。
2. GitHub のリポジトリ設定を開きます。
3. **Settings > Pages** を開きます。
4. Source で公開したいブランチを選択し、フォルダは `/ (root)` を選択します。
5. 保存後、表示された GitHub Pages の URL にアクセスします。

## 更新する必要がある開発者情報

- 開発者名: `ois-T-I-08`
- アプリ名: `Genshin Builder`
- 問い合わせ先メールアドレス: `contact@example.com`
- 制定日・最終更新日: `privacy.html` と `terms.html` の日付
- GitHub Pages の実際の公開 URL

## 問い合わせ用メールアドレスの変更場所

`contact@example.com` を実際に公開できるメールアドレスへ変更してください。

- `index.html`
- `privacy.html`
- `support.html`
- `terms.html`

## プライバシーポリシーの要確認項目

Google Play Console のデータセーフティ申告と矛盾しないよう、アプリ実装を確認してから `privacy.html` の TODO コメントを更新してください。

- TODO: HoYoLAB 連携の有無
- TODO: 広告 SDK（例: Google AdMob）の有無、広告識別子の利用有無
- TODO: アクセス解析（例: Firebase Analytics）の有無
- TODO: クラッシュ解析（例: Firebase Crashlytics）の有無
- TODO: 外部 API への通信有無
- TODO: 端末内保存、クラウド保存、同期、バックアップの有無
- TODO: 外部サービスに送信される情報の種類
- TODO: データ削除依頼への対応方法

## Google Play Consoleに入力するURLの例

独自ドメインを使わない場合の例です。実際の GitHub アカウント名とリポジトリ設定に合わせて変更してください。

- ウェブサイト: `https://<github-user>.github.io/`
- プライバシーポリシー: `https://<github-user>.github.io/privacy.html`
- サポート: `https://<github-user>.github.io/support.html`
- 利用規約: `https://<github-user>.github.io/terms.html`
