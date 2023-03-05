import AsyncStorage from "@react-native-async-storage/async-storage";

import { FOOD_COLLECTION } from "../storageConfig";

import { foodsGetAll } from "./foodsGetAll";
import { FoodStorageDTO } from "./foodStorageDTO";

export async function foodEdit(editFood: FoodStorageDTO) {
  try {
    const storedFoods = await foodsGetAll();

    const foods = storedFoods.map(
      (food) =>
        food.id === editFood.id && {
          id: editFood.id,
          name: editFood.name,
          type: editFood.type,
          date: editFood.date,
          hour: editFood.hour,
          description: editFood.description,
        }
    );

    await AsyncStorage.setItem(FOOD_COLLECTION, JSON.stringify(foods));
  } catch (error) {
    throw error;
  }
}
