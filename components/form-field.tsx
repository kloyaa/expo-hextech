import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons"; // Install if not available

// Define the props interface
interface FormFieldProps {
  title: string; // Title of the input field
  value: string; // Value of the input field
  placeholder: string; // Placeholder text
  changeText: (text: string) => void; // Function to handle text changes
  keyboardType?: KeyboardTypeOptions; // Keyboard type (optional)
  containerStyles?: ViewStyle; // Custom styles for the container (optional)
  inputStyles?: TextStyle; // Custom styles for the input (optional)
  options?: {
    isObscure: boolean;
  };
}
const FormField: React.FC<FormFieldProps> = ({
  title,
  keyboardType,
  value,
  placeholder,
  changeText,
  containerStyles,
  inputStyles,
  options,
}) => {
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <View style={[styles.container, containerStyles]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, inputStyles]}
          keyboardType={keyboardType}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7F7F7F"
          onChangeText={changeText}
          secureTextEntry={options?.isObscure && !togglePassword}
        />
        {options?.isObscure && (
          <TouchableOpacity
            onPress={() => setTogglePassword(!togglePassword)}
            style={styles.icon}
          >
            <Ionicons
              name={togglePassword ? "eye" : "eye-off"}
              size={20}
              color="#7F7F7F"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  title: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  input: {
    flex: 1,
    height: 40,
    color: "#fff",
  },
  icon: {
    padding: 10,
  },
});

export default FormField;
