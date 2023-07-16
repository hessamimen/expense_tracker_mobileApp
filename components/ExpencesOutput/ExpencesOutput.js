import { View } from "react-native";
import ExpencesSummary from "./ExpencesSummary";
import ExpencesList from "./ExpencesList";

function ExpencesOutput({ expences, expencesPeriod }) {
  return (
    <View>
      <ExpencesSummary expences={expences} periodName={expencesPeriod} />
      <ExpencesList />
    </View>
  );
}

export default ExpencesOutput;
