import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

export const AddNewFoodContainer = styled.View`
  flex: 1;
  padding: 20px 0;
  background-color: ${(props) => props.theme.colors.gray_400};
`;

export const AddNewFoodHeader = styled.View`
  flex-direction: row;
  height: ${RFValue(100)}px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;

export const AddNewFoodHeaderIcon = styled(Feather)`
  font-size: ${RFValue(22)}px;
  color: ${(props) => props.theme.colors.gray_700};
`;

export const AddNewFoodHeaderTitle = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.gray_700};
`;

export const AddNewFoodContent = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.gray_100};
  flex-direction: column;
  justify-content: space-between;
`;

export const AddNewFoodItem = styled.View`
  flex-direction: column;
  gap: 2px;
`;

export const AddNewFoodTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.gray_700};
`;

export const AddNewFoodInput = styled.TextInput`
  border-color: ${(props) => props.theme.colors.gray_300};
  border-width: 1px;
  padding: 20px;
  border-radius: 6px;
  width: ${Dimensions.get("screen").width * 0.8};
`;

export const AddNewFoodInputDivider = styled.TextInput`
  border-color: ${(props) => props.theme.colors.gray_300};
  border-width: 1px;
  padding: 20px;
  border-radius: 6px;
  width: ${Dimensions.get("screen").width * 0.4};
`;

export const AddNewFoodTextarea = styled.TextInput`
  border-color: ${(props) => props.theme.colors.gray_300};
  border-width: 1px;
  padding: 80px 20px;
  border-radius: 6px;
  width: ${Dimensions.get("screen").width * 0.8};
`;

export const AddNewFoodDivider = styled.View`
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-content: center;
`;

export const AddNewFoodForm = styled.View`
  gap: 20px;

  align-items: center;
`;
