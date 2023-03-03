import { FoodStorageDTO } from "../storage/food/foodStorageDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      new_food: undefined;
      details: {
        date: string;
        hour: string;
        name: string;
        type: "healthy" | "unhealthy";
        description: string;
      };
      feedback: {
        type: "healthy" | "unhealthy";
      };
    }
  }
}
