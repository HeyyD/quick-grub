import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

class Favorites extends Component {

  render() {
    return(
      <View>
        <Text>{this.props.favorites}</Text>
        <Button title='ASD' onPress={this.props.addFavorite}/>
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
    addFavorite: () => {
      dispatch({
        type: 'ADD_FAVORITE'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
