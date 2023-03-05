import { useEffect, useLayoutEffect, useState } from "react";
import { StatisticsCard } from "../StatisticsCard";
import {
  GeneralStatisticsCardContent,
  GeneralStatisticsContainer,
  GeneralStatisticsTitle,
} from "./styles";
import { foodsGetAll } from "../../storage/food/foodsGetAll";
import { FoodStorageDTO } from "../../storage/food/foodStorageDTO";

export function GeneralStatistics() {
  const [foods, setFoods] = useState<FoodStorageDTO[]>([]);

  const [bestSequenceInDiet, setBestSequenceInDiet] = useState(0);

  async function fetchFoods() {
    try {
      const data = await foodsGetAll();
      setFoods(data);

      let bestSequence = 0,
        currentSequence = 0;

      foods.map((food) => {
        if (food.type === "healthy") {
          currentSequence++;
        } else {
          if (currentSequence > bestSequence) {
            bestSequence = currentSequence;
          }
          currentSequence = 0;
        }
      });

      if (currentSequence > bestSequence) {
        bestSequence = currentSequence;
      }

      setBestSequenceInDiet(bestSequence);
    } catch (error) {
      return console.log(error);
    }
  }

  useLayoutEffect(() => {
    fetchFoods();
  }, [foods]);

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
          percent={foods.filter((food) => food.type === "healthy").length}
          text={`refeições dentro da${"\n"}dieta`}
          level="high"
        />
        <StatisticsCard
          percent={foods.filter((food) => food.type === "unhealthy").length}
          text={`refeições fora da${"\n"}dieta`}
          level="low"
        />
      </GeneralStatisticsCardContent>
    </GeneralStatisticsContainer>
  );
}
