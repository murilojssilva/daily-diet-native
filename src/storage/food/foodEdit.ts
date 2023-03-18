import AsyncStorage from "@react-native-async-storage/async-storage";

import { FOOD_COLLECTION } from "../storageConfig";

import { foodsGetAll } from "./foodsGetAll";
import { FoodStorageDTO } from "@dtos/foodStorageDTO";

export async function foodEdit(editFood: FoodStorageDTO) {
  try {
    const storedFoods = await foodsGetAll();

    const foods = storedFoods.map(
      (food) =>
        food.data.id === editFood.data.id && {
          title: editFood.title,
          data: {
            id: editFood.data.id,
            name: editFood.data.name,
            type: editFood.data.type,
            hour: editFood.data.hour,
            description: editFood.data.description,
          },
        }
    );

    await AsyncStorage.setItem(FOOD_COLLECTION, JSON.stringify(foods));
  } catch (error) {
    throw error;
  }
}
