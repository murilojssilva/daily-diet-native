import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const GeneralStatisticsContainer = styled.View`
  flex: 1;
  padding: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.gray_100};
`;

export const GeneralStatisticsTitle = styled.Text`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${RFValue(14)}px;
`;

export const GeneralStatisticsCardContent = styled.View`
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
