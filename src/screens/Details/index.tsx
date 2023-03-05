import { useNavigation, useRoute } from "@react-navigation/native";
import {
  DetailsContainer,
  DetailsContent,
  DetailsDateAndHourText,
  DetailsDateAndHourTitle,
  DetailsDescription,
  DetailsHeader,
  DetailsHeaderIcon,
  DetailsHeaderTitle,
  DetailsItems,
  DetailsName,
  DetailsTypeTag,
  DetailsTypeIcon,
  DetailsTypeText,
  DetailsButtonsContainer,
  DetailsInfos,
} from "./styles";
import { Button } from "../../components/Button";
import { FoodStorageDTO } from "../../storage/food/foodStorageDTO";
import { foodRemoveByName } from "../../storage/food/foodRemove";
import { Alert } from "react-native";

export function Details() {
  const navigation = useNavigation();
  function handleBackHome() {
    navigation.navigate("home");
  }

  const route = useRoute();
  const { date, hour, name, type, description } =
    route.params as FoodStorageDTO;

  async function foodRemove(name: string) {
    try {
      await foodRemoveByName(name);
      navigation.navigate("home");
    } catch (error) {
      console.log(error);
      Alert.alert("Remover tarefa", "Não foi possíver remover a tarefa");
    }
  }

  async function handleFoodRemove(name: string) {
    Alert.alert("Remover", "Deseja realmente excluir o registro da refeição?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Sim, excluir", onPress: () => foodRemove(name) },
    ]);
  }

  return (
    <DetailsContainer>
      <DetailsHeader>
        <DetailsHeaderIcon name="arrow-left" onPress={handleBackHome} />
        <DetailsHeaderTitle>Refeição</DetailsHeaderTitle>
        <DetailsHeaderTitle></DetailsHeaderTitle>
      </DetailsHeader>
      <DetailsContent>
        <DetailsInfos>
          <DetailsItems>
            <DetailsName>{name}</DetailsName>
            <DetailsDescription>{description}</DetailsDescription>
          </DetailsItems>

          <DetailsItems>
            <DetailsDateAndHourTitle>Data e hora</DetailsDateAndHourTitle>
            <DetailsDateAndHourText>
              {date} às {hour}
            </DetailsDateAndHourText>
          </DetailsItems>

          <DetailsItems>
            <DetailsTypeTag>
              <DetailsTypeIcon type={type} />
              <DetailsTypeText>
                {type === "healthy" ? "dentro da dieta" : "fora da dieta"}
              </DetailsTypeText>
            </DetailsTypeTag>
          </DetailsItems>
        </DetailsInfos>
        <DetailsButtonsContainer>
          <Button
            text="Editar refeição"
            icon="edit-3"
            onPress={() =>
              navigation.navigate("edit_food", {
                date: date,
                hour: hour,
                name: name,
                type: type,
                description: description,
              })
            }
          />
          <Button
            text="Excluir refeição"
            icon="trash-2"
            onPress={() => handleFoodRemove(name)}
          />
        </DetailsButtonsContainer>
      </DetailsContent>
    </DetailsContainer>
  );
}
