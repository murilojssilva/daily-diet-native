import { useLayoutEffect, useState } from "react";
import { DietCard } from "../../components/DietCard";
import { Header } from "../../components/Header";
import { HomeContainer } from "./styles";
import { NewFood } from "../../components/NewFood";
import { FoodList } from "../../components/FoodList";
import { useTheme } from "styled-components/native";
import { foodsGetAll } from "../../storage/food/foodsGetAll";

export function Home() {
  const [percent, setPercent] = useState("70");
  const [foods, setFoods] = useState<
    {
      text: string;
      type: "healthy" | "not_healthy";
      date: Date;
      hour: string;
    }[]
  >([]);
  const { colors } = useTheme();

  useLayoutEffect(() => {
    async function fetchFoods() {
      try {
        const data = await foodsGetAll();
        setFoods(data);
        setPercent(
          String(
            foods.filter((food) => food.type === "healthy").length /
              foods.length
          )
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
      <DietCard percent={percent} level={percent >= "70" ? "high" : "low"} />
      <NewFood />
      <FoodList />
    </HomeContainer>
  );
}
