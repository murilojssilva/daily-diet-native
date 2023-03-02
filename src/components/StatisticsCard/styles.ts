import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface StatisticsCardContainerProps {
  level: "high" | "low" | "regular";
  percent: string;
}

export const StatisticsCardContainer = styled.View<StatisticsCardContainerProps>`
  padding: 20px 10px;
  margin: 10px;
  background-color: ${(props) =>
    props.level === "high"
      ? props.theme.colors.green_light
      : props.level === "low"
      ? props.theme.colors.red_light
      : props.theme.colors.gray_200};

  border-radius: 6px;
`;

export const StatisticsCardContent = styled.View`
  align-items: center;
  gap: 5px;
`;

export const StatisticsCardPercent = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const StatisticsCardText = styled.Text`
  color: ${(props) => props.theme.colors.gray_600};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  text-align: center;
`;
