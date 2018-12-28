import{ createStackNavigator, createAppContainer } from 'react-navigation';
import RecipeList from './components/RecipeList';
import Search from './components/Search';
import RecipePage from './components/RecipePage';

const stackNavigation = createStackNavigator({
  search: { screen: Search },
  recipeList: { screen: RecipeList },
  recipePage: { screen: RecipePage }
});

const App = createAppContainer(stackNavigation);

export default App;
