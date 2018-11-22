import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, Dimensions, View } from 'react-native';

import styles from './RecipeButton.scss';

export default class RecipeButton extends Component {

  render() {

    const size = Dimensions.get('window').width / 3;

    return (
      <TouchableOpacity style={{...styles['recipe-button'], height: size, width: size}}>
        <Image style={styles['recipe-button-image']} source={{uri: this.props.img}} />
        <View style={styles['recipe-button-overlay']}></View>
        <View style={styles['recipe-button-text-container']}>
          <Text style={styles['recipe-button-text']}>{this.props.label}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
