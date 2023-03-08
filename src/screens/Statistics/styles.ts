import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface StatisticsContainerProps {
  backgroundColor: string;
}

export const StatisticsContainer = styled(
  SafeAreaView
)<StatisticsContainerProps>`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
