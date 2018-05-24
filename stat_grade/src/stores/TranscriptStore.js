import AppDispatcher from '../AppDispatcher.js';
import * as ActionTypes from '../ActionTypes.js';
import {EventEmitter} from 'events';


const CHANGE_EVENT =  'add';

const records = [];

const TranscriptStore = Object.assign({}, EventEmitter.prototype, {
    getAll: function () {
        return records;
    },


    addNewRecordHandler:function(record){
        records.push(record)
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

TranscriptStore.dispatchToken = AppDispatcher.register((action) => {
    if (action.type === ActionTypes.ADD) {
        TranscriptStore.addNewRecordHandler(action.Record);
        console.log(action.Record);
        TranscriptStore.emitChange();
    }
});

export default TranscriptStore;