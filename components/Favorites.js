import React, { Component } from 'react';
import { Text } from 'react-native';
import store from '../redux/favoritesReducer';


export default class Favorites extends Component {

  componentDidMount() {
    console.log(store.getState());
  }

  render() {
    return(
      <Text>FAVORITES WORK</Text>
    );
  }
}
