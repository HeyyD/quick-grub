import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import FavoriteListItem from './FavoriteListItem';

class Favorites extends Component {
  render() {
    return(
      <FlatList
        data={ this.props.favorites }
        renderItem={ ({item}) => <FavoriteListItem data={item} /> }
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
