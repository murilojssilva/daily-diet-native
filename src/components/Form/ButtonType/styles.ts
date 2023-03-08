import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

interface ButtonTypeProps {
  type: "healthy" | "unhealthy";
  isActive: boolean;
}

interface ButtonTypeIconProps {
  type: "healthy" | "unhealthy";
}

export const ButtonTypeContainer = styled(RectButton)<ButtonTypeProps>`
  background-color: ${(props) => props.theme.colors.gray_200};

  width: 47%;
  justify-content: center;
  border-radius: 6px;
  border-style: solid;
  ${({ isActive, type, theme }) => css`
    border-width: ${isActive ? 1.5 : 0}px;
    border-color: ${isActive
      ? type === "healthy"
        ? theme.colors.green_dark
        : theme.colors.red_dark
      : theme.colors.gray_200};
    background-color: ${isActive
      ? type === "healthy"
        ? theme.colors.green_light
        : theme.colors.red_light
      : theme.colors.gray_200};
  `};
`;

export const ButtonTypeContent = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 5px;
`;

export const ButtonTypeIcon = styled.View<ButtonTypeIconProps>`
  padding: 5px;
  align-self: center;
  border-radius: 6px;
  background-color: ${({ theme, type }) =>
    type === "healthy" ? theme.colors.green_dark : theme.colors.red_dark};
`;

export const ButtonTypeText = styled.Text`
  font-size: ${RFValue(16)}px;
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.gray_700};
  `};
`;
