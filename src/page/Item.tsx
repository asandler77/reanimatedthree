import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ListData} from './TodoList';

interface Item {
  listItem: ListData;
  onDeletePress: (item: string) => void;
}
export const Item = (props: Item) => {
  const {onDeletePress, listItem} = props;
  const {item, id} = listItem;
  const onPress = () => {
    onDeletePress(id);
  };
  return (
    <View style={styles.itemContainer}>
      <Text
        style={{
          fontSize: 26,
          lineHeight: 36,
          marginLeft: 16,
          flex: 1,
          flexWrap: 'wrap',
        }}
        ellipsizeMode={'tail'}
        numberOfLines={1}>
        {item}
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            fontSize: 20,
            lineHeight: 36,
            marginHorizontal: 16,
            opacity: 0.5,
          }}>
          x
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonTitle: {
    fontSize: 22,
    lineHeight: 36,
    // width: 150,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#00ffff',
    borderRadius: 8,
    alignSelf: 'center',
    minHeight: 40,
    marginTop: 10,
    width: 350,
  },
  input: {
    height: 40,
    width: 350,
    fontSize: 32,
    lineHeight: 36,
  },
  title: {
    fontSize: 22,
    alignSelf: 'center',
  },
  addContainer: {flexDirection: 'row'},
  itemContainer: {
    borderRadius: 20,
    backgroundColor: 'beige',
    borderColor: 'blue',
    paddingHorizontal: 2,
    marginVertical: 2,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 350,
    height: 36,
  },
});
