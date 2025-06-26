"use client"; // エラーバウンダリはクライアントコンポーネントである必要があります

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // エラーをエラーレポートサービスにログ記録
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>{error.message}</h2>
      <button
        onClick={
          // セグメントの再レンダリングを試みて回復を試みる
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
