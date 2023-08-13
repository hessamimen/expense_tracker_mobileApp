import { StyleSheet, View } from "react-native";
import ExpencesSummary from "./ExpencesSummary";
import ExpencesList from "./ExpencesList";
import { GlobalStyles } from "../../constants/style";

function ExpencesOutput({ expences, expencesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpencesSummary expences={expences} periodName={expencesPeriod} />
      <ExpencesList expences={expences} />
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
