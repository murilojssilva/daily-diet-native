import { useContext } from "react";
import { DietCard } from "../../components/DietCard";
import { Header } from "../../components/Header";
import { HomeContainer } from "./styles";
import { NewFood } from "../../components/NewFood";
import { FoodList } from "../../components/FoodList";
import { FoodsContext } from "../../contexts/FoodsContexts";

export function Home() {
  const { percent } = useContext(FoodsContext);

  return (
    <HomeContainer>
      <Header />
      <DietCard percent={percent} level={percent >= 70 ? "high" : "low"} />
      <NewFood />
      <FoodList />
    </HomeContainer>
  );
}
