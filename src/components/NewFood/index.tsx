import { NewFoodContainer, NewFoodTitle } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@components/Form/Button";

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
