import { View } from "react-native";
import ExpencesSummary from "./ExpencesSummary";
import ExpencesList from "./ExpencesList";

function ExpencesOutput({ expences }) {
  return (
    <View>
      <ExpencesSummary />
      <ExpencesList />
    </View>
  );
}

export default ExpencesOutput;
