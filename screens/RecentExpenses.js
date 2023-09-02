import { useContext, useEffect } from "react";
import ExpencesOutput from "../components/ExpencesOutput/ExpencesOutput";
import { ExpensesContext } from "../store/expense-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
    }

    getExpenses();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });
  return (
    <ExpencesOutput
      expences={recentExpenses}
      expencesPeriod="Last 7 days"
      fallbackText="No expences is registered for the last 7 days."
    />
  );
}

export default RecentExpenses;
