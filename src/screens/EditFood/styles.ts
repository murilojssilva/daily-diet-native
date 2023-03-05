import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

export const EditFoodContainer = styled.View`
  flex: 1;
  padding: 20px 0;
  background-color: ${(props) => props.theme.colors.gray_400};
`;

export const EditFoodHeader = styled.View`
  flex-direction: row;
  height: ${RFValue(100)}px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;

export const EditFoodHeaderIcon = styled(Feather)`
  font-size: ${RFValue(22)}px;
  color: ${(props) => props.theme.colors.gray_700};
`;

export const EditFoodHeaderTitle = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.gray_700};
`;

export const EditFoodContent = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.gray_100};
  flex-direction: column;
  justify-content: space-between;
  margin-top: -20px;

  border-radius: 20px;
`;

export const EditFoodItem = styled.View`
  flex-direction: column;
  gap: 2px;
`;

export const EditFoodTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.gray_700};
`;

export const EditFoodDivider = styled.View`
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-content: center;
`;

export const EditFoodForm = styled.View`
  gap: 20px;

  align-items: center;
`;
