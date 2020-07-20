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
  StatusBar,
} from 'react-native';
import {Container, Content, Text, StyleProvider} from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

import Hello from './Hello';

const App: () => React$Node = () => {
  return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <Content>
          <Text>fff</Text>
        </Content>
      </Container>
    </StyleProvider>
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
