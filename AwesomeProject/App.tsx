import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const COUNTER_DEFAULT = 0;

function App(): JSX.Element {
  const [counter, increaseCounter] = useState(COUNTER_DEFAULT);
  return (
    <View style={styles.container}>
      <Text>Increase Counte: {counter}</Text>
      <View style={styles.containerButtons}>
        <Button title="-" onPress={() => increaseCounter(counter - 1)} />
        <Button
          title="Reset"
          onPress={() => increaseCounter(COUNTER_DEFAULT)}
        />
        <Button title="+" onPress={() => increaseCounter(counter + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButtons: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
