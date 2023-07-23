import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

function rederExpenceItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}
function ExpencesList({ expences }) {
  return (
    <FlatList
      data={expences}
      renderItem={rederExpenceItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpencesList;
