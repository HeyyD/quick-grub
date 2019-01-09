import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, AsyncStorage } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import RecipeList from './RecipeList';
import Search from './Search';
import RecipePage from './RecipePage';
import Favorites from './Favorites';

const searchStack = createStackNavigator({
  search: { screen: Search },
  recipeList: { screen: RecipeList },
  recipePage: { screen: RecipePage }
});

const favoritesStack = createStackNavigator({
  favorites: { screen: Favorites },
  recipePage: { screen: RecipePage }
});

const bottomNavigation = createBottomTabNavigator({
  Search: {
    screen: searchStack,
    navigationOptions: {
      tabBarIcon: <Icon color='gray' name='search' size={25} />
    }
  },
  Favorites: {
    screen: favoritesStack,
    navigationOptions: {
      tabBarIcon: <Icon color='gray' name='heart' size={25} />
    }
  }
});

const AppContainer = createAppContainer(bottomNavigation);


class Navigation extends Component {

  async componentDidMount() {
    let data = await AsyncStorage.getItem('FAVORITES');
    if (data) {
      data = JSON.parse(data);
      this.props.init(data)
    }
  }

  render() {
    return (
      <AppContainer />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    init: (data) => {
      dispatch({
        type: 'INIT',
        data: data
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(Navigation)
