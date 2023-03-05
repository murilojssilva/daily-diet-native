import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "react-native";
import AppLoading from "expo-app-loading";

SplashScreen.preventAutoHideAsync();
SplashScreen.hideAsync();

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_600SemiBold,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import { Routes } from "./src/routes";
import { FoodsProvider } from "./src/contexts/FoodsContexts";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_600SemiBold,
    NunitoSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <FoodsProvider>
        <Routes />
      </FoodsProvider>
    </ThemeProvider>
  );
}
