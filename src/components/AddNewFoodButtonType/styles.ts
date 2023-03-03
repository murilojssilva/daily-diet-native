import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

interface AddNewFoodButtonTypeProps {
  type: "healthy" | "unhealthy";
}

export const AddNewFoodButtonTypeContainer = styled.TouchableOpacity<AddNewFoodButtonTypeProps>`
  background-color: ${(props) => props.theme.colors.gray_200};
  padding: 20px;
  border-radius: 6px;
  flex-direction: row;
  gap: 5px;
  width: ${Dimensions.get("screen").width * 0.4};
`;

export const AddNewFoodButtonTypeIcon = styled.View<AddNewFoodButtonTypeProps>`
  padding: 5px;
  align-self: center;
  border-radius: 6px;
  background-color: ${(props) =>
    props.type === "healthy"
      ? props.theme.colors.green_dark
      : props.theme.colors.red_dark};
`;

export const AddNewFoodButtonTypeText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.gray_700};
`;
