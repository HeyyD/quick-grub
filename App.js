import{ createStackNavigator, createAppContainer } from 'react-navigation';
import RecipeList from './components/RecipeList';
import Search from './components/Search';
import RecipePage from './components/RecipePage';

const stackNavigation = createStackNavigator({
  // search: { screen: Search },
  recipePage: { screen: RecipePage },
  recipeList: { screen: RecipeList }
});

const App = createAppContainer(stackNavigation);

export default App;
