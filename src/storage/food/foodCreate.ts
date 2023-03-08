import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_COLLECTION } from "../storageConfig";
import { foodsGetAll } from "./foodsGetAll";
import { FoodStorageDTO } from "@dtos/foodStorageDTO";

export async function foodCreate(food: FoodStorageDTO) {
  try {
    const storedFoods = await foodsGetAll();

    const storage = JSON.stringify([...storedFoods, food]);
    await AsyncStorage.setItem(FOOD_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
