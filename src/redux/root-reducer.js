import { createStore } from 'redux';

import { safeReducer } from './reducers'; 

const store = createStore(safeReducer);

export default store;