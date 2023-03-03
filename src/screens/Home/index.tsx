import { useLayoutEffect, useState } from "react";
import { DietCard } from "../../components/DietCard";
import { Header } from "../../components/Header";
import { HomeContainer } from "./styles";
import { NewFood } from "../../components/NewFood";
import { FoodList } from "../../components/FoodList";
import { foodsGetAll } from "../../storage/food/foodsGetAll";
import { FoodStorageDTO } from "../../storage/food/foodStorageDTO";

export function Home() {
  const [percent, setPercent] = useState(0);
  const [foods, setFoods] = useState<FoodStorageDTO[]>([]);

  useLayoutEffect(() => {
    async function fetchFoods() {
      try {
        const data = await foodsGetAll();
        setFoods(data);
        setPercent(
          100 *
            (foods.filter((food) => food.type === "healthy").length /
              foods.length)
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchFoods();
  }, [foods]);

  return (
    <HomeContainer>
      <Header />
      <DietCard percent={percent} level={percent >= 70 ? "high" : "low"} />
      <NewFood />
      <FoodList />
    </HomeContainer>
  );
}
