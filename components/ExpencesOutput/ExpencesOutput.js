import { StyleSheet, View } from "react-native";
import ExpencesSummary from "./ExpencesSummary";
import ExpencesList from "./ExpencesList";
import { GlobalStyles } from "../../constants/style";

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
    {
      id: "e6",
      title: "A pair of shoes",
      amount: 59.99,
      date: new Date("2021-12-19"),
    },
    {
      id: "e7",
      title: "A pair of glasses",
      amount: 89.29,
      date: new Date("2022-01-09"),
    },
    {
      id: "e8",
      title: "some bananas",
      amount: 5.99,
      date: new Date("2021-12-01"),
    },
    { id: "e9", title: "a book", amount: 14.99, date: new Date("2022-02-04") },
    {
      id: "e10",
      title: "anouther book",
      amount: 18.59,
      date: new Date("2022-02-28"),
    },
  ];
  return (
    <View style={styles.container}>
      <ExpencesSummary expences={DUMMY_EXPENSES} periodName={expencesPeriod} />
      <ExpencesList expences={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpencesOutput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
});
