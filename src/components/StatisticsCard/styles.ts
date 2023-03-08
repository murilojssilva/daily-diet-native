import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface StatisticsCardContainerProps {
  level: "high" | "low" | "regular";
  percent: number;
}

export const StatisticsCardContainer = styled.View<StatisticsCardContainerProps>`
  padding: 20px;
  margin: 10px;
  background-color: ${({ theme, level }) =>
    level === "high"
      ? theme.colors.green_light
      : level === "low"
      ? theme.colors.red_light
      : theme.colors.gray_200};
  border-radius: 6px;
`;

export const StatisticsCardContent = styled.View`
  align-items: center;
  gap: 5px;
`;

export const StatisticsCardPercent = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const StatisticsCardText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_700};
    font-family: ${theme.fonts.regular};
  `};

  font-size: ${RFValue(12)}px;
  text-align: center;
`;
