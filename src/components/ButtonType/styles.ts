import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";

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
  border-width: ${({ isActive }) => (isActive ? 1.5 : 0)}px;
  border-style: solid;
  border-color: ${({ isActive, type, theme }) =>
    isActive
      ? type === "healthy"
        ? theme.colors.green_dark
        : theme.colors.red_dark
      : theme.colors.gray_200};
  border-radius: 6px;

  ${({ isActive, type }) =>
    isActive &&
    type === "healthy" &&
    css`
      background-color: ${(props) => props.theme.colors.green_light};
    `}
  ${({ isActive, type }) =>
    isActive &&
    type === "unhealthy" &&
    css`
      background-color: ${({ theme }) => theme.colors.red_light};
    `}
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
  background-color: ${(props) =>
    props.type === "healthy"
      ? props.theme.colors.green_dark
      : props.theme.colors.red_dark};
`;

export const ButtonTypeText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.gray_700};
`;
