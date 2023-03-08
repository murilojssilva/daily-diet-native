import { FoodListContainer, FoodListContent } from "./styles";
import { useContext } from "react";
import { FoodCard } from "@components/FoodCard";
import { EmptyFoodList } from "@components/EmptyFoodList";
import { FoodsContext } from "@contexts/FoodsContexts";

export function FoodList() {
  const { foods } = useContext(FoodsContext);

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
