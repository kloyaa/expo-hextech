import { View, ScrollView, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import { router } from "expo-router";
import CustomButton from "../components/custom-buttom";
import { images } from "../constants";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full flex justify-between items-center h-full px-4 py-5">
          <View className="flex justify-center items-center w-full">
            <Image
              source={images.arcaneLogo}
              className="w-[130px] h-[84px]"
              resizeMode="contain"
            />
            <Image
              source={images.cards}
              className="max-w-[380px] w-full h-[298px]"
              resizeMode="contain"
            />

            <View className="relative mt-5">
              <Text className="text-white font-pbold text-3xl text-center">
                Discover Endless Possibilities with our new{" "}
                <Text className="text-secondary">Hextech</Text>
              </Text>
            </View>
            <Text className="text-[12px] font-pregular text-gray-100 mt-7 text-center">
              Where necessity is the mother of innovation
            </Text>
          </View>

          <View className="w-full flex justify-center items-center">
            <CustomButton
              title={"Get started"}
              containerStyles={{ width: "100%" }}
              textStyles={{ fontSize: 14 }}
              handlePress={() => {
                router.push("/sign-in");
              }}
            />
            <Text className="text-[12px] text-gray-600 my-3 text-center">
              or
            </Text>
            <CustomButton
              title={"Don't have an account?"}
              containerStyles={{ backgroundColor: "#2c2c42", width: "100%" }}
              textStyles={{ fontSize: 12, color: "#fff", fontWeight: "400" }}
              handlePress={() => {
                router.push("/sign-up");
              }}
            />
          </View>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
