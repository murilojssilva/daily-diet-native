import { ActivityIndicator } from "react-native";
import { LoadingContainer } from "./styles";
import { useTheme } from "styled-components/native";

export function Loading() {
  const theme = useTheme();
  return (
    <LoadingContainer>
      <ActivityIndicator size={64} color={theme.colors.gray_700} />
    </LoadingContainer>
  );
}
