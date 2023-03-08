import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";

export const FormContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_400};
  padding: 20px 0;
  margin: -30px 0;
`;

export const FormHeader = styled.View`
  flex-direction: row;
  height: ${RFValue(100)}px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;

export const FormHeaderIcon = styled(Feather)`
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.gray_700};
`;

export const TitleStyle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.gray_700};
  `};
`;

export const FormHeaderTitle = styled(TitleStyle)`
  font-size: ${RFValue(22)}px;
`;

export const FormContent = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.gray_100};
  flex-direction: column;
  justify-content: space-between;
  margin: -20px 0;
  border-radius: 20px;
`;

export const FormItem = styled.View`
  flex-direction: column;
  gap: 2px;
`;

export const FormTitle = styled(TitleStyle)`
  font-size: ${RFValue(16)}px;
`;

export const FormDivider = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 5px;
`;

export const FormForm = styled.View`
  gap: 20px;
  align-items: center;
`;
