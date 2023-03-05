import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

interface DetailsTypeIconProps {
  type: "healthy" | "unhealthy";
}

export const DetailsContainer = styled.View`
  flex: 1;
`;

export const DetailsContent = styled.View`
  flex: 1;
  padding: 40px 20px;
  background-color: ${(props) => props.theme.colors.gray_200};
  margin-top: -20px;
  border-radius: 20px;
  flex-direction: column;
  justify-content: space-between;
`;

export const DetailsName = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.gray_700};
`;

export const DetailsDescription = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.gray_700};
`;

export const DetailsDateAndHourTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.gray_700};
`;

export const DetailsDateAndHourText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.gray_700};
`;

export const DetailsTypeTag = styled.View`
  gap: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.gray_300};
  border-radius: 100px;
  width: 50%;
`;

export const DetailsTypeIcon = styled.View<DetailsTypeIconProps>`
  padding: 5px;
  align-self: center;
  border-radius: 6px;
  background-color: ${(props) =>
    props.type === "healthy"
      ? props.theme.colors.green_dark
      : props.theme.colors.red_dark};
`;

export const DetailsTypeText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.gray_700};
`;

export const DetailsHeader = styled.View`
  flex-direction: row;
  height: ${RFValue(100)}px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.green_light};
`;

export const DetailsHeaderIcon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${(props) => props.theme.colors.gray_700};
`;

export const DetailsHeaderTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.gray_700};
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
