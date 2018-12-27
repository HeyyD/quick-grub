import React, {Component} from 'react';
import { FlatList } from 'react-native';
import RecipeButton from './RecipeButton';

export default class RecipeList extends Component {

  static navigationOptions = {
    title: 'Recipe list'
  }

  constructor(props) {
    super(props);
    const searchProps = this.props.navigation.state.params;
    console.log(searchProps);

    this.state = {
      APP_ID: '685bcca3',
      APP_KEY: '2e9706babb21c1594844fe1f2d45113b',
      searchInfo: searchProps,
      recipes: []
    };
  }

  componentDidMount() {
    fetch(`https://api.edamam.com/search?q=${this.state.searchInfo.searchValue}&app_id=${this.state.APP_ID}&app_key=${this.state.APP_KEY}&from=0&to=100`)
    .then(res => res.json())
    .then(res => {
      const recipes = res.hits.map(hit => hit.recipe);
      console.log(recipes);
      this.setState({recipes: recipes});
    });
  }

  render() {
    return (
      <FlatList numColumns={3}
        data={this.state.recipes}
        renderItem={({item}) => <RecipeButton data={item} /> }
        keyExtractor={(item, index) => index.toString()}
      >
      </FlatList>
    );
  }
}