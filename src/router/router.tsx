import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SplashScreen from "../screens/splashScreen";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const Stack = createNativeStackNavigator();

const MainApp = () => {
    return (
        <View className="flex-1 justify-center items-center">
            <Text className="text-center">Hello world!</Text>
        </View>


    );
}
const RouteHandler = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
        </Stack.Navigator>

    );
};




export default RouteHandler;