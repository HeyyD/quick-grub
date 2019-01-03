import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import RecipeList from './RecipeList';
import Search from './Search';
import RecipePage from './RecipePage';
import Favorites from './Favorites';

const stackNavigation = createStackNavigator({
  search: { screen: Search },
  recipeList: { screen: RecipeList },
  recipePage: { screen: RecipePage }
});

const bottomNavigation = createBottomTabNavigator({
  Search: {
    screen: stackNavigation,
    navigationOptions: {
      tabBarIcon: <Image style={{width: 25, height: 25}} source={ require('../assets/search-icon-png-21.png') } />
    }
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      tabBarIcon: <Image style={{width: 25, height: 25}} source={ require('../assets/icon-heart-rate.png') } />
    }
  }
});

const AppContainer = createAppContainer(bottomNavigation);


class Navigation extends Component {

  componentDidMount() {
    this.props.init();
  }

  render() {
    return (
      <AppContainer />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    init: () => {
      dispatch({
        type: 'INIT'
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(Navigation)
