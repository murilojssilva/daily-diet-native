export type FoodStorageDTO = {
  id: string;
  name: string;
  description: string;
  type: "healthy" | "unhealthy";
  date: string;
  hour: string;
};
