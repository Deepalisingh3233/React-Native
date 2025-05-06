import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GaolInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

 

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...courseGoals, { text: enteredGoalText, id: Math.random().toString() }]);
  };

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id != id);
    });
  }

  return (
    <View style={styles.appContainer}>
     <View> 
        <Text style={styles.heading}> To Do List </Text>
      </View>
      
      <GoalInput onAddGoal={addGoalHandler}/>
      <View>
        <Text>Tap the text to delete the task.</Text>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={itemData => {
          return <GoalItem 
          text = {itemData.item.text} 
          id = {itemData.item.id} 
          onDeleteItem = {deleteGoalHandler}/>;
        }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false} />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  
  goalsContainer: {
    flex: 5,
  },
  
  heading: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 700,
    marginTop: 20,
  }
});
