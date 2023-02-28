import { useTheme } from "styled-components";
import {
  DietCardContainer,
  DietCardContent,
  DietCardHeader,
  DietCardIcon,
  DietCardPercent,
  DietCardText,
} from "./styles";

interface DietCardProps {
  level: "high" | "low";
  percent: string;
}

export function DietCard({ level, percent }: DietCardProps) {
  const { colors } = useTheme();
  return (
    <DietCardContainer level={level} percent={percent}>
      <DietCardHeader>
        <DietCardIcon
          name={level === "high" ? "arrow-up-right" : "arrow-down-left"}
          color={level === "high" ? colors.green_dark : colors.red_dark}
        />
      </DietCardHeader>
      <DietCardContent>
        <DietCardPercent>{percent}%</DietCardPercent>
        <DietCardText>das refeições dentro da dieta</DietCardText>
      </DietCardContent>
    </DietCardContainer>
  );
}
