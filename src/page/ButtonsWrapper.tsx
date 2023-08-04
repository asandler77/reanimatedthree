import React from 'react';
import {Text, View} from 'react-native';
import AnimatedBox from './ButtonVersionOne';
import { EntryPoint } from "./EntryPoint";

export const ButtonsWrapper = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 70,
      }}>
      <Text>Wrapper</Text>
      {/*<AnimatedBox />*/}
      <EntryPoint />
    </View>
  );
};
