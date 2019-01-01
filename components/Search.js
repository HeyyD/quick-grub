import React, { Component } from 'react';
import { Text, TextInput, View, Picker, Button } from 'react-native';

import styles from './Search.scss';
import FilterTags from './FilterTags';

const dietLabels = {
  None: null,
  Alcohol_free: 'alcohol-free',
  Celery_free: 'celery-free',
  Crustacean_free: 'crustacean-free',
  Dairy_free: 'dairy-free',
  Egg_free: 'egg-free',
  Fish_free: 'fish-free',
  Gluten: 'gluten-free',
  Kidney_friendly: 'kidney-friendly',
  Kosher: 'kosher',
  Low_potassium: 'low-potassium',
  Lupine_free: 'lupine-free',
  Mustard_free: 'mustard-free',
  No_oil_added: 'No-oil-added',
  No_sugar: 'low-sugar',
  Paleo: 'paleo',
  Peanut_free: 'peanut-free',
  Pescatarian: 'pescatarian',
  Pork_free: 'pork-free',
  Red_meat_free: 'red-meat-free',
  Sesame_free: 'sesame-free',
  Shellfish_free: 'shellfish-free',
  Soy_free: 'soy-free',
  Sugar_conscious: 'sugar-conscious',
  Tree_nut_free: 'tree-nut-free',
  Vegan: 'vegan',
  Vegetarian: 'vegetarian',
  Wheat_free: 'wheat-free'
}

export default class Search extends Component {

  pickedItems = new Set();

  static navigationOptions = {
    title: 'Search'
  }

  constructor(props) {
    super(props);
    this.onPickerChange = this.onPickerChange.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);

    this.state = {
      searchValue: '',
      item: null
    }
  }

  onSearchChange(value) {
    this.setState( {searchValue: value} );
  }

  onPickerChange(item) {
    this.setState({item: item});
    this.pickedItems.add(item);
  }

  render() {
    return(
      <View style={styles['search']}>
        <View style={styles['search-input']}>
          <TextInput placeholder='Find a recipe' onChangeText={ (value) => this.onSearchChange(value) } />
          <Text style={styles['search-input-label']}>Pick label</Text>
          <FilterTags items={ this.pickedItems } />
          <Picker
            onValueChange={ (item) => this.onPickerChange(item) }
            selectedValue={ this.state.item }
          >
            {
              Object.keys(dietLabels).map(key => {
                return (
                  <Picker.Item
                    key={key}
                    label={key.split('_').join(' ')} 
                    value={dietLabels[key]}
                  />
                );
              })
            }
          </Picker>
        </View>
        <View style={styles['search-button-container']}>
          <Button
            title='Search'
            onPress={() => this.props.navigation.navigate('recipeList', { 
              searchValue: this.state.searchValue,
              dietLabel: this.state.pickedItems
            })}
          />
        </View>
      </View>
    );
  }
}
