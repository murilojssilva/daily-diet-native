import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "react-native";
import AppLoading from "expo-app-loading";

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
import { useCallback, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_600SemiBold,
    NunitoSans_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView onLayout={onLayoutRootView}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />

        <FoodsProvider>
          <Routes />
        </FoodsProvider>
      </SafeAreaView>
    </ThemeProvider>
  );
}
