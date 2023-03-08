import { useContext } from "react";
import { StatisticsContainer } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { GeneralStatistics } from "@components/GeneralStatistics";
import { StatisticsHeader } from "@components/StatisticsHeader";
import { FoodsContext } from "@contexts/FoodsContexts";
import { useTheme } from "styled-components/native";

export function Statistics() {
  const { percent } = useContext(FoodsContext);
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  function handleBackOption() {
    navigate("home");
  }
  return (
    <StatisticsContainer
      backgroundColor={percent >= 70 ? colors.green_light : colors.red_light}
    >
      <StatisticsHeader percent={percent} backOption={handleBackOption} />
      <GeneralStatistics />
    </StatisticsContainer>
  );
}
