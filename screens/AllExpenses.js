import { useContext } from "react";
import ExpencesOutput from "../components/ExpencesOutput/ExpencesOutput";
import { ExpensesContext } from "../store/expense-context";

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpencesOutput expences={expensesCtx.expenses} expencesPeriod="Total" />
  );
}

export default AllExpenses;
