import { mahjongPerformanceUseCase } from "@/core/usecase/mahjongPerformance";
import { mahjongPerformanceRepository } from "../repository";
import { getPerformance } from "../controller/get/getPerformance";
import { DetailCard } from ".";

export const Performance = async () => {
  const repo = mahjongPerformanceRepository;
  const useCase = mahjongPerformanceUseCase(repo);
  const { performanceData } = await getPerformance(useCase);
  return <DetailCard data={performanceData} useCase={useCase} />;
};
