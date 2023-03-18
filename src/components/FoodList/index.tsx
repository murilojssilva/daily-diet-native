import { FoodListContainer, FoodListContent, FoodListTitle } from "./styles";
import { useContext, useState } from "react";
import { FoodCard } from "@components/FoodCard";
import { EmptyFoodList } from "@components/EmptyFoodList";
import { FoodsContext } from "@contexts/FoodsContexts";

export function FoodList() {
  const { foods } = useContext(FoodsContext);

  const [exercises, setExercises] = useState([
    {
      title: "26.08.22",
      data: [
        {
          id: "1",
          name: "Costas",
          type: "healthy",
          description: "Puxada frontal",
          hour: "08:00",
        },
        {
          id: "2",
          name: "Costas",
          type: "healthy",
          description: "Remada lateral",
          hour: "09:15",
        },
      ],
    },
    {
      title: "27.08.22",
      data: [
        {
          id: "3",
          name: "Costas",
          type: "unhealthy",
          description: "Puxada frontal",
          hour: "08:00",
        },
      ],
    },
  ]);

  return (
    <FoodListContainer>
      <FoodListContent
        sections={foods}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => <FoodCard key={item} data={item} />}
        renderSectionHeader={({ section }) => (
          <FoodListTitle>{section.title}</FoodListTitle>
        )}
        ListEmptyComponent={() => <EmptyFoodList />}
        showsVerticalScrollIndicator={false}
      />
    </FoodListContainer>
  );
}
