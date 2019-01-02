import { createStore } from 'redux';

const favorites = [];

const reducer = (state = favorites, action) => {
  switch(action.type) {
    default: 
      return state;
  }
}

let store = createStore(reducer);

export default store;
