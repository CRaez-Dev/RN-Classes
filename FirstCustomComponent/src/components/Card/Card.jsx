import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Card = ({name, description, imageUrl, size}) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.imageStyle}
        source={{uri: imageUrl, ...styles.imageSize}}
      />
      <Text style={styles.textTitle}>{name}</Text>
      <Text style={styles.textDescription}>{description}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    width: 350,
    height: 526,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 30,
    marginBottom: 30,
  },
  imageStyle: {
    borderRadius: 20,
  },
  imageSize: {
    width: '100%',
    height: 420,
  },

  textTitle: {fontSize: 28, fontWeight: 'bold', marginTop: 5},
  textDescription: {fontSize: 18, marginTop: 5},
});
