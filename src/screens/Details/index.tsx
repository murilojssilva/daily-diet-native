import { Alert } from "react-native";
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
import { Button } from "@components/Form/Button";
import { FoodStorageDTO } from "@dtos/foodStorageDTO";
import { foodRemoveByName } from "@storage/food/foodRemove";

export function Details() {
  const { navigate } = useNavigation();
  function handleBackHome() {
    navigate("home");
  }

  const route = useRoute();
  const { title, data } = route.params as FoodStorageDTO;

  async function foodRemove(id: string) {
    try {
      await foodRemoveByName(id);
      navigate("home");
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
            <DetailsName>{data.name}</DetailsName>
            <DetailsDescription>{data.description}</DetailsDescription>
          </DetailsItems>

          <DetailsItems>
            <DetailsDateAndHourTitle>Data e hora</DetailsDateAndHourTitle>
            <DetailsDateAndHourText>
              {title} às {data.hour}
            </DetailsDateAndHourText>
          </DetailsItems>

          <DetailsItems>
            <DetailsTypeTag>
              <DetailsTypeIcon type={data.type} />
              <DetailsTypeText>
                {data.type === "healthy" ? "dentro da dieta" : "fora da dieta"}
              </DetailsTypeText>
            </DetailsTypeTag>
          </DetailsItems>
        </DetailsInfos>
        <DetailsButtonsContainer>
          <Button
            text="Editar refeição"
            icon="edit-3"
            onPress={() =>
              navigate("edit_food", {
                title: title,
                data: {
                  id: data.id,
                  hour: data.hour,
                  name: data.name,
                  type: data.type,
                  description: data.description,
                },
              })
            }
          />
          <Button
            text="Excluir refeição"
            icon="trash-2"
            onPress={() => handleFoodRemove(data.name)}
          />
        </DetailsButtonsContainer>
      </DetailsContent>
    </DetailsContainer>
  );
}
