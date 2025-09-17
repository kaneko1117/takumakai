import { RegisterMahjongResultServer } from "@/detail/registerMahjongResult/UI/server";

export default async function NewResultPage({
  params,
}: {
  params: Promise<{ game_id: string; hanshuang_id: string }>;
}) {
  const { game_id, hanshuang_id } = await params;

  return (
    <RegisterMahjongResultServer
      game_id={game_id}
      hanshuang_id={hanshuang_id}
    />
  );
}
