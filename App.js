/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import styles from './App.scss'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      APP_ID: '685bcca3',
      APP_KEY: '2e9706babb21c1594844fe1f2d45113b'
    };
  }

  componentDidMount() {
    fetch(`https://api.edamam.com/search?q=chicken&app_id=${this.state.APP_ID}&app_key=${this.state.APP_KEY}&calories=591-722&health=alcohol-free`)
    .then(res => res.json())
    .then(res => {
      res.hits.forEach(hit => {
        console.log(hit.recipe);
      })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>APP IS WORKING</Text>
      </View>
    );
  }
}
