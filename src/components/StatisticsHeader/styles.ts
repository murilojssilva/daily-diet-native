import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

export const StatisticsHeaderContainer = styled.View`
  height: ${RFValue(150)}px;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

export const StatisticsHeaderInfos = styled.View`
  align-items: center;
  justify-content: center;
  align-self: center;
  text-align: center;
  align-content: center;
`;

export const StatisticsHeaderPercent = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const StatisticsHeaderButton = styled.TouchableOpacity`
  align-self: flex-start;
`;

export const StatisticsHeaderIcon = styled(Feather)`
  align-self: flex-end;
  font-size: ${RFValue(20)}px;
`;

export const StatisticsHeaderText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;
