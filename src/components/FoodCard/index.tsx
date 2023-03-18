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
  dataCard: FoodStorageDTO;
}

export function FoodCard({ dataCard }: FoodCardProps) {
  const { navigate } = useNavigation();

  return (
    <FoodCardContainer>
      <FoodDay>{dataCard.title}</FoodDay>
      <FoodCardContent
        onPress={() =>
          navigate("details", {
            title: dataCard.title,
            data: {
              id: dataCard.data.id,
              hour: dataCard.data.hour,
              name: dataCard.data.name,
              type: dataCard.data.type,
              description: dataCard.data.description,
            },
          })
        }
      >
        <FoodContent>
          <FoodTime>{dataCard.data.hour}</FoodTime>
          <FoodDivider />
          <FoodTitle>{dataCard.data.name}</FoodTitle>
        </FoodContent>
        <FoodType type={dataCard.data.type} />
      </FoodCardContent>
    </FoodCardContainer>
  );
}
