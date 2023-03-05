import {
  StatisticsCardContainer,
  StatisticsCardContent,
  StatisticsCardPercent,
  StatisticsCardText,
} from "./styles";

interface StatisticsCardProps {
  level: "high" | "low" | "regular";
  percent: number;
  text: string;
}

export function StatisticsCard({ level, percent, text }: StatisticsCardProps) {
  return (
    <StatisticsCardContainer level={level} percent={percent}>
      <StatisticsCardContent>
        <StatisticsCardPercent>{percent}</StatisticsCardPercent>
        <StatisticsCardText>{text}</StatisticsCardText>
      </StatisticsCardContent>
    </StatisticsCardContainer>
  );
}
