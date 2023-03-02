import { GeneralStatistics } from "../../components/GeneralStatistics";
import { StatisticsHeader } from "../../components/StatisticsHeader";
import { StatisticsContainer } from "./styles";

export function Statistics() {
  return (
    <StatisticsContainer>
      <StatisticsHeader percent="90" />
      <GeneralStatistics />
    </StatisticsContainer>
  );
}
