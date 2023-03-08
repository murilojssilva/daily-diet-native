import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const GeneralStatisticsContainer = styled.View`
  flex: 1;
  padding: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.gray_100};
  border-radius: 20px;
  margin: -30px 0;
`;

export const GeneralStatisticsTitle = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
`;

export const GeneralStatisticsCardContent = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;
