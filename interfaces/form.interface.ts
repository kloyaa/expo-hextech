import {
  KeyboardTypeOptions,
  TextInput,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface IFormState {
  email: string;
  password: string;
}

export interface FormFieldProps {
  title: string; // Title of the input field
  value: string; // Value of the input field
  placeholder: string; // Placeholder text
  changeText: (text: string) => void; // Function to handle text changes
  keyboardType?: KeyboardTypeOptions; // Keyboard type (optional)
  containerStyles?: ViewStyle; // Custom styles for the container (optional)
  inputStyles?: TextStyle; // Custom styles for the input (optional)
  ref?: React.LegacyRef<TextInput> | undefined;
  options?: {
    isObscure: boolean;
  };
}
