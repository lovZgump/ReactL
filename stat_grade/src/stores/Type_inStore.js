import AppDispatcher from '../AppDispatcher.js';
import * as ActionTypes from '../ActionTypes.js';
import {EventEmitter} from 'events';

const CHANGE_EVENT =  'type_in';

const typeinValues = {
    'Name':"",
    'Chinese':0,
    'Math':0,
    'English':0,
    'Physic':0
};

const Type_inStore = Object.assign({}, EventEmitter.prototype, {
    getTypeinValues: function() {
        return typeinValues;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

});

Type_inStore.dispatchToken = AppDispatcher.register((action) => {
    if (action.type === ActionTypes.INPUT) {
        typeinValues[action.Caption] = action.Value;
        Type_inStore.emitChange();
    }
});

export default Type_inStore;