import React, {useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';

type Theme = 'light' | 'dark';

export const ToggleAnimation = () => {
  const [theme, setTheme] = useState<Theme>('light');

  const Colors = {
    dark: {
      background: '#1E1E1E',
      circle: '#252525',
      text: '#F8F8F8',
    },
    light: {
      background: '#F8F8F8',
      circle: '#FFF',
      text: '#1E1E1E',
    },
  };

  const SWITCH_TRACK_COLOR = {
    true: `rgba(256,0,256, 0.2)`,
    false: `rgba(0,0,0, 0.1)`,
  };

  return (
    <View style={styles.container}>
      <Text>Aaaa</Text>
      <Switch
        value={theme === 'dark'}
        trackColor={SWITCH_TRACK_COLOR}
        thumbColor={'violet'}
        onValueChange={toggled => {
          setTheme(toggled ? 'dark' : 'light');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
