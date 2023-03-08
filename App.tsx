import { StatusBar } from "react-native";

import theme from "./src/styles/theme";
import { ThemeProvider } from "styled-components";

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_600SemiBold,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import { Routes } from "./src/routes";
import { FoodsProvider } from "@contexts/FoodsContexts";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_600SemiBold,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <FoodsProvider>{fontsLoaded ? <Routes /> : <Loading />}</FoodsProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
  );
}
