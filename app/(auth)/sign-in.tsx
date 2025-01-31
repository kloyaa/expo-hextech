import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import FormField from "../../components/form-field";
import CustomButton from "@/components/custom-buttom";

interface FormState {
  email: string;
  password: string;
}

const SignIn = () => {
  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full flex justify-between items-start h-full px-4 py-5">
          <View className="flex justify-start items-start w-full">
            <Image
              source={images.arcaneLogo}
              className="w-[155px] h-[50px] -left-3"
              resizeMode="contain"
            />
            <Text className="text-white font-plight text-[16px] text-center">
              Login to <Text className="text-secondary">Hextech</Text>
            </Text>
            <View className="w-full mt-[30px]">
              <FormField
                title="Email"
                value={form.email}
                placeholder="Enter your email"
                changeText={(e) => {
                  setForm({
                    ...form,
                    email: e,
                  });
                }}
              />
              <FormField
                title="Password"
                value={form.password}
                placeholder="Enter your password"
                changeText={(e) => {
                  setForm({
                    ...form,
                    password: e,
                  });
                }}
                options={
                  {
                    isObscure: true,
                  }
                }
              />
            </View>
          </View>

          <CustomButton
            title={"Sign in"}
            containerStyles={{ width: "100%" }}
            textStyles={{ fontSize: 14 }}
            handlePress={() => {
              // router.push("/sign-in");
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
