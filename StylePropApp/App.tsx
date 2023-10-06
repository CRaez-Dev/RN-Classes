import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {flattenStyle, styles, text} from './styles';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.myStyle}>The Style prop</Text>
      <Text style={text}>The Style prop</Text>
      <Text>{JSON.stringify(flattenStyle)}</Text>
      <StatusBar />
    </View>
  );
}

export default App;
