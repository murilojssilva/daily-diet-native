import { TextInputProps } from "react-native";
import { TextareaContainer } from "./styles";

type TextareaProps = TextInputProps & {
  multiline?: true;
};

export function Textarea({ ...rest }: TextareaProps) {
  return <TextareaContainer {...rest} />;
}
