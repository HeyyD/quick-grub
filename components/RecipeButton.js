import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, Dimensions } from 'react-native';

import styles from './RecipeButton.scss';

export default class RecipeButton extends Component {

  render() {

    const size = Dimensions.get('window').width / 3;

    return (
      <TouchableOpacity style={{...styles['recipe-button-container'], height: size, width: size}}>
        <Image style={styles['recipe-button-container-image']} source={{uri: this.props.img}} />
        <Text style={styles['recipe-button-container-text']}>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }
}
