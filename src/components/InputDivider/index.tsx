import { TextInputProps } from "react-native";
import { InputDividerContainer } from "./styles";

type InputDividerProps = TextInputProps;

export function InputDivider({ ...rest }: InputDividerProps) {
  return <InputDividerContainer {...rest} />;
}
