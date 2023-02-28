import { ReactNode } from "react";
import { ButtonContainer, ButtonIcon, ButtonText } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  text: string | ReactNode;
  icon?: string;
}

export function Button({ text, icon, ...rest }: ButtonProps) {
  return (
    <ButtonContainer {...rest}>
      <ButtonIcon name={`${icon}`} />
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
}
