import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, { forwardRef, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Install if not available
import { FormFieldProps } from '@/interfaces/form.interface';

// Define the props interface

const FormField = forwardRef<TextInput, FormFieldProps>((props, ref) => {
  // Correct type definition
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <View style={[styles.container, props.containerStyles]}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          ref={ref} // Correct ref forwarding
          style={[styles.input, props.inputStyles]}
          keyboardType={props.keyboardType}
          value={props.value}
          placeholder={props.placeholder}
          placeholderTextColor="#7F7F7F"
          onChangeText={props.changeText}
          secureTextEntry={props.options?.isObscure && !togglePassword}
        />
        {props.options?.isObscure && (
          <TouchableOpacity
            onPress={() => setTogglePassword(!togglePassword)}
            style={styles.icon}
          >
            <Ionicons
              name={togglePassword ? 'eye' : 'eye-off'}
              size={20}
              color="#7F7F7F"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
});

FormField.displayName = 'FormField';

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  icon: {
    padding: 10,
  },
  input: {
    color: '#fff',
    flex: 1,
  },
  inputContainer: {
    alignItems: 'center',
    borderColor: '#2c2c42',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 10,
  },
  title: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },
});

export default FormField;
