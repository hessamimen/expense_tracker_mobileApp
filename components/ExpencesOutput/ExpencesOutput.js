import { StyleSheet, Text, View } from "react-native";
import ExpencesSummary from "./ExpencesSummary";
import ExpencesList from "./ExpencesList";
import { GlobalStyles } from "../../constants/style";

function ExpencesOutput({ expences, expencesPeriod, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expences.length > 0) {
    content = <ExpencesList expences={expences} />;
  }
  return (
    <View style={styles.container}>
      <ExpencesSummary expences={expences} periodName={expencesPeriod} />
      {content}
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
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
