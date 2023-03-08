import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";
import MaskInput from "react-native-mask-input";

interface InputContainerType {
  type: "name" | "dateOrHour";
}

export const InputContainer = styled(MaskInput)<InputContainerType>`
  border-color: ${({ theme }) => theme.colors.gray_300};
  border-width: 1px;
  padding: 20px;
  border-radius: 6px;

  ${({ type }) => css`
  width: ${
    type === "name"
      ? Dimensions.get("screen").width * 0.8
      : Dimensions.get("screen").width * 0.4
  }}px`};
`;
