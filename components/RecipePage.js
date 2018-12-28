import React, { Component } from 'react';
import { Text, Image, View, Button, Linking } from 'react-native';
import styles from './RecipePage.scss';
import data from './tempData.json';

export default class RecipePage extends Component {

  data;

  static navigationOptions = {
    title: 'Recipe'
  }

  constructor(props) {
    super(props);
    // const data = this.props.navigation.state.params.data;
    console.log(data);
    this.data = data;
  }

  render() {
    return (
      <View style={styles['recipe']}>
        <View style={styles['recipe-background-container']}>
          <Image style={styles['recipe-background-image']} source={ {uri: this.data.image} } />
          <View style={styles['recipe-background-overlay']}></View>
        </View>
        <View style={styles['recipe-content']}>
          <Text style={styles['recipe-content-title']}>{this.data.label}</Text>
          <View style={styles['recipe-ingredients']}>
            {
              this.data.ingredientLines.map((line, index) => {
                return <Text style={styles['recipe-ingredients-line']} key={index}>- {line}</Text>;
              })
            }
          </View>
          <Button style={styles['recipe-content-link']} title='Go to recipe' onPress={() => Linking.openURL(this.data.url)} />
        </View>
      </View>
    );
  }
}
