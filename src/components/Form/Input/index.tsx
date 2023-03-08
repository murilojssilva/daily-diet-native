import { MaskInputProps } from "react-native-mask-input";
import { InputContainer } from "./styles";

interface InputProps extends MaskInputProps {
  type: "name" | "dateOrHour";
}

export function Input({ type, ...rest }: InputProps) {
  return <InputContainer type={type} {...rest} />;
}
