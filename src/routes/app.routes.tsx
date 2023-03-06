import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Statistics } from "../screens/Statistics";
import { Home } from "../screens/Home";
import { AddNewFood } from "../screens/Forms/AddNewFood";
import { Details } from "../screens/Details";
import { Feedback } from "../screens/Feedback";
import { EditFood } from "../screens/Forms/EditFood";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="details" component={Details} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="new_food" component={AddNewFood} />
      <Screen name="edit_food" component={EditFood} />
    </Navigator>
  );
}
