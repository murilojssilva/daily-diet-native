import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ButtonType } from "../../components/ButtonType";
import { Button } from "../../components/Button";
import {
  AddNewFoodContainer,
  AddNewFoodContent,
  AddNewFoodDivider,
  AddNewFoodForm,
  AddNewFoodHeader,
  AddNewFoodHeaderIcon,
  AddNewFoodHeaderTitle,
  AddNewFoodItem,
  AddNewFoodTitle,
} from "./styles";
import uuid from "react-native-uuid";

import { foodCreate } from "../../storage/food/foodCreate";
import { Textarea } from "../../components/Textarea";
import { Input } from "../../components/Input";
import { InputDivider } from "../../components/InputDivider";

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
    <AddNewFoodContainer>
      <AddNewFoodHeader>
        <AddNewFoodHeaderIcon name="arrow-left" onPress={handleBackHome} />
        <AddNewFoodHeaderTitle>Nova refeição</AddNewFoodHeaderTitle>
        <AddNewFoodHeaderTitle></AddNewFoodHeaderTitle>
      </AddNewFoodHeader>
      <AddNewFoodContent>
        <AddNewFoodForm>
          <AddNewFoodItem>
            <AddNewFoodTitle>Nome</AddNewFoodTitle>
            <Input onChangeText={setName} value={name} />
          </AddNewFoodItem>
          <AddNewFoodItem>
            <AddNewFoodTitle>Descrição</AddNewFoodTitle>
            <Textarea onChangeText={setDescription} value={description} />
          </AddNewFoodItem>
          <AddNewFoodDivider>
            <AddNewFoodItem>
              <AddNewFoodTitle>Data</AddNewFoodTitle>
              <InputDivider
                onChangeText={setDate}
                value={date}
                placeholder="00/00/0000"
                keyboardType="numeric"
              />
            </AddNewFoodItem>
            <AddNewFoodItem>
              <AddNewFoodTitle>Hora</AddNewFoodTitle>
              <InputDivider
                onChangeText={setHour}
                value={hour}
                placeholder="00:00"
                keyboardType="numeric"
              />
            </AddNewFoodItem>
          </AddNewFoodDivider>
          <AddNewFoodItem>
            <AddNewFoodTitle>Está dentro da dieta?</AddNewFoodTitle>
            <AddNewFoodDivider>
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
            </AddNewFoodDivider>
          </AddNewFoodItem>
        </AddNewFoodForm>
        <Button text="Cadastrar refeição" onPress={() => handleAddFood()} />
      </AddNewFoodContent>
    </AddNewFoodContainer>
  );
}
