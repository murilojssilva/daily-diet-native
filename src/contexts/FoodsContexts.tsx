import React, {
  useState,
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import { FoodStorageDTO } from "@dtos/foodStorageDTO";
import { foodsGetAll } from "@storage/food/foodsGetAll";

interface IFoodContextProps {
  foods: FoodStorageDTO[];
  percent: number;
  bestSequenceInDiet: number;
}

export const FoodsContext = createContext({} as IFoodContextProps);

interface FoodsProviderProps {
  children: ReactNode;
}

export function FoodsProvider({ children }: FoodsProviderProps) {
  const [foods, setFoods] = useState<FoodStorageDTO[]>([]);
  const [percent, setPercent] = useState(0);
  const [bestSequenceInDiet, setBestSequenceInDiet] = useState(0);

  async function fetchFoods() {
    try {
      const data = await foodsGetAll();
      setFoods(data);
      setPercent(
        parseFloat(
          (
            100 *
            (foods.filter((food) => food.type === "healthy").length /
              foods.length)
          ).toFixed(2)
        )
      );
      let bestSequence = 0,
        currentSequence = 0;

      foods.map((food) => {
        if (food.type === "healthy") {
          currentSequence++;
        } else {
          if (currentSequence > bestSequence) {
            bestSequence = currentSequence;
          }
          currentSequence = 0;
        }
      });

      if (currentSequence > bestSequence) {
        bestSequence = currentSequence;
      }

      setBestSequenceInDiet(bestSequence);
    } catch (error) {
      console.log(error);
    }
  }

  useLayoutEffect(
    useCallback(() => {
      fetchFoods();
    }, [foods])
  );

  return (
    <FoodsContext.Provider
      value={{
        foods,
        percent,
        bestSequenceInDiet,
      }}
    >
      {children}
    </FoodsContext.Provider>
  );
}
