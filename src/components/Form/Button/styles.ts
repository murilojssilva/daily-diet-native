import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const ButtonContainer = styled.TouchableOpacity`
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 15px;
  gap: 10px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.gray_600};
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(14)}px;
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.gray_0};
  `};
`;

export const ButtonIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.gray_0};
  font-size: ${RFValue(14)}px;
`;
