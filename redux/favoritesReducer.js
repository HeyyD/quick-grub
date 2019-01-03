import { createStore } from 'redux';

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FAVORITE':
      return [...state, state.length]
    default: 
      return state;
  }
}

let store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

export default store;
