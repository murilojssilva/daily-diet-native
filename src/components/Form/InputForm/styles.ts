import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const InputFormContainer = styled.View`
  width: 100%;
`;

export const ErrorMessage = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.red_dark};
`;
