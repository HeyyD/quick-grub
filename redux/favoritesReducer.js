import { createStore } from 'redux';

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'INIT':
      state = action.data;
      return state;
    case 'ADD_FAVORITE':
      return [...state, action.data]
    default: 
      return state;
  }
}

let store = createStore(reducer);

export default store;
