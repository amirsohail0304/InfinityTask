import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import colors from './colors';

interface TextInputPropsWithPlaceholderTextColor extends TextInputProps {
  placeholderTextColor?: string;
}

const CustomTextInput: React.FC<TextInputPropsWithPlaceholderTextColor> = ({
  placeholderTextColor = colors.placeholder,
  ...rest
}) => {
  return (
    <TextInput
      {...rest}
      placeholderTextColor={placeholderTextColor}

    />
  );
};

export default CustomTextInput;
