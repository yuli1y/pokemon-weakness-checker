# ポケモン弱点チェッカー

ポケモン名、英語名、または図鑑番号を入力すると、そのポケモンのタイプと弱点を表示する静的Webアプリです。

## 使っているもの

- HTML
- CSS
- JavaScript
- PokéAPI
- GitHub Pages

## ローカルで確認する

`index.html` をブラウザで開くと動きます。

## GitHub Pagesで公開する

1. GitHubで新しいリポジトリを作ります。
2. このフォルダのファイルをアップロードします。
3. リポジトリの `Settings` から `Pages` を開きます。
4. `Deploy from a branch` を選び、`main` ブランチの `/root` を指定します。
5. 表示されたURLを開きます。

## PWA対応

このアプリはPWA対応済みです。

- ホーム画面に追加すると、アプリのように開けます。
- アプリ画面はオフラインでも開けます。
- ポケモン検索はPokéAPIへ通信するため、インターネット接続が必要です。

GitHub Pagesへ反映するときは、次のファイルも忘れずにアップロードしてください。

- `manifest.json`
- `service-worker.js`
- `icons/icon-192.svg`
- `icons/icon-512.svg`
