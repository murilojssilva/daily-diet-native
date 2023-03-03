import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_COLLECTION } from "../storageConfig";
import { FoodStorageDTO } from "./foodStorageDTO";

export async function foodsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(FOOD_COLLECTION);

    const foods: FoodStorageDTO[] = storage ? JSON.parse(storage) : [];

    return foods;
  } catch (error) {
    throw error;
  }
}
