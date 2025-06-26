This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# クリーンアーキテクチャにおける各層の説明

## 各層の依存関係図

```mermaid
graph TD
  UI[UI層 (presentation)]
  Controller[Controller層 (hooks, UI logic)]
  Usecase[Usecase層 (ユースケース, ビジネスロジック, validation)]
  Core[Core層 (Entity, Model, ドメイン)]
  RepoInterface[Repository Interface (Usecase内で定義)]
  DetailRepo[Detail層 (Repository, インフラ実装)]

  UI --> Controller
  Controller --> Usecase
  Usecase --> RepoInterface
  RepoInterface <-- Repo
  Usecase --> Core
```

## 各層の説明

- **core/usecase**

  - アプリケーション固有のビジネスロジックやバリデーションを担当。
  - Repository のインターフェースを定義し、外部依存を排除。
  - 例: `core/usecase/login/login.ts`。

- **core/entity**

  - ドメインモデルやエンティティ、バリューオブジェクトなど純粋なビジネスルールを記述。
  - 例: `core/entity/users/model.ts`。

- **detail/controller**

  - UI 層と usecase 層の橋渡し。
  - hooks や UI ロジックを記述。
  - 例: `detail/login/controller/hooks/useLoginController.tsx`。

- **detail/repository**

  - usecase 層で定義された Repository インターフェースを実装。
  - API 通信や DB アクセスなどインフラ依存の処理を担当。
  - 例: `detail/login/repository/index.tsx`。

- **detail/UI**
  - 画面表示やユーザー入力の受け取りを担当。
  - UI コンポーネントやページを配置。
  - 例: `detail/login/UI/index.tsx`, `detail/login/UI/components/form.tsx`。

## ポイント

- 内側の層ほどビジネスロジックに集中し、外側の技術的な変更に影響されにくい設計です。
- 依存関係は必ず内側（Core）に向かい、外側（UI やインフラ）は内側の詳細を知らないようにします。
- これにより、UI やインフラの変更がビジネスロジックに波及しにくくなります。

##　目的

- 方針がサードパーティに依存しない設計を目指す
  - 近年の技術の移り変わりは激しい
- このアーキテクチャが１番生きる時は「UI/UX を変えずに使用するライブラリやフレームワークをリプレイス」。

## 素案

UI → controller(hooks) → usecase(機能ごとに validation,fetch と状態管理をまとめる) → repo_interface ← repo（useSWR とか）

## メモ

- いわゆるシステムの方針にあたる
- `model`,`usecase`
- TypeScript はあらゆるプログラミング言語の中で最も表現力が高い
- フロントエンドは状態管理がメイン。ただしこれはビジネスロジックに該当しない。ex.button を isDisable にするかどうかとか
  - 管理はライブラリやフレームワークに依存し、ロジックに関しては切り離すことができる？
