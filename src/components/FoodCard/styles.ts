import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface FoodTypeProps {
  type: string;
}

export const FoodDivider = styled.View`
  border-color: ${(props) => props.theme.colors.gray_300};
  border-width: 1px;
`;

export const FoodContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

export const FoodCardContainer = styled.View`
  flex: 1;
`;

export const FoodCardContent = styled.TouchableOpacity`
  flex-direction: row;
  padding: 20px;
  border-color: ${(props) => props.theme.colors.gray_300};
  border-width: 2px;
  border-radius: 6px;
  justify-content: space-between;
  margin: 5px 0;
  text-align: center;
`;

export const FoodDay = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${(props) => props.theme.fonts.medium};
`;

export const FoodTime = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${(props) => props.theme.fonts.medium};
`;

export const FoodTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.gray_600};
`;

export const FoodType = styled.View<FoodTypeProps>`
  padding: 5px;
  align-self: center;
  border-radius: 6px;
  background-color: ${(props) =>
    props.type === "healthy"
      ? props.theme.colors.green_dark
      : props.theme.colors.red_dark};
`;
