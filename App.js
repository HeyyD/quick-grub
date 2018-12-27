import{ createStackNavigator, createAppContainer } from 'react-navigation';
import RecipeList from './components/RecipeList';
import Search from './components/Search';

const stackNavigation = createStackNavigator({
  search: { screen: Search },
  recipeList: { screen: RecipeList }
});

const App = createAppContainer(stackNavigation);

export default App;
