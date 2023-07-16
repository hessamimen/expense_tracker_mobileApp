import { FlatList } from "react-native";
import { Text } from "react-native";

function ExpencesList({ expences }) {
  function rederExpenceItem(itemData) {
    return <Text>{itemData.item.title}</Text>;
  }
  return (
    <FlatList
      data={expences}
      renderItem={rederExpenceItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpencesList;
