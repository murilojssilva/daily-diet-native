import { useContext } from "react";
import { StatisticsCard } from "@components/StatisticsCard";
import {
  GeneralStatisticsCardContent,
  GeneralStatisticsContainer,
  GeneralStatisticsTitle,
} from "./styles";
import { FoodsContext } from "@contexts/FoodsContexts";

export function GeneralStatistics() {
  const { foods, bestSequenceInDiet } = useContext(FoodsContext);

  return (
    <GeneralStatisticsContainer>
      <GeneralStatisticsTitle>Estatísticas gerais</GeneralStatisticsTitle>
      <StatisticsCard
        percent={bestSequenceInDiet}
        text="melhor sequência de pratos dentro da dieta"
        level="regular"
      />
      <StatisticsCard
        percent={foods.length}
        text="refeições registradas"
        level="regular"
      />
      <GeneralStatisticsCardContent>
        <StatisticsCard
          percent={foods.filter((food) => food.data.type === "healthy").length}
          text={`refeições dentro da${"\n"}dieta`}
          level="high"
        />
        <StatisticsCard
          percent={
            foods.filter((food) => food.data.type === "unhealthy").length
          }
          text={`refeições fora da${"\n"}dieta`}
          level="low"
        />
      </GeneralStatisticsCardContent>
    </GeneralStatisticsContainer>
  );
}
