import { useTheme } from "styled-components/native";
import {
  StatisticsHeaderButton,
  StatisticsHeaderContainer,
  StatisticsHeaderIcon,
  StatisticsHeaderPercent,
  StatisticsHeaderText,
} from "./styles";
import { GestureResponderEvent } from "react-native";

interface StatisticsHeaderProps {
  percent: number;
  backOption: (event: GestureResponderEvent) => void;
}

export function StatisticsHeader({
  percent,
  backOption,
}: StatisticsHeaderProps) {
  const { colors } = useTheme();
  return (
    <StatisticsHeaderContainer
      backgroundColor={percent >= 70 ? colors.green_light : colors.red_light}
    >
      <StatisticsHeaderButton onPress={backOption}>
        <StatisticsHeaderIcon
          name="arrow-left"
          color={percent >= 70 ? colors.green_dark : colors.red_dark}
        />
      </StatisticsHeaderButton>
      <StatisticsHeaderPercent>{percent}%</StatisticsHeaderPercent>
      <StatisticsHeaderText>das refeições dentro da dieta</StatisticsHeaderText>
    </StatisticsHeaderContainer>
  );
}
