import { FoodStorageDTO } from "../storage/food/foodStorageDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      new_food: undefined;
      details: {
        id: string;
        date: string;
        hour: string;
        name: string;
        type: "healthy" | "unhealthy";
        description: string;
      };
      edit_food: {
        id: string;
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
