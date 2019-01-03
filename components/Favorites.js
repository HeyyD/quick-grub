import React, { Component } from 'react';
import { FlatList, Alert } from 'react-native';
import { connect } from 'react-redux';
import FavoriteListItem from './FavoriteListItem';

class Favorites extends Component {

  static navigationOptions = {
    title: 'Favorites'
  }

  constructor(props) {
    super(props);
    this.onNavigate = this.onNavigate.bind(this);
    this.onMenu = this.onMenu.bind(this);
  }

  onNavigate(item) {
    this.props.navigation.navigate('recipePage', { data: item });
  }

  onMenu(item) {
    Alert.alert(
      'Remove favorite?',
      `Are you sure you want remove ${item.label}?`,
      [
        {text: 'Yes', onPress: () => console.log('YES')},
        {text: 'No', onPress: () => console.log('Canceled')},
      ],
      { cancelable: true }
    )
  }

  render() {
    return(
      <FlatList
        data={ this.props.favorites }
        renderItem={ ({item}) => <FavoriteListItem data={ item } onPress={ () => this.onNavigate(item) }onMenu={ () => this.onMenu(item) } /> }
        keyExtractor={ (item, index) => index.toString() }
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    favorites: state
  }
}

export default connect(mapStateToProps)(Favorites);
