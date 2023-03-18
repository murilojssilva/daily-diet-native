import { MaskInputProps } from "react-native-mask-input";
import { Input } from "../Input";
import { ErrorMessage, InputFormContainer } from "./styles";
import {
  Control,
  Controller,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from "react-hook-form";

export interface InputFormProps extends MaskInputProps {
  control: Control;
  name: string;
  type: "name" | "dateOrHour";
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export function InputForm({ control, name, error, ...rest }: InputFormProps) {
  return (
    <InputFormContainer {...rest}>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
        name={name}
      />
      {error && <ErrorMessage>{String(error)}</ErrorMessage>}
    </InputFormContainer>
  );
}
