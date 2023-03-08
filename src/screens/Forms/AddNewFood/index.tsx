import { useState } from "react";
import { Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  FormContainer,
  FormContent,
  FormDivider,
  FormForm,
  FormHeader,
  FormHeaderIcon,
  FormHeaderTitle,
  FormItem,
  FormTitle,
} from "../styles";

import { ButtonType } from "@components/Form/ButtonType";
import { Button } from "@components/Form/Button";
import { foodCreate } from "@storage/food/foodCreate";

import uuid from "react-native-uuid";
import { Masks } from "react-native-mask-input";
import { hourFormat } from "@utils/formatter";
import { InputForm } from "@components/Form/InputForm";
import { useForm } from "react-hook-form";
import { FoodStorageDTO } from "@dtos/foodStorageDTO";
import { TextareaForm } from "@components/Form/TextareaForm";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  description: Yup.string().required("Descrição é obrigatória"),
  date: Yup.date()
    .typeError("Insira uma data válida")
    .required("Data é obrigatória"),
  hour: Yup.string()
    .length(5, "Insira um horário válido")
    .matches(/(\d){2}:(\d){2}/, "Insira um horário válido")
    .required("Hora é obrigatória"),
});

export function AddNewFood() {
  const [type, setType] = useState<"healthy" | "unhealthy">("healthy");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { navigate } = useNavigation();
  function handleBackHome() {
    navigate("home");
  }

  async function handleAddFood(form: FoodStorageDTO) {
    try {
      if (!type) {
        Alert.alert("Informe se a refeição foi ou não saudável.");
      }
      const data = {
        id: String(uuid.v4()),
        name: form.name,
        description: form.description,
        date: form.date,
        hour: form.hour,
        type: type,
      };

      console.log(data);

      await foodCreate(data);
      navigate("feedback", { type });
    } catch (error) {
      console.log(error);
    }
  }

  function handleFoodType(type: "healthy" | "unhealthy") {
    setType(type);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <FormContainer>
        <FormHeader>
          <FormHeaderIcon name="arrow-left" onPress={handleBackHome} />
          <FormHeaderTitle>Nova refeição</FormHeaderTitle>
          <FormHeaderTitle></FormHeaderTitle>
        </FormHeader>
        <FormContent>
          <FormForm>
            <FormItem>
              <FormTitle>Nome</FormTitle>
              <InputForm
                name="name"
                control={control}
                type="name"
                autoCapitalize="sentences"
                autoCorrect={false}
                error={errors.name && errors.name.message}
              />
            </FormItem>
            <FormItem>
              <FormTitle>Descrição</FormTitle>
              <TextareaForm
                name="description"
                control={control}
                autoCapitalize="words"
                autoCorrect={false}
                error={errors.description && errors.description.message}
              />
            </FormItem>
            <FormDivider>
              <FormItem>
                <FormTitle>Data</FormTitle>
                <InputForm
                  name="date"
                  control={control}
                  type="dateOrHour"
                  mask={Masks.DATE_DDMMYYYY}
                  placeholder="00/00/0000"
                  keyboardType="numeric"
                  error={errors.date && errors.date.message}
                />
              </FormItem>
              <FormItem>
                <FormTitle>Hora</FormTitle>
                <InputForm
                  name="hour"
                  control={control}
                  type="dateOrHour"
                  mask={hourFormat}
                  placeholder="00:00"
                  keyboardType="numeric"
                  error={errors.hour && errors.hour.message}
                />
              </FormItem>
            </FormDivider>
            <FormItem>
              <FormTitle>Está dentro da dieta?</FormTitle>
              <FormDivider>
                <ButtonType
                  type="healthy"
                  onPress={() => handleFoodType("healthy")}
                  text="Sim"
                  isActive={type === "healthy"}
                />
                <ButtonType
                  type="unhealthy"
                  onPress={() => handleFoodType("unhealthy")}
                  text="Não"
                  isActive={type === "unhealthy"}
                />
              </FormDivider>
            </FormItem>
          </FormForm>
          <Button
            text="Cadastrar refeição"
            onPress={handleSubmit(handleAddFood)}
          />
        </FormContent>
      </FormContainer>
    </TouchableWithoutFeedback>
  );
}
