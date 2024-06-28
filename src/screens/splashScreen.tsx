import React, { useEffect } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
    navigation: StackNavigationProp<any>;
}

const SplashScreen: React.FC<Props> = ({ navigation }) => {

    useEffect(() => {
        const timeOut = setTimeout(() => {
            navigation.replace('MainApp');
        }, 3000);

        return () => clearTimeout(timeOut);
    }, [navigation]);

    return (
        <ImageBackground source={require('../../assets/splash2.png')} className="flex-1 justify-end items-center">
            <View>
                <Text className="text-center mb-10 text-white text-4xl font-semibold p-5">Coffe so good, your taste buds will love it.</Text>
            </View>

        </ImageBackground>
    );
}

export default SplashScreen;
