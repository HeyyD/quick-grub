import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import FavoriteListItem from './FavoriteListItem';

class Favorites extends Component {

  static navigationOptions = {
    title: 'Favorites'
  }

  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
  }

  navigate(item) {
    this.props.navigation.navigate('recipePage', { data: item });
  }

  render() {
    return(
      <FlatList
        data={ this.props.favorites }
        renderItem={ ({item}) => <FavoriteListItem data={ item } onPress={ () => this.navigate(item) } /> }
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
