import { useNavigation } from "@react-navigation/native";
import { GeneralStatistics } from "../../components/GeneralStatistics";
import { StatisticsHeader } from "../../components/StatisticsHeader";
import { StatisticsContainer } from "./styles";
import { useContext } from "react";

import { FoodsContext } from "../../contexts/FoodsContexts";

export function Statistics() {
  const { percent } = useContext(FoodsContext);
  const navigation = useNavigation();

  function handleBackOption() {
    navigation.navigate("home");
  }
  return (
    <StatisticsContainer>
      <StatisticsHeader percent={percent} backOption={handleBackOption} />
      <GeneralStatistics />
    </StatisticsContainer>
  );
}
