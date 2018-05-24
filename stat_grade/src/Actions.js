import * as ActionTypes from './ActionTypes.js';
import AppDispatcher from './AppDispatcher.js';

export  const add = (Record) => {
    AppDispatcher.dispatch({
        type:ActionTypes.ADD,
        Record:Record
    });
};

export  const input = (Caption, Value) => {
    AppDispatcher.dispatch({
        type:ActionTypes.INPUT,
        Caption: Caption,
        Value: Value
    });
};