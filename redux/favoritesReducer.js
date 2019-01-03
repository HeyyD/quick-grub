import { createStore } from 'redux';

const reducer = (state = [], action) => {
  switch(action.type) {
    case 'INIT':
      console.log('REDUCER IS INITING');
      return state;
    case 'ADD_FAVORITE':
      console.log(state);
      return [...state, action.data]
    default: 
      return state;
  }
}

let store = createStore(reducer);

export default store;
