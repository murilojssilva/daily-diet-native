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

export function EditFood() {
  const route = useRoute();
  const { id, name, description, date, hour, type } =
    route.params as FoodStorageDTO;

  const [editName, setName] = useState(name);

  const [editDescription, setDescription] = useState(description);
  const [editDate, setDate] = useState(date);
  const [editHour, setHour] = useState(hour);
  const [editType, setType] = useState<"healthy" | "unhealthy">(type);

  const { navigate } = useNavigation();
  function handleBackHome() {
    navigate("details", {
      id: id,
      date: date,
      hour: hour,
      name: name,
      type: type,
      description: description,
    });
  }

  function handleFoodType(type: "healthy" | "unhealthy") {
    setType(type);
  }

  async function handleEditFood() {
    try {
      await foodEdit({
        id: id,
        date: editDate,
        hour: editHour,
        name: editName,
        type: editType,
        description: editDescription,
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
            <InputForm onChangeText={setName} value={editName} />
          </FormItem>
          <FormItem>
            <FormTitle>Descrição</FormTitle>

            <Textarea onChangeText={setDescription} value={editDescription} />
          </FormItem>
          <FormDivider>
            <FormItem>
              <FormTitle>Data</FormTitle>
              <InputForm
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
        <Button text="Editar refeição" onPress={() => handleEditFood()} />
      </FormContent>
    </FormContainer>
  );
}
