import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

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
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) =>
    props.type === "healthy"
      ? props.theme.colors.green_dark
      : props.theme.colors.red_dark};

  text-align: center;
`;

export const FeedbackText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.gray_700};

  text-align: center;
`;
