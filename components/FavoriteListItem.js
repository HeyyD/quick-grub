import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './FavoriteListItem.scss';

export default class FavoriteListItem extends Component {
  render() {
    return(
      <View style={ styles['list-item-container'] }>
        <TouchableOpacity style={ styles['list-item-label'] } onPress={ this.props.onPress }>
          <Text style={ styles['list-item-label-text'] }>{ this.props.data.label }</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles['list-item-menu'] } onPress={ this.props.onMenu }>
          <Icon style={ styles['list-item-menu-icon'] } color='gray' name='ellipsis-v' size={25} />
        </TouchableOpacity>
      </View>
    );
  }
}
