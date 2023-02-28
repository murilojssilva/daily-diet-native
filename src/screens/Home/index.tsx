import { useState } from "react";
import { DietCard } from "../../components/DietCard";
import { Header } from "../../components/Header";
import { HomeContainer } from "./styles";
import { NewFood } from "../../components/NewFood";

export function Home() {
  const [percent, setPercent] = useState("70");
  return (
    <HomeContainer>
      <Header />
      <DietCard percent="90" level={percent >= "70" ? "high" : "low"} />
      <NewFood />
    </HomeContainer>
  );
}
