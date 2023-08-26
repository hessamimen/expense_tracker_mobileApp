import { TextInput, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/style";

function Input({ label, textInputConfig, style }) {
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...textInputConfig}
        style={[
          styles.input,
          textInputConfig?.multiline && styles.inputMultiline,
        ]}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },

  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
