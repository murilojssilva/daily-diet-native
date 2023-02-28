import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const ButtonContainer = styled.TouchableOpacity`
  height: 50px;
  border-radius: 8px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.gray_600};
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.gray_0};
  font-weight: bold;
`;

export const ButtonIcon = styled(Feather)`
  color: ${(props) => props.theme.colors.gray_0};
  font-size: ${RFValue(14)}px;
`;
