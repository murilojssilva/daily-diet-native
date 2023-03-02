import { DietCard } from "../DietCard";
import { StatisticsCard } from "../StatisticsCard";
import {
  GeneralStatisticsCardContent,
  GeneralStatisticsContainer,
  GeneralStatisticsTitle,
} from "./styles";

export function GeneralStatistics() {
  return (
    <GeneralStatisticsContainer>
      <GeneralStatisticsTitle>Estatísticas gerais</GeneralStatisticsTitle>
      <StatisticsCard
        percent="22"
        text="melhor sequência de pratos dentro da dieta"
        level="regular"
      />
      <StatisticsCard
        percent="109"
        text="refeições registradas"
        level="regular"
      />
      <GeneralStatisticsCardContent>
        <StatisticsCard
          percent="90"
          text={`refeições dentro da${"\n"}dieta`}
          level="high"
        />
        <StatisticsCard
          percent="90"
          text={`refeições fora da${"\n"}dieta`}
          level="low"
        />
      </GeneralStatisticsCardContent>
    </GeneralStatisticsContainer>
  );
}
