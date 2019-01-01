import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './FilterTags.scss';

export default class FilterTags extends Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log(this.props.items);
  }

  render() {
    return (
      <View style={styles['tag-container']}>
        {
          Array.from(this.props.items).map((item, index) => {
            return <Text key={ index }>{ item }</Text>;
          })
        }
      </View>
    );
  }
}
