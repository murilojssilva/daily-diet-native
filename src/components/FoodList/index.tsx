import { FoodListContainer, FoodListContent } from "./styles";
import { useContext } from "react";
import { FoodCard } from "../FoodCard";
import { EmptyFoodList } from "../EmptyFoodList";
import { FoodsContext } from "../../contexts/FoodsContexts";

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
