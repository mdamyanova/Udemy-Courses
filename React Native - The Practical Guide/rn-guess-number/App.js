import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    //'proxima': require('./assets/fonts/ProximaNova-Regular.otf'),
    //'proxima-bold': require('./assets/fonts/Proxima Nova Bold.otf')
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return <AppLoading startAsync={fetchFonts}
      onFinish={() => { setDataLoaded(true) }}
      onError={(error) => console.log(error)} />; 
}

const restartGameHandler = () => {
  setGuessRounds(0);
  setUserNumber(null);
};

const startGameHandler = (selectedNumber) => {
  setUserNumber(selectedNumber);
};

const gameOverHandler = numberOfRounds => {
  setGuessRounds(numberOfRounds);
};

let content = <StartScreen onStartGame={startGameHandler} />;

if (userNumber && guessRounds <= 0) {
  content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
} else if (guessRounds > 0) {
  content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={restartGameHandler} />
}

return (
  <View style={styles.screen}>
    <Header title='Guess the Number' />
    {content}
  </View>
);
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
