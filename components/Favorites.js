import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

class Favorites extends Component {
  render() {
    return(
      <View>
        <Text>FAVORITES WORKING</Text>
      </View>
    );
  }
}

export default connect()(Favorites);
