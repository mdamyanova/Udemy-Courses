import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryMealScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>CategoryMealScreen</Text>
            <Button title='DETAILS' onPress={() => {
                props.navigation.navigate({ routeName: 'MealDetails' });
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealScreen;