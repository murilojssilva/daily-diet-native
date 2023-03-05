import { FoodListContainer, FoodListContent } from "./styles";
import { useLayoutEffect, useState } from "react";
import { foodsGetAll } from "../../storage/food/foodsGetAll";
import { FoodStorageDTO } from "../../storage/food/foodStorageDTO";
import { FoodCard } from "../FoodCard";
import { EmptyFoodList } from "../EmptyFoodList";

export function FoodList() {
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
    <FoodListContainer>
      <FoodListContent
        data={foods}
        renderItem={({ item }: any) => <FoodCard key={item} data={item} />}
        ListEmptyComponent={<EmptyFoodList />}
      />
    </FoodListContainer>
  );
}
