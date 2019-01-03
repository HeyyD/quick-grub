import React, { Component } from 'react';
import { Text } from 'react-native';

export default class FavoriteListItem extends Component {
  render() {
    return(
      <Text>{ this.props.data.label }</Text>
    );
  }
}
