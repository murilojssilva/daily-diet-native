import { useTheme } from "styled-components/native";
import {
  StatisticsHeaderButton,
  StatisticsHeaderContainer,
  StatisticsHeaderIcon,
  StatisticsHeaderInfos,
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
    <StatisticsHeaderContainer>
      <StatisticsHeaderButton onPress={backOption}>
        <StatisticsHeaderIcon
          name="arrow-left"
          color={percent >= 70 ? colors.green_dark : colors.red_dark}
        />
      </StatisticsHeaderButton>
      <StatisticsHeaderInfos>
        <StatisticsHeaderPercent>
          {String(percent) === "NaN" ? "0" : percent}%
        </StatisticsHeaderPercent>
        <StatisticsHeaderText>
          das refeições dentro da dieta
        </StatisticsHeaderText>
      </StatisticsHeaderInfos>
    </StatisticsHeaderContainer>
  );
}
