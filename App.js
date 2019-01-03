import React, { Component } from 'react';
import { Image } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import RecipeList from './components/RecipeList';
import Search from './components/Search';
import RecipePage from './components/RecipePage';
import Favorites from './components/Favorites';
import store from './redux/favoritesReducer';

const stackNavigation = createStackNavigator({
  search: { screen: Search },
  recipeList: { screen: RecipeList },
  recipePage: { screen: RecipePage }
});

const bottomNavigation = createBottomTabNavigator({
  Search: {
    screen: stackNavigation,
    navigationOptions: {
      tabBarIcon: <Image style={{width: 25, height: 25}} source={ require('./assets/search-icon-png-21.png') } />
    }
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      tabBarIcon: <Image style={{width: 25, height: 25}} source={ require('./assets/icon-heart-rate.png') } />
    }
  }
});

const AppContainer = createAppContainer(bottomNavigation);

export default class App extends Component {
  render() {
    return(
      <Provider store={ store } >
        <AppContainer />
      </Provider>
    );
  }
};
