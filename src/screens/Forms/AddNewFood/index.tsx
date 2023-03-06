import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ButtonType } from "../../../components/ButtonType";
import { Button } from "../../../components/Button";
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
import uuid from "react-native-uuid";

import { foodCreate } from "../../../storage/food/foodCreate";
import { Textarea } from "../../../components/Textarea";
import { Input } from "../../../components/Input";
import { InputDivider } from "../../../components/InputDivider";

export function AddNewFood() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [hour, setHour] = useState(
    `${new Date()
      .getHours()
      .toString()
      .padStart(2, "0")}:${new Date().getMinutes()}`
  );
  const [type, setType] = useState<"healthy" | "unhealthy">("healthy");

  const { navigate } = useNavigation();
  function handleBackHome() {
    navigate("home");
  }

  async function handleAddFood() {
    try {
      await foodCreate({
        id: String(uuid.v4()),
        name,
        description,
        date,
        hour,
        type,
      });
      navigate("feedback", { type });
    } catch (error) {
      console.log(error);
    }
  }

  function handleFoodType(type: "healthy" | "unhealthy") {
    setType(type);
  }

  return (
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
            <Input onChangeText={setName} value={name} />
          </FormItem>
          <FormItem>
            <FormTitle>Descrição</FormTitle>
            <Textarea onChangeText={setDescription} value={description} />
          </FormItem>
          <FormDivider>
            <FormItem>
              <FormTitle>Data</FormTitle>
              <InputDivider
                onChangeText={setDate}
                value={date}
                placeholder="00/00/0000"
                keyboardType="numeric"
              />
            </FormItem>
            <FormItem>
              <FormTitle>Hora</FormTitle>
              <InputDivider
                onChangeText={setHour}
                value={hour}
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
        <Button text="Cadastrar refeição" onPress={() => handleAddFood()} />
      </FormContent>
    </FormContainer>
  );
}
