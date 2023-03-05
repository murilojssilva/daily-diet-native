import { useNavigation, useRoute } from "@react-navigation/native";
import { ButtonType } from "../../components/ButtonType";
import { Button } from "../../components/Button";
import {
  EditFoodContainer,
  EditFoodContent,
  EditFoodDivider,
  EditFoodForm,
  EditFoodHeader,
  EditFoodHeaderIcon,
  EditFoodHeaderTitle,
  EditFoodItem,
  EditFoodTitle,
} from "./styles";
import { useState } from "react";
import { FoodStorageDTO } from "../../storage/food/foodStorageDTO";
import { foodEdit } from "../../storage/food/foodEdit";
import { Textarea } from "../../components/Textarea";
import { Input } from "../../components/Input";
import { InputDivider } from "../../components/InputDivider";

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
    <EditFoodContainer>
      <EditFoodHeader>
        <EditFoodHeaderIcon name="arrow-left" onPress={handleBackHome} />
        <EditFoodHeaderTitle>Editar refeição</EditFoodHeaderTitle>
        <EditFoodHeaderTitle></EditFoodHeaderTitle>
      </EditFoodHeader>
      <EditFoodContent>
        <EditFoodForm>
          <EditFoodItem>
            <EditFoodTitle>Nome</EditFoodTitle>
            <Input onChangeText={setName} value={editName} />
          </EditFoodItem>
          <EditFoodItem>
            <EditFoodTitle>Descrição</EditFoodTitle>

            <Textarea onChangeText={setDescription} value={editDescription} />
          </EditFoodItem>
          <EditFoodDivider>
            <EditFoodItem>
              <EditFoodTitle>Data</EditFoodTitle>
              <InputDivider
                onChangeText={setDate}
                value={editDate}
                placeholder="00/00/0000"
              />
            </EditFoodItem>
            <EditFoodItem>
              <EditFoodTitle>Hora</EditFoodTitle>
              <InputDivider
                onChangeText={setHour}
                value={editHour}
                placeholder="00:00"
              />
            </EditFoodItem>
          </EditFoodDivider>
          <EditFoodItem>
            <EditFoodTitle>Está dentro da dieta?</EditFoodTitle>
            <EditFoodDivider>
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
            </EditFoodDivider>
          </EditFoodItem>
        </EditFoodForm>
        <Button text="Editar refeição" onPress={() => handleEditFood()} />
      </EditFoodContent>
    </EditFoodContainer>
  );
}
