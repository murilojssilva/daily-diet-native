import { useTheme } from "styled-components/native";
import {
  DietCardContainer,
  DietCardContent,
  DietCardHeader,
  DietCardIcon,
  DietCardPercent,
  DietCardText,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

interface DietCardProps {
  level: "high" | "low" | "regular";
  percent: number;
}

export function DietCard({ level, percent }: DietCardProps) {
  const { colors } = useTheme();
  const navigation = useNavigation();

  function handleOpenNewScreen() {
    navigation.navigate("statistics");
  }

  return (
    <DietCardContainer
      level={level}
      percent={percent}
      onPress={handleOpenNewScreen}
    >
      <DietCardHeader>
        <DietCardIcon
          name="arrow-up-right"
          color={level === "high" ? colors.green_dark : colors.red_dark}
        />
      </DietCardHeader>
      <DietCardContent>
        <DietCardPercent>
          {String(percent) === "NaN" ? 0 : percent}%
        </DietCardPercent>
        <DietCardText>das refeições dentro da dieta</DietCardText>
      </DietCardContent>
    </DietCardContainer>
  );
}
