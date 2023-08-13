import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-08-10"),
  },
  {
    id: "e2",
    description: "A pair of glasses",
    amount: 89.29,
    date: new Date("2023-08-09"),
  },
  {
    id: "e3",
    description: "some bananas",
    amount: 5.99,
    date: new Date("2023-08-01"),
  },
  {
    id: "e4",
    description: "a book",
    amount: 14.99,
    date: new Date("2023-02-04"),
  },
  {
    id: "e5",
    description: "anouther book",
    amount: 18.59,
    date: new Date("2023-02-28"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-08-13"),
  },
  {
    id: "e7",
    description: "A pair of glasses",
    amount: 89.29,
    date: new Date("2023-08-09"),
  },
  {
    id: "e8",
    description: "some bananas",
    amount: 5.99,
    date: new Date("2023-08-12"),
  },
  {
    id: "e9",
    description: "a book",
    amount: 14.99,
    date: new Date("2023-02-04"),
  },
  {
    id: "e10",
    description: "anouther book",
    amount: 18.59,
    date: new Date("2023-02-28"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];

    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updateExpenses = [...state];
      updateExpenses[updatableExpenseIndex] = updatedItem;
      return updateExpenses;

    case "DELETE":
      return state.filter((expense) => expense.id != action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
