import { mahjongPerformanceUseCase } from "@/core/usecase/topMahjongPerformance";
import { topMahjongPerformanceRepository } from "@/detail/topMahjongPerformance/repository";
import { getTopPerformance } from "../get/getTopPerformance";
import { RankingCard } from ".";

export const TopPerformance = async () => {
  const repo = topMahjongPerformanceRepository;
  const useCase = mahjongPerformanceUseCase(repo);
  const { performanceData } = await getTopPerformance(useCase);
  return performanceData.map((data) => (
    <RankingCard key={data.type} data={data} useCase={useCase} />
  ));
};
