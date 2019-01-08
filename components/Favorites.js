import React, { Component } from 'react';
import { FlatList, Alert, AsyncStorage, Text } from 'react-native';
import { connect } from 'react-redux';
import FavoriteListItem from './FavoriteListItem';

import styles from './Favorites.scss';

class Favorites extends Component {

  static navigationOptions = {
    title: 'Favorites'
  }

  constructor(props) {
    super(props);
    this.onNavigate = this.onNavigate.bind(this);
    this.onMenu = this.onMenu.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
  }

  onNavigate(item) {
    this.props.navigation.navigate('recipePage', { data: item });
  }

  onMenu(item) {
    Alert.alert(
      'Remove favorite?',
      `Are you sure you want remove ${item.label}?`,
      [
        {text: 'Yes', onPress: () => this.props.removeFavorite(item)},
        {text: 'No', onPress: () => console.log('Canceled')},
      ],
      { cancelable: true }
    )
  }

  async removeFavorite() {
    await AsyncStorage.setItem('FAVORITES', JSON.stringify(this.props.favorites));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.favorites !== this.props.favorites) {
      this.removeFavorite();
    }
  }

  render() {
    if(this.props.favorites.length < 1) {
      return <Text style={ styles['no-favorites-title'] }>You don't have any favorites yet</Text>
    } else {
      return(
        <FlatList
          data={ this.props.favorites }
          renderItem={ ({item}) => <FavoriteListItem data={ item } onPress={ () => this.onNavigate(item) } onMenu={ () => this.onMenu(item) } /> }
          keyExtractor={ (item, index) => index.toString() }
        />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    favorites: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFavorite: (data) => {
      dispatch({
        type: 'REMOVE_FAVORITE',
        data: data
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
