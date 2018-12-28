import React, { Component } from 'react';
import { Text } from 'react-native';
import data from './tempData.json';

export default class RecipePage extends Component {

  constructor(props) {
    super(props);
    // const data = this.props.navigation.state.params.data;
    console.log(data);
  }

  render() {
    return (
      <Text>RecipePage</Text>
    );
  }
}
