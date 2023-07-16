import { View } from "react-native";
import ExpencesSummary from "./ExpencesSummary";
import ExpencesList from "./ExpencesList";

function ExpencesOutput({ expences, expencesPeriod }) {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "A pair of shoes",
      amount: 59.99,
      date: new Date("2021-12-19"),
    },
    {
      id: "e2",
      title: "A pair of glasses",
      amount: 89.29,
      date: new Date("2022-01-09"),
    },
    {
      id: "e3",
      title: "some bananas",
      amount: 5.99,
      date: new Date("2021-12-01"),
    },
    { id: "e4", title: "a book", amount: 14.99, date: new Date("2022-02-04") },
    {
      id: "e5",
      title: "anouther book",
      amount: 18.59,
      date: new Date("2022-02-28"),
    },
  ];
  return (
    <View>
      <ExpencesSummary expences={DUMMY_EXPENSES} periodName={expencesPeriod} />
      <ExpencesList expences={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpencesOutput;
