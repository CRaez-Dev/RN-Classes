import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Card from './src/components/Card/Card';
import {ANIMALS} from './src/store/animals';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.containerScroll}>
        <View style={styles.containerCards}>
          {ANIMALS.map((data, index) => (
            <Card key={index} {...data} size={'sm'} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerScroll: {
    padding: 8,
  },
  containerCards: {
    flexDirection: 'column',
    rowGap: 10,
  },
});

export default App;
