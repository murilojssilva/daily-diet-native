import { useLayoutEffect, useState } from "react";
import { DietCard } from "../DietCard";
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

  useLayoutEffect(() => {
    async function fetchFoods() {
      try {
        const data = await foodsGetAll();
        setFoods(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFoods();
  }, [foods]);

  return (
    <GeneralStatisticsContainer>
      <GeneralStatisticsTitle>Estatísticas gerais</GeneralStatisticsTitle>
      <StatisticsCard
        percent={"10"}
        text="melhor sequência de pratos dentro da dieta"
        level="regular"
      />
      <StatisticsCard
        percent={String(foods.length)}
        text="refeições registradas"
        level="regular"
      />
      <GeneralStatisticsCardContent>
        <StatisticsCard
          percent={String(
            foods.filter((food) => food.type === "healthy").length
          )}
          text={`refeições dentro da${"\n"}dieta`}
          level="high"
        />
        <StatisticsCard
          percent={String(
            foods.filter((food) => food.type === "unhealthy").length
          )}
          text={`refeições fora da${"\n"}dieta`}
          level="low"
        />
      </GeneralStatisticsCardContent>
    </GeneralStatisticsContainer>
  );
}