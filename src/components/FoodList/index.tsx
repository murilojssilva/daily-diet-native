import { useTheme } from "styled-components/native";
import {
  FoodCard,
  FoodContent,
  FoodDay,
  FoodDivider,
  FoodListContainer,
  FoodTime,
  FoodTitle,
  FoodType,
} from "./styles";
import { useLayoutEffect, useState } from "react";
import { foodsGetAll } from "../../storage/food/foodsGetAll";

export function FoodList() {
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
      } catch (error) {
        console.log(error);
      }
    }
    fetchFoods();
  }, [foods]);
  return (
    <FoodListContainer>
      {foods.map((food) => (
        <>
          <FoodDay>{food.date}</FoodDay>
          <FoodCard>
            <FoodContent>
              <FoodTime>{food.hour}</FoodTime>
              <FoodDivider />
              <FoodTitle>{food.text}</FoodTitle>
            </FoodContent>
            <FoodType
              color={
                food.type === "healthy" ? colors.green_mid : colors.red_mid
              }
            />
          </FoodCard>
        </>
      ))}
    </FoodListContainer>
  );
}
