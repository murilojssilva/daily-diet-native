export type FoodStorageDTO = {
  title: string;
  data: {
    id: string;
    name: string;
    description: string;
    type: "healthy" | "unhealthy";
    hour: string;
  };
};
