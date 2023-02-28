import { Button } from "../Button";
import { NewFoodContainer, NewFoodTitle } from "./styles";

export function NewFood() {
  return (
    <NewFoodContainer>
      <NewFoodTitle>Refeições</NewFoodTitle>
      <Button text="Nova refeição" icon="plus" />
    </NewFoodContainer>
  );
}
