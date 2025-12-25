# ErrorDict - エラー辞典

## プロジェクト概要

プログラミング学習中に遭遇したエラーと、その解決方法を整理・蓄積する個人学習用に作成したサイトです。
エラーの閲覧・登録・編集・削除を実装しています。
学習中に「同じエラーを何度も調べ直す」課題を解決することを目的としています。

## 使用技術

### Frontend

- Chakra UI
- React
- TypeScript
- Vite

### Backend

- Supabase(Database / Auth / RLS)
  ※Auth は Phase2

### Database

- PostgreSQL(Supabase 管理)

## 主な機能

- エラー一覧表示
- エラー詳細表示
- エラー新規登録
- エラー編集
- エラー削除
- キーワード検索

## 画面構成

- /errors : エラー一覧
- /errors/:id : エラー詳細
- /errors/new : エラー新規登録
- /errors/:id/edit : エラー編集
  ※ 認証機能は Phase2 で実装予定

## データベース設計

- errors テーブルを中心としたシンプルな構成
- MVP では 1 テーブル構成
- Phase2 で profiles テーブルを追加予定

## テスト

- Jest
- React Testing Library
- コンポーネント単位の簡易テスト

## CI/CD

- GitHub Actions によるビルド・テスト・自動デプロイ(Firebase Hosting)

## デモ

※ 準備中

## ローカル環境での起動

```bash
1. リポジトリをクローン
git clone https://github.com/masakiYLv1/errordict.git

2. 作業ディレクトへ移動
cd errordict

3. パッケージをインストール
npm install

4. プロジェクトを起動
npm run dev
```

## 今後の予定（Phase2）

- Supabase Auth を用いたユーザー認証の実装
- profile テーブルの追加
- ユーザーごとのエラーメッセージ管理
