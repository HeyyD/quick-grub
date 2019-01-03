import React, { Component } from 'react';
import { Text, Image, View, Button, Linking, AsyncStorage, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './RecipePage.scss';
import Icon from 'react-native-vector-icons/FontAwesome';

class RecipePage extends Component {

  data;

  static navigationOptions = {
    title: 'Recipe'
  }

  constructor(props) {
    super(props);

    this.data = this.props.navigation.state.params.data;

    this.saveFavorites = this.saveFavorites.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this)
  }

  componentDidUpdate(prevProps) {
    if(prevProps.favorites !== this.props.favorites) {
      this.saveFavorites();
    }
  }

  toggleFavorite() {
    if (this.props.favorites.includes(this.data)) {
      this.props.removeFavorite(this.data);
    } else {
      this.props.addFavorite(this.data);
    }
  }

  async saveFavorites() {
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
          <View style={styles['recipe-content-header']}>
            <Text style={styles['recipe-content-title']}>{this.data.label}</Text>
            <TouchableOpacity 
              style={styles['recipe-content-favorite']}
              onPress={ () => this.toggleFavorite() }
            >
              <Icon 
                style={styles['recipe-content-favorite-icon']}
                color={ this.props.favorites.includes(this.data) ? '#b3002d' : 'gray' }
                name='heart'
                size={40} />
            </TouchableOpacity>
          </View>
          <FlatList
            style={styles['recipe-ingredients']}
            data={ this.data.ingredientLines }
            renderItem={ ({item}) => <Text style={styles['recipe-ingredients-line']}>- { item }</Text> }
            keyExtractor={ (item, index) => index.toString() }
          />
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
    },
    removeFavorite: (data) => {
      dispatch({
        type: 'REMOVE_FAVORITE',
        data: data
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
