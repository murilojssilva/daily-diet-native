import { Textarea } from "../Textarea";
import { ErrorMessage, TextareaFormContainer } from "./styles";
import {
  Control,
  Controller,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form";
import { TextInputProps } from "react-native";

interface TextareaFormProps extends TextInputProps {
  control: Control;
  name: string;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  multiline?: true;
}

export function TextareaForm({
  control,
  name,
  error,
  ...rest
}: TextareaFormProps) {
  return (
    <TextareaFormContainer {...rest}>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Textarea onChangeText={onChange} value={value} {...rest} />
        )}
        name={name}
      />
      {error && <ErrorMessage>{String(error)}</ErrorMessage>}
    </TextareaFormContainer>
  );
}
