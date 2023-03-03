import { useNavigation } from "@react-navigation/native";
import { Button } from "../Button";
import { NewFoodContainer, NewFoodTitle } from "./styles";

export function NewFood() {
  const navigation = useNavigation();
  function handleOpenAddNewFood() {
    navigation.navigate("new_food");
  }
  return (
    <NewFoodContainer>
      <NewFoodTitle>Refeições</NewFoodTitle>
      <Button onPress={handleOpenAddNewFood} text="Nova refeição" icon="plus" />
    </NewFoodContainer>
  );
}
