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
  level: "high" | "low" | "regular";
  percent: string;
}

export function DietCard({ level, percent }: DietCardProps) {
  const { colors } = useTheme();
  return (
    <DietCardContainer level={level} percent={percent}>
      <DietCardHeader>
        <DietCardIcon
          name="arrow-up-right"
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
