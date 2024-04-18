const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SplashScreen from "./screens/SplashScreen";
import Home0101 from "./screens/Home0101";
import ListCategoriesProducts01 from "./screens/ListCategoriesProducts01";
import ListProducts0101 from "./screens/ListProducts0101";
import Product0101 from "./screens/Product0101";
import Search0102 from "./screens/Search0102";
import Signup0101 from "./screens/Signup0101";
import Signup01011 from "./screens/Signup01011";
import Signup01012 from "./screens/Signup01012";
import Signup01013 from "./screens/Signup01013";
import Product01011 from "./screens/Product01011";
import Commerce0101 from "./screens/Commerce0101";
import Search0101 from "./screens/Search0101";
import ListProducts01011 from "./screens/ListProducts01011";
import Chat0101 from "./screens/Chat0101";
import CommerceProducts0101 from "./screens/CommerceProducts0101";
import Search01011 from "./screens/Search01011";
import ListCategoriesProducts011 from "./screens/ListCategoriesProducts011";
import Home01011 from "./screens/Home01011";
import Signin0101 from "./screens/Signin0101";
import Forgotpassword0101 from "./screens/Forgotpassword0101";
import Signup01014 from "./screens/Signup01014";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Medium": require("./assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Bold": require("./assets/fonts/Rubik-Bold.ttf"),
    "Freehand-Regular": require("./assets/fonts/Freehand-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home0101"
              component={Home0101}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ListCategoriesProducts01"
              component={ListCategoriesProducts01}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ListProducts0101"
              component={ListProducts0101}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Product0101"
              component={Product0101}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search0102"
              component={Search0102}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup0101"
              component={Signup0101}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup01011"
              component={Signup01011}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup01012"
              component={Signup01012}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup01013"
              component={Signup01013}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Product01011"
              component={Product01011}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Commerce0101"
              component={Commerce0101}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search0101"
              component={Search0101}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ListProducts01011"
              component={ListProducts01011}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat0101"
              component={Chat0101}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CommerceProducts0101"
              component={CommerceProducts0101}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search01011"
              component={Search01011}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ListCategoriesProducts011"
              component={ListCategoriesProducts011}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home01011"
              component={Home01011}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signin0101"
              component={Signin0101}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Forgotpassword0101"
              component={Forgotpassword0101}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup01014"
              component={Signup01014}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
