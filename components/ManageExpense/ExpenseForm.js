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
          placeHolder: "YYYY-MM-DD",
          maxength: 10,
          onChangeText: () => {},
        }}
      />
      <Input label="Description" />
    </View>
  );
}

export default ExpenseForm;
