import React, {Component} from 'react';
import { FlatList, ActivityIndicator, View, Text } from 'react-native';
import RecipeButton from './RecipeButton';

export default class RecipeList extends Component {

  static navigationOptions = {
    title: 'Recipe list'
  }

  constructor(props) {
    super(props);

    this.onNavigate = this.onNavigate.bind(this);

    const searchProps = this.props.navigation.state.params;

    this.state = {
      APP_ID: '685bcca3',
      APP_KEY: '2e9706babb21c1594844fe1f2d45113b',
      isLoading: true,
      searchInfo: searchProps,
      recipes: []
    };
  }

  componentDidMount() {
    let url = `https://api.edamam.com/search?q=${this.state.searchInfo.searchValue}&app_id=${this.state.APP_ID}&app_key=${this.state.APP_KEY}&from=0&to=90`

    if (this.state.searchInfo.dietLabel) {
      url += `&health=${this.state.searchInfo.dietLabel}`;
    }

    fetch(url)
    .then(res => res.json())
    .then(res => {
      const recipes = res.hits.map(hit => hit.recipe);
      this.setState({recipes: recipes, isLoading: false});
    })
    .catch(error => {
      console.log(error);
      this.setState({isLoading: false});
    });
  }

  onNavigate(item) {
    this.props.navigation.navigate('recipePage', { data: item });
  }

  render() {
    return (
      <View>
        { this.state.isLoading &&
          <ActivityIndicator size='large' />
        }
        {
          (this.state.recipes.length === 0 && !this.state.isLoading) &&
          <Text>No recipes found</Text>
        }
        <FlatList 
          numColumns={3}
          data={this.state.recipes}
          renderItem={({item}) => <RecipeButton data={item} onPress={() => this.onNavigate(item)}/> }
          keyExtractor={(item, index) => index.toString()}
        >
        </FlatList>
      </View>
    );
  }
}