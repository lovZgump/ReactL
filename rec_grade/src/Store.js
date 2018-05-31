import {createStore, combineReducers} from 'redux'

import {reducer as recordReducer} from './record';
import {reducer as filterReducer} from './filter';

const reducer = combineReducers({
    records: recordReducer,
    filter: filterReducer
});


export default createStore(reducer);