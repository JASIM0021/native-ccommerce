import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ButtomTabNavigation from "./src/navigation/ButtomTabNavigation";
import { Cart, ProductDetails } from "./src/screens";
import NavigationString from "./src/constants/NavigationString";

const Stack = createNativeStackNavigator();
export default function App() {
  const [fontLoader] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extraBold: require("./assets/fonts/Poppins-Regular.ttf"),
    semiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoader) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoader]);

  if (!fontLoader) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={NavigationString.BottomNavigation}
          component={ButtomTabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={NavigationString.Cart}
          component={Cart}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={NavigationString.ProductDetails}
          component={ProductDetails}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontFamily: "extraBold",
    fontSize: 20,
  },
});
