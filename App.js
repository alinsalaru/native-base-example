/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Hello from './Hello';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={general.body}>
          <View style={boxStyle.box}>
            <Hello />
          </View>
          <View style={boxStyle2.box}>
            <Hello />
          </View>
          <View style={boxStyle3.box}>
            <Hello />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const general = StyleSheet.create({
  body: {
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

const boxStyle = StyleSheet.create({
  box: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,0,0,0.3)',
  },
});

const boxStyle2 = StyleSheet.create({
  box: {
    ...boxStyle.box,
    backgroundColor: 'rgba(0,255,0,0.3)',
  },
});

const boxStyle3 = StyleSheet.create({
  box: {
    ...boxStyle.box,
    backgroundColor: 'rgba(0,0,255,0.3)',
  },
});

const boxStyle4 = StyleSheet.compose(boxStyle3.box, {
  backgroundColor: 'rgba(255,0,255,0.3)',
});

export default App;
