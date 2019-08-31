import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...courseGoals, { key: Math.random().toString(), value: goalTitle }]);
  };

  const removeGoalHandler = goalKey => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalKey);
    });
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
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
