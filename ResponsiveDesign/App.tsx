import React from 'react';
import {Dimensions, StyleSheet, View, useWindowDimensions} from 'react-native';

export function FixedDimensions() {
  return (
    <View>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'pink',
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'skyblue',
        }}
      />
      <View
        style={{
          width: 350,
          height: 150,
          backgroundColor: 'tomato',
        }}
      />
    </View>
  );
}

export function PercentageDimensions() {
  return (
    <View style={{height: '100%'}}>
      <View
        style={{
          height: '15%',
          backgroundColor: 'powderblue',
        }}
      />
      <View
        style={{
          width: '66%',
          height: '35%',
          backgroundColor: 'skyblue',
        }}
      />
      <View
        style={{
          width: '33%',
          height: '50%',
          backgroundColor: 'steelblue',
        }}
      />
    </View>
  );
}

export function DeviceDimensions() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const {height, width} = useWindowDimensions();

  return (
    <View>
      <View
        style={{
          width: 100,
          height: height * 0.4,
          backgroundColor: 'pink',
        }}
      />
      <View
        style={{
          width: windowWidth / 2,
          height: 100,
          backgroundColor: 'skyblue',
        }}
      />
      <View
        style={{
          width: width,
          height: 150,
          backgroundColor: 'tomato',
        }}
      />
    </View>
  );
}

export function FlexExample() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'orange',
          flex: 0.5,
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          flex: 2,
        }}
      />
      <View
        style={{
          backgroundColor: 'plum',
          flex: 1,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: 'row',
  },
});

const App =
  // FlexExample;
  // DeviceDimensions;
  // PercentageDimensions
  FixedDimensions;
export default App;
