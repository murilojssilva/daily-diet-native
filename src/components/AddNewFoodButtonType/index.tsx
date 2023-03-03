import {
  AddNewFoodButtonTypeContainer,
  AddNewFoodButtonTypeIcon,
  AddNewFoodButtonTypeText,
} from "./styles";

interface AddNewFoodButtonTypeProps {
  type: "healthy" | "unhealthy";
  text: string;
}

export function AddNewFoodButtonType({
  text,
  type,
}: AddNewFoodButtonTypeProps) {
  return (
    <AddNewFoodButtonTypeContainer type={type}>
      <AddNewFoodButtonTypeIcon type={type} />
      <AddNewFoodButtonTypeText>{text}</AddNewFoodButtonTypeText>
    </AddNewFoodButtonTypeContainer>
  );
}
