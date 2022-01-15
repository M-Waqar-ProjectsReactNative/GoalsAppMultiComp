import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalsList = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.itemList}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemList: {
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#ccc",
  },
});

export default GoalsList;
