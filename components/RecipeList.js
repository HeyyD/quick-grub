import React, {Component} from 'react';
import {View} from 'react-native';
import RecipeButton from './RecipeButton';

import styles from './RecipeList.scss';

export default class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      APP_ID: '685bcca3',
      APP_KEY: '2e9706babb21c1594844fe1f2d45113b',
      recipes: []
    };
  }

  componentDidMount() {
    fetch(`https://api.edamam.com/search?q=chicken&app_id=${this.state.APP_ID}&app_key=${this.state.APP_KEY}&calories=591-722&health=alcohol-free`)
    .then(res => res.json())
    .then(res => {
      const recipes = res.hits.map(hit => hit.recipe);
      console.log(recipes);
      this.setState({recipes: recipes});
    });
  }

  render() {
    return (
      <View style={styles['recipe-list-container']}>
        {
          this.state.recipes.map((recipe, index) => <RecipeButton
            key={index}
            label={recipe.label}
            img={recipe.image}
           />)
        }
      </View>
    );
  }
}