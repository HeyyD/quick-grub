import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import styles from './RecipePage.scss';
import data from './tempData.json';

export default class RecipePage extends Component {

  static navigationOptions = {
    title: 'Recipe'
  }

  constructor(props) {
    super(props);
    // const data = this.props.navigation.state.params.data;
    console.log(data);
  }

  render() {
    return (
      <View>
        <View style={styles['recipe-background-container']}>
          <Image style={styles['recipe-background-image']} source={ {uri: data.image} } />
          <View style={styles['recipe-background-overlay']}></View>
        </View>
      </View>
    );
  }
}
