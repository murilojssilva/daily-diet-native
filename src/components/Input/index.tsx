import { TextInputProps } from "react-native";
import { InputContainer } from "./styles";

type InputProps = TextInputProps;

export function Input({ ...rest }: InputProps) {
  return <InputContainer {...rest} />;
}
