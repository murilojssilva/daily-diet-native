import { useNavigation } from "@react-navigation/native";
import { GeneralStatistics } from "../../components/GeneralStatistics";
import { StatisticsHeader } from "../../components/StatisticsHeader";
import { StatisticsContainer } from "./styles";
import { useLayoutEffect, useState } from "react";
import { FoodStorageDTO } from "../../storage/food/foodStorageDTO";
import { foodsGetAll } from "../../storage/food/foodsGetAll";

export function Statistics() {
  const [percent, setPercent] = useState(0);
  const [foods, setFoods] = useState<FoodStorageDTO[]>([]);

  useLayoutEffect(() => {
    async function fetchFoods() {
      try {
        const data = await foodsGetAll();
        setFoods(data);
        setPercent(
          100 *
            (foods.filter((food) => food.type === "healthy").length /
              foods.length)
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchFoods();
  }, [foods]);
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
