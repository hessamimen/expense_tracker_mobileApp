import axios from "axios";

export function storeExpense(expenseData) {
  return axios.post(
    "https://react-native-expense-tra-dce1f-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
