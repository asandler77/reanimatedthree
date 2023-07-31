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
    <View
      style={{
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'blue',
        paddingHorizontal: 2,
        marginVertical: 2,
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 1,
        width: 350,
      }}>
      <Text style={{fontSize: 20, marginLeft: 8}}>{item}</Text>
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
  };

  const onChangeText = (item: string) => {
    setInput(item);
  };

  const deleteItem = (itemToRemove: string) => {
    const updatedList = list.filter(it => it.id !== itemToRemove);
    setList(updatedList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 60}}> רשימת קניות</Text>
      <FlatList
        style={{marginTop: 20}}
        data={list}
        renderItem={({item}) => (
          <Item listItem={item} onDeletePress={deleteItem} />
        )}
        keyExtractor={item => item.id}
      />

      <View style={{flexDirection: 'row'}}>
        <Text style={styles.title}>Add item</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={input}
        />
        <TouchableOpacity style={styles.button} onPress={onAddPress}>
          <Text style={styles.buttonTitle}>Add</Text>
        </TouchableOpacity>
      </View>
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
  },
  button: {
    backgroundColor: '#00ffff',
    borderRadius: 8,
    alignSelf: 'center',
    minHeight: 40,
  },
  input: {
    backgroundColor: '#f5f5dc',
    minHeight: 40,
    minWidth: 150,
    fontSize: 22,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  title: {
    fontSize: 22,
    alignSelf: 'center',
  },
});
