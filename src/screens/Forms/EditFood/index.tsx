import { useState } from "react";

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

import { useNavigation, useRoute } from "@react-navigation/native";

import { FoodStorageDTO } from "@dtos/foodStorageDTO";
import { foodEdit } from "@storage/food/foodEdit";
import { Textarea } from "@components/Form/Textarea";
import { Input } from "@components/Form/Input";
import { ButtonType } from "@components/Form/ButtonType";
import { Button } from "@components/Form/Button";

import { Masks } from "react-native-mask-input";
import { hourFormat } from "@utils/formatter";
import { InputForm } from "@components/Form/InputForm";
import { useForm } from "react-hook-form";
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

export function EditFood() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FoodStorageDTO>({ resolver: yupResolver(schema) });

  const route = useRoute();
  const { title, data } = route.params as FoodStorageDTO;

  const [editName, setName] = useState(name);

  const [editDescription, setDescription] = useState(data.description);
  const [editDate, setDate] = useState(title);
  const [editHour, setHour] = useState(data.hour);
  const [editType, setType] = useState<"healthy" | "unhealthy">(data.type);

  const { navigate } = useNavigation();
  function handleBackHome() {
    navigate("details", {
      title: title,
      data: {
        id: data.id,
        hour: data.hour,
        name: data.name,
        type: data.type,
        description: data.description,
      },
    });
  }

  function handleFoodType(type: "healthy" | "unhealthy") {
    setType(type);
  }

  async function handleEditFood() {
    try {
      await foodEdit({
        title: title,
        data: {
          id: data.id,
          hour: data.hour,
          name: data.name,
          type: data.type,
          description: data.description,
        },
      });
      navigate("home");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <FormContainer>
      <FormHeader>
        <FormHeaderIcon name="arrow-left" onPress={handleBackHome} />
        <FormHeaderTitle>Editar refeição</FormHeaderTitle>
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
              error={errors.data?.name?.message}
            />
          </FormItem>
          <FormItem>
            <FormTitle>Descrição</FormTitle>

            <Textarea onChangeText={setDescription} value={editDescription} />
          </FormItem>
          <FormDivider>
            <FormItem>
              <FormTitle>Data</FormTitle>
              <InputForm
                control={control}
                onChangeText={setDate}
                value={editDate}
                mask={Masks.DATE_DDMMYYYY}
                placeholder="00/00/0000"
                keyboardType="numeric"
              />
            </FormItem>
            <FormItem>
              <FormTitle>Hora</FormTitle>
              <InputForm
                control={control}
                onChangeText={setHour}
                value={editHour}
                mask={hourFormat}
                placeholder="00:00"
                keyboardType="numeric"
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
                isActive={editType === "healthy"}
              />
              <ButtonType
                type="unhealthy"
                onPress={() => handleFoodType("unhealthy")}
                text="Não"
                isActive={editType === "unhealthy"}
              />
            </FormDivider>
          </FormItem>
        </FormForm>
        <Button text="Editar refeição" onPress={handleSubmit(handleEditFood)} />
      </FormContent>
    </FormContainer>
  );
}
