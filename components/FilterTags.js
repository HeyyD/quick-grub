import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './FilterTags.scss';
import Tag from './Tag';

export default class FilterTags extends Component {

  render() {
    return (
      <View style={styles['tag-container']}>
        {
          this.props.items.map((item, index) => {
            return <Tag key={ index } text={ item } onPress={() => this.props.onPress(item)} />
          })
        }
      </View>
    );
  }
}
