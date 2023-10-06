import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myStyle: {
    backgroundColor: 'orange',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export const list = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: '#61dafb',
  },
  listItem: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'purple',
  },
});

export const text = StyleSheet.compose(styles.myStyle, list.listItem);

export const flattenStyle = StyleSheet.flatten([styles.myStyle, list.listItem]);
