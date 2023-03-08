import { FeedbackContainer, FeedbackText, FeedbackTitle } from "./styles";

import { useNavigation, useRoute } from "@react-navigation/native";

import { Button } from "@components/Form/Button";
import HealthyImage from "@assets/healthyFoodImage.svg";
import UnhealthyImage from "@assets/unhealtyFoodImage.svg";

type FeedbackParams = {
  type: "healthy" | "unhealthy";
};

export function Feedback() {
  const { navigate } = useNavigation();
  const route = useRoute();
  const { type } = route.params as FeedbackParams;
  function handleBackToHome() {
    navigate("home");
  }
  return (
    <FeedbackContainer>
      <FeedbackTitle type={type}>
        {type === "healthy" ? "Continue assim!" : "Que pena!"}
      </FeedbackTitle>
      <FeedbackText>
        {type === "healthy"
          ? "Você continua dentro da dieta. Muito bem!"
          : "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"}
      </FeedbackText>

      {type === "healthy" ? <HealthyImage /> : <UnhealthyImage />}

      <Button text="Ir para a página inicial" onPress={handleBackToHome} />
    </FeedbackContainer>
  );
}
