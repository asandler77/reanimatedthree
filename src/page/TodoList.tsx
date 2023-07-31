import React, {ReactElement, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface ListData {
  id: string;
  item: string;
}

interface Item {
  listItem: ListData;
  onDeletePress: (item: string) => void;
}
const Item = (props: Item) => {
  const {onDeletePress, listItem} = props;
  const {item, id} = listItem;
  const onPress = () => {
    onDeletePress(id);
  };
  return (
    <View style={styles.itemContainer}>
      <Text style={{fontSize: 26, lineHeight: 36, marginLeft: 8}}>{item}</Text>
      <TouchableOpacity style={{backgroundColor: 'red'}} onPress={onPress}>
        <Text style={{fontSize: 20, marginHorizontal: 8}}>x</Text>
      </TouchableOpacity>
    </View>
  );
};

export const TodoList = (): ReactElement => {
  const [input, setInput] = useState('');
  const [list, setList] = useState<ListData[]>([]);

  const onAddPress = () => {
    const id = Date.now().toString();
    const newItem: ListData = {id, item: input};
    const newList = [...list, newItem];
    setList(newList);
    setInput('');
  };

  const onChangeText = (item: string) => {
    setInput(item);
  };

  const deleteItem = (itemToRemove: string) => {
    const updatedList = list.filter(it => it.id !== itemToRemove);
    setList(updatedList);
  };

  const deleteInput = () => {
    setInput('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 60}}>Todo list</Text>
      <FlatList
        data={list}
        renderItem={({item}) => (
          <Item listItem={item} onDeletePress={deleteItem} />
        )}
        keyExtractor={item => item.id}
      />

      <>
        <View style={{flexDirection: 'row', backgroundColor: '#f5f5dc'}}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={input}
            placeholder={'Add here the item ...'}
          />
          <TouchableOpacity onPress={deleteInput}>
            <Text
              style={{
                fontSize: 26,
                lineHeight: 36,
                opacity: 0.5,
                paddingHorizontal: 8,
              }}>
              x
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={onAddPress}>
          <Text style={styles.buttonTitle}>Add</Text>
        </TouchableOpacity>
      </>
    </SafeAreaView>
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
    width: 150,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#00ffff',
    borderRadius: 8,
    alignSelf: 'center',
    minHeight: 40,
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
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'blue',
    paddingHorizontal: 2,
    marginVertical: 2,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    width: 350,
    height: 36,
  },
});
