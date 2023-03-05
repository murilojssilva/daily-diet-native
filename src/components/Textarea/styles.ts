import { Dimensions, TextInput, TextInputProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const TextareaContainer = styled.TextInput.attrs({
  multiline: true,
})`
  height: ${RFValue(150)}px;
  border-color: ${(props) => props.theme.colors.gray_300};
  border-width: 1px;
  padding: 20px;
  border-radius: 6px;
  width: ${Dimensions.get("screen").width * 0.8};
`;
