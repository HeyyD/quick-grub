import React, { Component } from 'react';
import { Text, TextInput, View, Picker, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    this.onRemoveTag = this.onRemoveTag.bind(this);

    this.state = {
      searchValue: '',
      item: null,
      items: []
    }
  }

  onSearchChange(value) {
    this.setState( {searchValue: value} );
  }

  onPickerChange(item) {
    this.pickedItems.add(item);

    this.setState({
      item: item,
      items: [...this.pickedItems]
    });
  }

  onRemoveTag(tag) {
    this.pickedItems.delete(tag);

    this.setState({
      items: [...this.pickedItems]
    });
  }

  render() {
    return(
      <View style={styles['search']}>
        <View style={styles['search-input']}>
          <View style={ styles['search-input-container'] }>
            <TextInput style={ styles['search-input-container-textinput'] } placeholder='Find a recipe' onChangeText={ (value) => this.onSearchChange(value) } />
            <TouchableOpacity 
              style={ styles['search-input-container-button'] }
              onPress={() => this.props.navigation.navigate('recipeList', { 
                searchValue: this.state.searchValue,
                labels: this.state.items
              })}
            >
              <Icon color='gray' name='search' size={20} />
            </TouchableOpacity>
          </View>
          <Text style={styles['search-input-label']}>Pick labels</Text>
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
          <FilterTags items={ this.state.items } onPress={this.onRemoveTag} />
        </View>
        <View style={styles['search-button-container']}>
          <Button
            title='Search'
            onPress={() => this.props.navigation.navigate('recipeList', { 
              searchValue: this.state.searchValue,
              labels: this.state.items
            })}
          />
        </View>
      </View>
    );
  }
}
