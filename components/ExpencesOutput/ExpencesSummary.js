import { View, Text } from "react-native";

function ExpencesSummary({ expences, periodName }) {
  const expencesSUM = expences.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expencesSUM.toFixed()}</Text>
    </View>
  );
}

export default ExpencesSummary;
