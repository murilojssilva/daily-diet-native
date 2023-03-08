import { FoodStorageDTO } from "../dtos/foodStorageDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      new_food: undefined;
      details: FoodStorageDTO;
      edit_food: FoodStorageDTO;
      feedback: {
        type: "healthy" | "unhealthy";
      };
    }
  }
}
