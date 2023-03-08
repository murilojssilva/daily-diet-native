import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

interface DetailsTypeIconProps {
  type: "healthy" | "unhealthy";
}

export const DetailsContainer = styled(SafeAreaView)`
  flex: 1;
`;

export const DetailsContent = styled.View`
  flex: 1;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.gray_200};
  margin-top: -20px;
  border-radius: 20px;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextColor = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_700};
  `}
`;

export const TextStyle = styled(TextColor)`
  ${({ theme }) => css`
    color: ${theme.colors.gray_700};
    font-family: ${theme.fonts.regular};
  `}
`;

export const TitleStyle = styled(TextColor)`
  ${({ theme }) => css`
    color: ${theme.colors.gray_700};
    font-family: ${theme.fonts.bold};
  `}
`;

export const DetailsName = styled(TitleStyle)`
  font-size: ${RFValue(22)}px;
`;

export const DetailsDescription = styled(TextStyle)`
  font-size: ${RFValue(16)}px;
`;

export const DetailsDateAndHourTitle = styled(TitleStyle)`
  font-size: ${RFValue(16)}px;
`;

export const DetailsDateAndHourText = styled(TextStyle)`
  font-size: ${RFValue(16)}px;
`;

export const DetailsTypeText = styled(TextStyle)`
  font-size: ${RFValue(16)}px;
`;

export const DetailsTypeTag = styled.View`
  gap: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.gray_300};
  border-radius: 100px;
  width: 50%;
`;

export const DetailsTypeIcon = styled.View<DetailsTypeIconProps>`
  padding: 5px;
  align-self: center;
  border-radius: 6px;
  background-color: ${({ theme, type }) =>
    type === "healthy" ? theme.colors.green_dark : theme.colors.red_dark};
`;

export const DetailsHeader = styled.View`
  flex-direction: row;
  height: ${RFValue(100)}px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.green_light};
`;

export const DetailsHeaderIcon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.gray_700};
`;

export const DetailsHeaderTitle = styled(TitleStyle)`
  font-size: ${RFValue(20)}px;
`;

export const DetailsItems = styled.View`
  gap: 5px;
  padding: 20px 0;
`;

export const DetailsInfos = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;

export const DetailsButtonsContainer = styled.View`
  flex-direction: column;
  gap: 5px;
  padding: 20px;
`;
