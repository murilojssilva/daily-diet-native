import { useNavigation } from "@react-navigation/native";
import { AddNewFoodButtonType } from "../../components/AddNewFoodButtonType";
import { Button } from "../../components/Button";
import {
  AddNewFoodContainer,
  AddNewFoodContent,
  AddNewFoodDivider,
  AddNewFoodForm,
  AddNewFoodHeader,
  AddNewFoodHeaderIcon,
  AddNewFoodHeaderTitle,
  AddNewFoodInput,
  AddNewFoodInputDivider,
  AddNewFoodItem,
  AddNewFoodTextarea,
  AddNewFoodTitle,
} from "./styles";
import { useState } from "react";
import { foodCreate } from "../../storage/food/foodCreate";

export function AddNewFood() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [type, setType] = useState<"healthy" | "unhealthy">("healthy");

  const navigation = useNavigation();
  function handleBackHome() {
    navigation.navigate("home");
  }

  async function handleAddFood() {
    try {
      await foodCreate({ name, description, date, hour, type });
      navigation.navigate("feedback", { type });
    } catch (error) {
      console.log(error);
    }
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
            <AddNewFoodInput onChangeText={setName} value={name} />
          </AddNewFoodItem>
          <AddNewFoodItem>
            <AddNewFoodTitle>Descrição</AddNewFoodTitle>
            <AddNewFoodTextarea
              onChangeText={setDescription}
              value={description}
            />
          </AddNewFoodItem>
          <AddNewFoodDivider>
            <AddNewFoodItem>
              <AddNewFoodTitle>Data</AddNewFoodTitle>
              <AddNewFoodInputDivider
                onChangeText={setDate}
                value={date}
                placeholder="00/00/0000"
              />
            </AddNewFoodItem>
            <AddNewFoodItem>
              <AddNewFoodTitle>Hora</AddNewFoodTitle>
              <AddNewFoodInputDivider
                onChangeText={setHour}
                value={hour}
                placeholder="00:00"
              />
            </AddNewFoodItem>
          </AddNewFoodDivider>
          <AddNewFoodItem>
            <AddNewFoodTitle>Está dentro da dieta?</AddNewFoodTitle>
            <AddNewFoodDivider>
              <AddNewFoodButtonType type="healthy" text="Sim" />
              <AddNewFoodButtonType type="unhealthy" text="Não" />
            </AddNewFoodDivider>
          </AddNewFoodItem>
        </AddNewFoodForm>
        <Button text="Cadastrar refeição" onPress={() => handleAddFood()} />
      </AddNewFoodContent>
    </AddNewFoodContainer>
  );
}
