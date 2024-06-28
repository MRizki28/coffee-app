import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SplashScreen from "../screens/splashScreen";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homeScreen";
import SettingsScreen from "../screens/settingsScreen";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCog } from '@fortawesome/free-solid-svg-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ size, focused }) => {
                    if (route.name === 'Home') {
                        return <FontAwesomeIcon icon={faHome} size={size} color={focused ? '#C67C4E' : 'black'} />;
                    } else if (route.name === 'Settings') {
                        return <FontAwesomeIcon icon={faCog} size={size} color={focused ? '#C67C4E' : 'black'} />;
                    }
                    return null;
                },
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 70,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginBottom: 5,
                },
                tabBarInactiveTintColor: '#000000',
                tabBarActiveTintColor: '#C67C4E',
                headerShown: false,
                tabBarShowLabel: true,
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
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
