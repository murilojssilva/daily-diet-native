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
import { FoodStorageDTO } from "@dtos/foodStorageDTO";

interface FoodCardProps {
  data: FoodStorageDTO;
}

export function FoodCard({ data }: FoodCardProps) {
  const { navigate } = useNavigation();

  return (
    <FoodCardContainer>
      <FoodDay>{data.date}</FoodDay>
      <FoodCardContent
        onPress={() =>
          navigate("details", {
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
