import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Tag extends Component {
  render() {
    return (
      <Text>{ this.props.text }</Text>
    );
  }
}
