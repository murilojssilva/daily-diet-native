import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const FeedbackContainer = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

interface FeedbackTypeProps {
  type: "healthy" | "unhealthy";
}

export const FeedbackTitle = styled.Text<FeedbackTypeProps>`
  font-size: ${RFValue(22)}px;
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.bold};
    color: ${type === "healthy"
      ? theme.colors.green_dark
      : theme.colors.red_dark};
  `};
  text-align: center;
`;

export const FeedbackText = styled.Text`
  font-size: ${RFValue(16)}px;
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.gray_700};
  `}

  text-align: center;
`;
