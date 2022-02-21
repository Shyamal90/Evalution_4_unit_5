import {createStore} from 'redux';
import {SearchReducer} from './reducer';

export const store = createStore(SearchReducer);