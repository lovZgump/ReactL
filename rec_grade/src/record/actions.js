import {ADD_GRADE, TOGGLE_GRADE, REMOVE_GRADE} from "./actionTypes";

let nextRecord = 0;

export const addGrade = (record) => ({
    type: ADD_GRADE,
    completed: false,
    id: nextRecord++,
    record: record
});

export const toggleGrade = (id) => ({
    type: TOGGLE_GRADE,
    id: id
});

export const removeGrade = (id) => ({
    type: REMOVE_GRADE,
    id: id
});