import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalsInput = (props) => {
  const [goals, setGoals] = useState("");

  const inputChange = (text) => {
    setGoals(text);
  };

  const addGoalHandler = () => {
    props.onAddGoal(goals);
    setGoals("");
  };

  const cancleGoalHandler = () => {
    props.onCancle();
    setGoals("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          value={goals}
          onChangeText={inputChange}
          style={styles.input}
          placeholder="Enter Goal"
        />
        <View style={styles.btnContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={cancleGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "48%",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default GoalsInput;
