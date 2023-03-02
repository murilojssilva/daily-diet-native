import { StatusBar } from "react-native";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import { Home } from "./src/screens/Home";
import { Statistics } from "./src/screens/Statistics";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Statistics />
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
  );
}
