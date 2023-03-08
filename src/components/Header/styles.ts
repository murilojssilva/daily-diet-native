import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  height: ${RFValue(150)}px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 10px;
`;

export const HeaderAvatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 100px;
  border-color: black;
  border-width: 2px;
`;
