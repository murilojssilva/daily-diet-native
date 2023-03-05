import { useLayoutEffect, useState } from "react";
import {
  FoodCardContainer,
  FoodCardContent,
  FoodContent,
  FoodDay,
  FoodDivider,
  FoodTime,
  FoodTitle,
  FoodType,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { foodsGetAll } from "../../storage/food/foodsGetAll";
import { FoodStorageDTO } from "../../storage/food/foodStorageDTO";

interface FoodCardProps {
  data: FoodStorageDTO;
}

export function FoodCard({ data }: FoodCardProps) {
  const [foods, setFoods] = useState<FoodStorageDTO[]>([]);
  const navigation = useNavigation();

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
    <FoodCardContainer>
      <FoodDay>{data.date}</FoodDay>
      <FoodCardContent
        onPress={() =>
          navigation.navigate("details", {
            id: data.id,
            date: data.date,
            hour: data.hour,
            name: data.name,
            type: data.type,
            description: data.description,
          })
        }
      >
        <FoodContent>
          <FoodTime>{data.hour}</FoodTime>
          <FoodDivider />
          <FoodTitle>{data.name}</FoodTitle>
        </FoodContent>
        <FoodType type={data.type} />
      </FoodCardContent>
    </FoodCardContainer>
  );
}
