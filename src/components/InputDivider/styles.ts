import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const InputDividerContainer = styled.TextInput`
  border-color: ${(props) => props.theme.colors.gray_300};
  border-width: 1px;
  padding: 20px;
  border-radius: 6px;
  width: ${Dimensions.get("screen").width * 0.4};
`;
