import React, { Component } from 'react';
import { Text } from 'react-native';

export default class FilterTags extends Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log(this.props.items);
  }

  render() {
    return (
      <Text>TAGS</Text>
    );
  }
}
