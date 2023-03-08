import { RectButtonProps } from "react-native-gesture-handler";
import {
  ButtonTypeContainer,
  ButtonTypeContent,
  ButtonTypeIcon,
  ButtonTypeText,
} from "./styles";

interface ButtonTypeProps extends RectButtonProps {
  type: "healthy" | "unhealthy";
  text: string;
  isActive: boolean;
}

export function ButtonType({ text, type, isActive, ...rest }: ButtonTypeProps) {
  return (
    <ButtonTypeContainer isActive={isActive} type={type}>
      <ButtonTypeContent {...rest}>
        <ButtonTypeIcon type={type} />
        <ButtonTypeText>{text}</ButtonTypeText>
      </ButtonTypeContent>
    </ButtonTypeContainer>
  );
}
