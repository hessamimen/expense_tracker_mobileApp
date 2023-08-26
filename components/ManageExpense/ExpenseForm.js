import { View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  function amountChangeHndler() {}
  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangeHndler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCorrect: true,
          //   autoCapitalize: true,
          onChangeText: () => {},
        }}
      />
    </View>
  );
}

export default ExpenseForm;
