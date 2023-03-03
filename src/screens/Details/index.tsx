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

export function Details() {
  const navigation = useNavigation();
  function handleBackHome() {
    navigation.navigate("home");
  }

  const route = useRoute();
  const { date, hour, name, type, description } =
    route.params as FoodStorageDTO;

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
          <Button text="Editar refeição" icon="edit-3" />
          <Button text="Excluir refeição" icon="trash-2" />
        </DetailsButtonsContainer>
      </DetailsContent>
    </DetailsContainer>
  );
}
