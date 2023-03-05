import AsyncStorage from "@react-native-async-storage/async-storage";

import { FOOD_COLLECTION } from "../storageConfig";

import { foodsGetAll } from "./foodsGetAll";

export async function foodRemoveByName(id: string) {
  try {
    const storedFoods = await foodsGetAll();

    const foods = storedFoods.filter((food) => food.id !== id);

    await AsyncStorage.setItem(FOOD_COLLECTION, JSON.stringify(foods));
  } catch (error) {
    throw error;
  }
}
