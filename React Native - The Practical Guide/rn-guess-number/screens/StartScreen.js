import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import Card from '../components/Card';

const StartScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.input}>
                <Text>Select a Number</Text>
                <TextInput placeholder='' />
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button title='Reset' onPress={() => { }} color={Colors.secondary} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Confirm' onPress={() => { }} color={Colors.primary} />
                    </View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    input: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttons: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    }
});

export default StartScreen;