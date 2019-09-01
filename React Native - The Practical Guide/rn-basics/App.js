import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...courseGoals, { key: Math.random().toString(), value: goalTitle }]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalKey => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalKey);
    });
  }

  const cancelGoalAddHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title='Add new goal' onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAddHandler} />
      <FlatList data={courseGoals} renderItem={itemData => (
        <GoalItem title={itemData.item.value} goalKey={itemData.item.key} onDelete={removeGoalHandler} />
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
