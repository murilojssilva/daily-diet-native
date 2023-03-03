import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

interface StatisticsHeaderContainerProps {
  backgroundColor: string;
}

export const StatisticsHeaderContainer = styled.View<StatisticsHeaderContainerProps>`
  background-color: ${(props) => props.backgroundColor};
  height: ${RFValue(173)}px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

export const StatisticsHeaderPercent = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const StatisticsHeaderButton = styled.TouchableOpacity`
  align-self: flex-start;
`;

export const StatisticsHeaderIcon = styled(Feather)`
  align-self: flex-end;
  font-size: ${RFValue(20)}px;
`;

export const StatisticsHeaderText = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;
