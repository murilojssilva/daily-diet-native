import { useTheme } from "styled-components/native";
import {
  StatisticsHeaderContainer,
  StatisticsHeaderPercent,
  StatisticsHeaderText,
} from "./styles";

interface StatisticsHeaderProps {
  percent: string;
}

export function StatisticsHeader({ percent }: StatisticsHeaderProps) {
  const { colors } = useTheme();
  return (
    <StatisticsHeaderContainer
      backgroundColor={percent >= "70" ? colors.green_light : colors.red_light}
    >
      <StatisticsHeaderPercent>{percent}%</StatisticsHeaderPercent>
      <StatisticsHeaderText>das refeições dentro da dieta</StatisticsHeaderText>
    </StatisticsHeaderContainer>
  );
}
