import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { FC } from "react";

interface IField {
  onChange: (val: string) => void;
  placeholder: string;
  value: string;
  isSecure?: boolean;
}

const Field: FC<IField> = ({ onChange, placeholder, value, isSecure }) => {
  return (
    <TextInput
      showSoftInputOnFocus={false}
      onChangeText={onChange}
      placeholder={placeholder}
      value={value}
      secureTextEntry={isSecure}
      autoCapitalize="none"
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input:{
    width: '100%',
    backgroundColor: '#e8e8f8',
    color: 'black',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10 
  }
})

export default Field;
