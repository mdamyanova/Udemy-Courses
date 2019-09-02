import React from 'react';
import { View, Text, Title, StyleSheet } from 'react-native';

const MealDetailsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>MealDetailsScreen</Text>
            <Button title='GO BACK TO CATEGOTIES' onPress={() => {
                props.navigation.popToTop();
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

export default MealDetailsScreen;