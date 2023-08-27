import { StyleSheet, View, Text } from "react-native";
import Input from "./Input";
import { useState } from "react";

function ExpenseForm() {
  const [inputValues, setinputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });
  function inputChangedHandler(inputIdentifier, enteredVlue) {
    setinputValues((curInputValue) => {
      return {
        ...curInputValue,
        [inputIdentifier]: enteredVlue,
      };
    });
  }
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
          style={styles.rowinput}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "description"),
            value: inputValues.description,
          }}
          style={styles.rowinput}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: true,
          //   autoCapitalize: true,
          onChangeText: inputChangedHandler.bind(this, "amount"),
          value: inputValues.amount,
        }}
      />
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 24,
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  rowinput: {
    flex: 1,
  },
});
