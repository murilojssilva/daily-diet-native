import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface DietCardContainerProps {
  level: "high" | "low" | "regular";
  percent: number;
}

export const DietCardContainer = styled.TouchableOpacity<DietCardContainerProps>`
  padding: 20px 10px;
  margin: 10px;
  background-color: ${({ level, theme }) =>
    level === "high" ? theme.colors.green_light : theme.colors.red_light};

  border-radius: 6px;
`;

export const DietCardHeader = styled.View``;

export const DietCardIcon = styled(Feather)<DietCardContainerProps>`
  align-self: flex-end;
  font-size: ${RFValue(20)}px;
`;

export const DietCardContent = styled.View`
  align-items: center;
`;

export const DietCardPercent = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const DietCardText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;
