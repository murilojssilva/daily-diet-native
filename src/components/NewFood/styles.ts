import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const NewFoodContainer = styled.View`
  padding: 20px;
`;

export const NewFoodTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${RFValue(16)}px;
`;
