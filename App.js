/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View } from 'react-native';
import RecipeList from './components/RecipeList';
import Search from './components/Search';

export default class App extends Component {
  render() {
    return (
      <View>
        <Search />
      </View>
    );
  }
}
