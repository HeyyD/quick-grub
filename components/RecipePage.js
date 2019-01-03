import React, { Component } from 'react';
import { Text, Image, View, Button, Linking, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import styles from './RecipePage.scss';

class RecipePage extends Component {

  data;

  static navigationOptions = {
    title: 'Recipe'
  }

  constructor(props) {
    super(props);

    this.data = this.props.navigation.state.params.data;

    this.saveFavorite = this.saveFavorite.bind(this);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.favorites !== this.props.favorites) {
      this.saveFavorite();
    }
  }

  async saveFavorite() {
    await AsyncStorage.setItem('FAVORITES', JSON.stringify(this.props.favorites));
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
            <Button title="add to favorites" onPress={() => this.props.addFavorite(this.data)} />
          </View>
          <View style={styles['recipe-content-link']}>
            <Button title='Go to recipe' onPress={() => Linking.openURL(this.data.url)} />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    favorites: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFavorite: (data) => {
      dispatch({
        type: 'ADD_FAVORITE',
        data: data
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
