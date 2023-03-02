import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOOD_COLLECTION } from "../storageConfig";

interface FoodProps {
  text: string;
  type: "healthy" | "not_healthy";
  date: Date;
  hour: string;
}

export async function foodsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(FOOD_COLLECTION);

    const foods: FoodProps[] = storage ? JSON.parse(storage) : [];

    return foods;
  } catch (error) {
    throw error;
  }
}
