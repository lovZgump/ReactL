import {ADD_GRADE, TOGGLE_GRADE, REMOVE_GRADE} from "./actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case ADD_GRADE: {
            return [
                {
                    id: action.id,
                    record: action.record,
                    completed: false
                },
                ...state
            ]
        }
        case TOGGLE_GRADE: {
            return state.map((recordItem) => {
               if (recordItem.id === action.id) {
                   return {...recordItem, completed: !recordItem.completed};
               } else  {
                   return recordItem;
               }
            })
        }
        case REMOVE_GRADE: {
            return state.filter((recordItem) => {
                return recordItem.id !== action.id;
            })
        }
        default: {
            return state;
        }
    }
}