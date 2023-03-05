import { useNavigation } from "@react-navigation/native";
import { Button } from "../Button";
import { NewFoodContainer, NewFoodTitle } from "./styles";

export function NewFood() {
  const { navigate } = useNavigation();
  function handleOpenAddNewFood() {
    navigate("new_food");
  }
  return (
    <NewFoodContainer>
      <NewFoodTitle>Refeições</NewFoodTitle>
      <Button onPress={handleOpenAddNewFood} text="Nova refeição" icon="plus" />
    </NewFoodContainer>
  );
}
