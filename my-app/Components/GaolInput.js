import { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

function GoalInput(props){
      const [enteredGoalText, setEnteredGoalText] = useState('');

      function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      };

      function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
      }

    return ( 
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Enter your Task..' onChangeText={goalInputHandler} value= {enteredGoalText} />
        <Button title='Add Task' onPress={addGoalHandler} />
      </View>
      );
}

export default GoalInput;

const styles =StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '80%',
        marginRight: 8,
        padding: 8,
        borderRadius: 8,
        fontSize: 20
      },
});