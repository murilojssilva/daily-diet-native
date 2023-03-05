import {
  EmptyFoodListContainer,
  EmptyFoodListIcon,
  EmptyFoodListText,
} from "./styles";

export function EmptyFoodList() {
  return (
    <EmptyFoodListContainer>
      <EmptyFoodListIcon name="alert-triangle" />
      <EmptyFoodListText>
        Não há refeições cadastradas. Adicione uma refeição.
      </EmptyFoodListText>
    </EmptyFoodListContainer>
  );
}
