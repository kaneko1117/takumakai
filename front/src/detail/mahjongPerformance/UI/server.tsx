import { mahjongPerformanceUseCase } from "@/core/usecase/mahjongPerformance";
import { mahjongPerformanceRepository } from "../repository";
import { getPerformance } from "../controller/get/getPerformance";
import { DetailCard } from ".";

export const Performance = async () => {
  const repo = mahjongPerformanceRepository;
  const useCase = mahjongPerformanceUseCase(repo);
  const { performanceData } = await getPerformance(useCase);
  return performanceData.map((data) => (
    <DetailCard key={data.type} data={data} useCase={useCase} />
  ));
};
