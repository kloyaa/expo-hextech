import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { forwardRef, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../../constants';
import CustomButton from '@/components/custom-buttom';
import { FormFieldProps, IFormState } from '@/interfaces/form.interface';
import FormField from '@/components/form-field';

const FormFieldForwardRef = forwardRef<TextInput, Omit<FormFieldProps, 'ref'>>(
  (props, ref) => <FormField ref={ref} {...props} />
);

FormFieldForwardRef.displayName = 'FormFieldRef'; // Add this line

const SignIn = (): JSX.Element => {
  const usernameRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const [form, setForm] = useState<IFormState>({
    email: '',
    password: '',
  });

  const submit = (): void => {
    if (form.email.trim() === '') {
      return usernameRef.current?.focus();
    }

    if (form.password.trim() === '') {
      return passwordRef.current?.focus();
    }

    console.log(form);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
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
              <FormFieldForwardRef
                ref={usernameRef}
                title="Email"
                value={form.email}
                placeholder="Enter your email"
                changeText={(e: string) => {
                  setForm({
                    ...form,
                    email: e,
                  });
                }}
              />

              <FormFieldForwardRef
                ref={passwordRef}
                title="Password"
                value={form.password}
                placeholder="Enter your password"
                changeText={(e) => {
                  setForm({
                    ...form,
                    password: e,
                  });
                }}
                options={{
                  isObscure: true,
                }}
              />
            </View>
          </View>

          <CustomButton
            title={'Sign in'}
            containerStyles={styles.customButtonSignInContainerStyles}
            textStyles={styles.customButtonSignInTextStyles}
            handlePress={submit}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  contentContainerStyle: {
    height: '100%',
  },
  customButtonSignInContainerStyles: {
    width: '100%',
  },
  customButtonSignInTextStyles: {
    fontSize: 14,
  },
});
