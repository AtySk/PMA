import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, TextInput, View , Text, Button} from 'react-native';

export default function App() {
  const [task, setTask] = useState("use state");

  function handleInputText(text) {
    setTask(text);
  }

  function handleAddButton() {
    setTask();
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={handleInputText} style={styles.input} placeholder="Zadaj ulohu ..." />
        <Button onPress={handleAddButton} title="ADD" />
      </View>
      <View style={styles.taskContainer}>
        <Text>{task}</Text>
        <Text>UDALOST 1</Text>
        <Text>UDALOST 1</Text>
        <Text>UDALOST 1</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#adadad',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 4, 
    borderColor: "#ff0505", 
    borderRadius: 8, 
    width: "80%"
  },
  taskContainer: {
    flex: 3, 
    borderTopWidth: 2, 
    margin: 20, 
    padding: 20
  },
  inputContainer: {
    flex: 1, 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center"
  }
});

// cisto skuska