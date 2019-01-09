import React, { Component } from 'react';
import { Text, TouchableOpacity} from 'react-native';
import styles from './Tag.scss';

export default class Tag extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles['tag-wrapper']}>
        <Text style={styles['tag-wrapper-name']}>{ this.props.text }</Text>
        <Text style={styles['tag-wrapper-cross']}>X</Text>
      </TouchableOpacity>
    );
  }
}
