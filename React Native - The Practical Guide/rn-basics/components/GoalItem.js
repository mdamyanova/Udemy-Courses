import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        margin: 10,
        backgroundColor: '#CCC',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default GoalItem;