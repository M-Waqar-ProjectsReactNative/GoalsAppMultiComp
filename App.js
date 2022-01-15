import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalsInput from "./components/GoalsInput";
import GoalsList from "./components/GoalsList";

export default function App() {
  const [goalList, setGoalList] = useState("");
  const [isAddMode, setIsAddMode] = useState(false);
  const addGoal = (goalText) => {
    setGoalList((prevList) => [
      { id: Math.random().toString(), goal: goalText },
      ...prevList,
    ]);
    setIsAddMode(false);
  };
  const deleteGoal = (goalId) => {
    setGoalList((currentList) => {
      return currentList.filter((item) => item.id !== goalId);
    });
  };
  const cancleAddGoal = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalsInput
        visible={isAddMode}
        onAddGoal={addGoal}
        onCancle={cancleAddGoal}
      />
      <FlatList
        data={goalList}
        renderItem={(itemList) => (
          <GoalsList
            onDelete={deleteGoal}
            id={itemList.item.id}
            title={itemList.item.goal}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40,
  },
});
