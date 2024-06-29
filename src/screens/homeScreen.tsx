import React from "react";
import { Image, SafeAreaView, StatusBar, Text, TextInput, View } from "react-native";
import { styled } from "nativewind";

const StyledImage = styled(Image);

const HomeScreen: React.FC = () => {
    return (
        <SafeAreaView className="flex-1">
            <StatusBar translucent={true} backgroundColor="transparent" />
            <View className="bg-[#313131] h-[220px]">
                <TextInput
                    className="rounded-lg p-2 m-2 bg-white mt-14 mx-7"
                    placeholder="Search"
                />
            </View>
            <View className="flex justify-center items-center mt-[-70px]">
                <View className="relative">
                    <StyledImage
                        source={require('../../assets/hero2.png')}
                        className="rounded-xl "
                        resizeMode="cover"
                    />
                    <View className="absolute ml-2 mt-1 bg-[#ED5151] rounded-lg inset-0 justify-center items-center">
                        <Text className="text-white text-sm p-1 font-semibold " style={{ fontFamily: "sora-regular" }}>Promo</Text>
                    </View>
                    <View className="absolute mt-5 right-10">
                        <Text className="text-[#C67C4E] text-3xl font-bold p-5 w-72" style={{ fontFamily: "sora-regular" }}>Buy one get one free</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;
