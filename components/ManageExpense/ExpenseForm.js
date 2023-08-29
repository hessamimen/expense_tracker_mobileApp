import { StyleSheet, View, Text } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit }) {
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

  function submitHandler() {
    if (isEditing) {
      //currently just add dummy data to implement the real imut data later
      expensesCtx.updateExpense(editedExpenseId, {
        description: "UPDATE TEST",
        amount: 25.25,
        date: new Date("2023-08-12"),
      });
    } else {
      //currently just add dummy data to implement the real imut data later
      expensesCtx.addExpense({
        description: "ADD TEST",
        amount: 25.25,
        date: new Date("2023-08-12"),
      });
    }
    navigation.goBack();
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
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: inputValues.date,
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
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttons}>
        <Button mode="flat" onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {submitButtonLabel}
        </Button>
      </View>
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
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
