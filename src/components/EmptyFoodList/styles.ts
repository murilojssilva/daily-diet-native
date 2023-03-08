import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const EmptyFoodListContainer = styled.View`
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;

export const EmptyFoodListIcon = styled(Feather)`
  font-size: ${RFValue(50)}px;
`;

export const EmptyFoodListText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  text-align: center;
`;
